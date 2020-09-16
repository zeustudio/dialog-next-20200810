//イントロビデオ
import React from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";
const videourl = require("../../../images/TitleVideo.mp4");
interface Props {
  width: number; //画面幅
  height: number; //画面高さ
}

const HowToVideo: React.FC<Props> = ({ width, height }) => {
  return (
    <Wrapper style={{ width: width, height: height }}>
      <ReactPlayer
        url={videourl}
        width={width}
        height={height}
        controls={true}
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
export default HowToVideo;

/*<Video
        src={`https://www.youtube-nocookie.com/embed/zlujVqieRk4`}
        allow={"autoplay"}
      /> */
