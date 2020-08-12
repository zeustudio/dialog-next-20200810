import React from "react";
import styled from "@emotion/styled";
import WorkData from "../../constants/workdata";
const uuid = require("react-uuid");
const keyArray: string[] = Array.from(WorkData.keys());
const n: number = keyArray.length;

interface Props {
  author: string;
}

const TopToolBar: React.FC<Props> = ({ author }) => {
  const [thumbArray, setThumbArray] = React.useState([""]);
  const index: number = keyArray.indexOf(author);
  React.useEffect(() => {
    const thumbArrayBuffer = [];
    for (var i = 0; i < 2 * n - 1; i++) {
      let newIndex = i - n + index + 1;
      if (newIndex < 0 || newIndex > n - 1) {
        thumbArrayBuffer.push("");
      } else {
        thumbArrayBuffer.push(WorkData.get(keyArray[newIndex]).overview.img);
      }
    }
    setThumbArray(thumbArrayBuffer);
  }, []);
  return (
    <Wrapper>
      {thumbArray.map((thumb) => {
        if (thumb === "") {
          return <Blank key={uuid()} />;
        } else {
          if (thumbArray.indexOf(thumb) === n - 1) {
            return <ThisThumb key={uuid()} src={thumb} />;
          } else {
            return <Thumb key={uuid()} src={thumb} />;
          }
        }
      })}
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-row: 1/2;
  z-index: 3;
`;

const Thumb = styled.img`
  height: 16px;
`;
const ThisThumb = styled.img`
  height: 32px;
`;
const Blank = styled.div`
  width: 16px;
  height: 15px;
`;

export default TopToolBar;
