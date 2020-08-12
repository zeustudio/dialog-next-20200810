import React from "react";
import styled from "@emotion/styled";
const uuid = require("react-uuid");
interface content {
  img: string[];
  video: string[];
  TitleJP: string;
  TitleEN: string;
  MessageJP: string;
  MessageEN: string;
}
interface Props {
  content: content;
}

const Content: React.FC<Props> = ({ content }) => {
  const [globalID, setGlobalID] = React.useState("");

  React.useEffect(() => {
    setGlobalID(uuid());
  }, []);

  return (
    <Wrapper>
      <ImgWrapper2>
        <ImgWrapper id={globalID}>
          {content.img.map((img, index) => {
            return <Img key={uuid()} className={`${index}`} src={img} />;
          })}
        </ImgWrapper>
      </ImgWrapper2>
      <CaptionWrapper>
        <TitleJP>{content.TitleJP}</TitleJP>
        <TitleEN>-{content.TitleEN}-</TitleEN>
        <MessageJP>{content.MessageJP}</MessageJP>
      </CaptionWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  padding-top: 40px;
  @media screen and (min-height: 813px) {
    justify-content: space-evenly;
  }
`;
const Img = styled.img`
  width: 100%;
  scroll-snap-align: start;
`;
const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
`;
const ImgWrapper2 = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 66.66%;
  margin-bottom: 40px;
  @media screen and (min-width: 500px) {
    width: 500px;
  }
`;
const CaptionWrapper = styled.div`
  margin: 15px;
  font-size: 2rem;
  word-wrap: break-word;
  line-height: 2.5rem;
  margin-bottom: ${15 + 40}px;
  overflow: scroll;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
const TitleJP = styled.div``;
const TitleEN = styled.div`
  margin-bottom: 30px;
`;
const MessageJP = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`;
export default Content;
