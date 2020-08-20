import React from "react";
import styled from "@emotion/styled";
import WorkData from "../../constants/workdata";
import { useSpring, useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import Link from "next/link";
import logo from "../../images/logo_white.png";
const keyArray: string[] = Array.from(WorkData.keys());
const n: number = keyArray.length;

const clamp = (x: number, a: number, b: number) => {
  if (x < a) {
    return a;
  } else if (x > b) {
    return b;
  } else {
    return x;
  }
};

interface Props {
  author: string;
  englishTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
const TopToolBarAnimated: React.FC<Props> = ({
  author,
  englishTrigState: [englishTrig, setEnglishTrig],
}) => {
  const [thumbIndex, setThumbIndex] = React.useState(keyArray.indexOf(author));
  const [carouselPos, setCarouselPos] = React.useState(
    ((n - 1 - keyArray.indexOf(author)) * 375) / (2 * n + 1)
  );
  const [width, setWidth] = React.useState(375 / 2);
  const [props, set] = useSpring(() => ({
    transform: `translate3d(${
      ((n - 1 - keyArray.indexOf(author)) * 375) / (2 * n + 1)
    }px,0px,0px)`,
  }));
  const thumbAnimation = useSprings(
    n,
    keyArray.map((key, index) => ({
      width: index === n - 1 - thumbIndex ? `32px` : `16px`,
      height: index === n - 1 - thumbIndex ? `32px` : `16px`,
      name: key,
    }))
  );

  const [deltaWidth, setDeltaWidth] = React.useState(375 / (2 * n + 1));
  const bind = useDrag(({ down, delta: [dx] }) => {
    if (down) {
      setCarouselPos(carouselPos + dx);
    }
  });
  React.useEffect(() => {
    const a = 16;
    const b = 32;
    const c = (window.innerWidth / 2 - (n - 1) * a - b / 2) / n;
    setWidth(window.innerWidth / 2 + c + b / 2);
    setDeltaWidth(a + c);
    setCarouselPos((n - 1 - keyArray.indexOf(author)) * (a + c));
  }, []);
  React.useEffect(() => {
    setThumbIndex(clamp(Math.round(carouselPos / deltaWidth), 0, n - 1));
  }, [carouselPos]);
  React.useEffect(() => {
    set({ transform: `translate3d(${thumbIndex * deltaWidth}px,0px,0px)` });
  }, [thumbIndex]);

  return (
    <Wrapper {...bind()}>
      <Link
        href={{ pathname: "/mobile/mobile", query: { isEnglish: englishTrig } }}
      >
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
      </Link>
      <Wrapper2 style={{ ...props, width: `${width}px` }}>
        {thumbAnimation.map((prop, index) => {
          return (
            <Link href={`/mobile/works/${keyArray[index]}`} key={index}>
              <Img
                src={WorkData.get(keyArray[index]).overview.img}
                style={prop}
              />
            </Link>
          );
        })}
      </Wrapper2>
      <JPEN
        onClick={() => {
          setEnglishTrig(!englishTrig);
        }}
      >
        JP/EN
      </JPEN>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #282729;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 3;
`;
const Wrapper2 = animated(styled.div`
  position: absolute;
  height: 36px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  overflow: hidden;
  padding-bottom: 4px;
`);
const Img = animated(styled.img``);
const Logo = styled.img`
  margin-left: 20px;
  width: 40px;
  height: 40px;
`;
const JPEN = styled.div`
  position: absolute;
  width: 80px;
  height: 40px;
  background: #282729;
  right: 0px;
  font-size: 1.6rem;
  color: white;
  line-height: 40px;
  text-align: center;
`;
const LogoWrapper = styled.div`
  position: absolute;
  background: #282729;
  width: 60px;
  height: 40px;
  z-index: 10;
`;

export default TopToolBarAnimated;
