import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
interface Props {
  img: string;
  thisIndex: number;
  selectedIndexState: [number, React.Dispatch<React.SetStateAction<number>>];
}
const Thumb: React.FC<Props> = ({
  img,
  thisIndex,
  selectedIndexState: [selectedIndex],
}) => {
  const [selectTrig, setSelectTrig] = React.useState(false);
  const scale = useSpring({
    width: selectTrig ? "32px" : "16px",
    height: selectTrig ? "32px" : "16px",
  });
  React.useEffect(() => {
    if (8 - thisIndex === selectedIndex) {
      setSelectTrig(true);
    } else {
      setSelectTrig(false);
    }
  }, [selectedIndex]);
  return <Img src={img} style={scale} />;
};

const Img = animated(
  styled.img`
    width: 16px;
    height: 16px;
  `
);

export default Thumb;
