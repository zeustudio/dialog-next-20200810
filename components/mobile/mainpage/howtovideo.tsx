//イントロビデオ
import React from "react";
import styled from "@emotion/styled";
interface Props {
  width: number; //画面幅
  height: number; //画面高さ
}

const HowToVideo: React.FC<Props> = ({ width, height }) => {
  return (
    <Wrapper style={{ width: width, height: height }}>
      <Video
        src={`https://www.youtube-nocookie.com/embed/zlujVqieRk4`}
        allow={"autoplay"}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  scroll-snap-align: end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eac69a;
`;
const Video = styled.iframe`
  width: 100%;
  height: 100%;
`;
export default HowToVideo;
