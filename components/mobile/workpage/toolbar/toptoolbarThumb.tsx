//このコンポーネントは現在使われていません。もともとはtoptollbarのサムネの拡大縮小アニメーションのため作られました。
import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import WorkData from "../../../../constants/workdata";
const keyArray: string[] = Array.from(WorkData.keys());
const n: number = keyArray.length;
interface Props {
  img: string;
  thisIndex: number;
  selectedIndex: number;
}
const Thumb: React.FC<Props> = ({ img, thisIndex, selectedIndex }) => {
  const [selectTrig, setSelectTrig] = React.useState(
    thisIndex === selectedIndex
  );
  const scale = useSpring({
    width: selectTrig ? "32px" : "16px",
    height: selectTrig ? "32px" : "16px",
  });
  React.useEffect(() => {
    if (n - 1 - thisIndex === selectedIndex) {
      setSelectTrig(true);
    } else {
      setSelectTrig(false);
    }
  }, [selectedIndex]);
  if (n - 1 - thisIndex === selectedIndex) {
    return (
      <Link href={`/mobile/works/${keyArray[thisIndex]}`}>
        <Img src={img} style={scale} />
      </Link>
    );
  } else {
    return <Img src={img} style={scale} />;
  }
};

const Img = animated(
  styled.img`
    width: 16px;
    height: 16px;
  `
);

export default Thumb;
