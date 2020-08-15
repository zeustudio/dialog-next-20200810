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
  const [thumbIndex, setThumbIndex] = React.useState(0);
  const [props, set] = useSpring(() => ({
    left: `0px`,
  }));

  const [deltaWidth, setDeltaWidth] = React.useState(0);
  const bind = useDrag(({ down, movement: [x] }) => {
    const curIndex = thumbIndex;
    let deltaIndex = Math.round(x / deltaWidth);
    let realx = x - deltaIndex * deltaWidth;
    console.log(realx);
    if (down) {
      set({
        left: `${curIndex * deltaWidth + x}px`,
      });
    } else {
      setThumbIndex(
        clamp(Math.round((curIndex * deltaWidth + x) / deltaWidth), 0, n - 1)
      );
      set({
        left: `${
          clamp(
            Math.round((curIndex * deltaWidth + x) / deltaWidth),
            0,
            n - 1
          ) * deltaWidth
        }px`,
      });
    }
  });
  React.useEffect(() => {
    setDeltaWidth(window.innerWidth / (2 * n - 1));
    setThumbIndex(keyArray.indexOf(author));
    set({
      left: `${(keyArray.indexOf(author) * window.innerWidth) / (2 * n - 1)}px`,
    });
  }, []);
  return (
    <Wrapper>
      <Wrapper2 {...bind()} style={{ ...props, width: `${deltaWidth * n}px` }}>
        {keyArray.map((key, index) => {
          return (
            <Thumb
              key={index}
              img={WorkData.get(key).overview.img}
              thisIndex={index}
              selectedIndexState={[thumbIndex, setThumbIndex]}
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
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`);
const ThisThumb = styled.img`
  height: 32px;
`;
const Blank = styled.div`
  width: 16px;
  height: 15px;
`;

export default TopToolBarAnimated;
