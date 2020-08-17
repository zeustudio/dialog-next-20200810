import React from "react";
import styled from "@emotion/styled";
import WorkData from "../../constants/workdata";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import Thumb from "./toptoolbarThumb";
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
}
const TopToolBarAnimated: React.FC<Props> = ({ author }) => {
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
    <Wrapper>
      <Wrapper2 {...bind()} style={{ ...props, width: `${width}px` }}>
        {keyArray.map((key, index) => {
          return (
            <Thumb
              key={index}
              img={WorkData.get(key).overview.img}
              thisIndex={index}
              selectedIndex={thumbIndex}
            />
          );
        })}
      </Wrapper2>
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

export default TopToolBarAnimated;
