import React from "react";
import styled from "@emotion/styled";
import Carousel from "./carousel";
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
  isEnglish: boolean;
}

const Content: React.FC<Props> = ({ content, isEnglish }) => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (window.innerWidth > 500) {
      setWidth(window.innerWidth * 0.8);
    } else {
      setWidth(window.innerWidth);
    }
  }, []);
  if (isEnglish === false) {
    if (content.TitleJP !== "") {
      return (
        <Wrapper>
          <ImgWrapper>
            <Carousel
              imgs={content.img}
              width={width}
              height={(width * 2) / 3}
            />
          </ImgWrapper>
          <CaptionWrapper>
            <TitleJP>{content.TitleJP}</TitleJP>
            <MessageJP>{content.MessageJP}</MessageJP>
          </CaptionWrapper>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <ImgWrapper>
            <Carousel
              imgs={content.img}
              width={width}
              height={(width * 2) / 3}
            />
          </ImgWrapper>
          <CaptionWrapper>
            <TitleEN>{content.TitleEN}</TitleEN>
            <MessageJP>{content.MessageJP}</MessageJP>
          </CaptionWrapper>
        </Wrapper>
      );
    }
  } else {
    if (content.TitleJP !== "") {
      return (
        <Wrapper>
          <ImgWrapper>
            <Carousel
              imgs={content.img}
              width={width}
              height={(width * 2) / 3}
            />
          </ImgWrapper>
          <CaptionWrapper>
            <TitleEN>{content.TitleEN}</TitleEN>
            <MessageJP>{content.MessageEN}</MessageJP>
          </CaptionWrapper>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <ImgWrapper>
            <Carousel
              imgs={content.img}
              width={width}
              height={(width * 2) / 3}
            />
          </ImgWrapper>
          <CaptionWrapper>
            <TitleEN>{content.TitleEN}</TitleEN>
            <MessageJP>{content.MessageEN}</MessageJP>
          </CaptionWrapper>
        </Wrapper>
      );
    }
  }
};
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  @media screen and (min-height: 700px) {
    justify-content: center;
  }
`;
const ImgWrapper = styled.div`
  margin-top: 40px;
  align-self: center;
`;

const CaptionWrapper = styled.div`
  font-size: 2rem;
  word-wrap: break-word;
  line-height: 2.5rem;
  margin-bottom: 40px;
  max-height: 50%;
  overflow: scroll;
  margin: 0px 30px 40px 30px;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
const TitleJP = styled.div`
  margin-top: 10px;
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 4rem;
  text-align: center;
`;
const TitleEN = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 4rem;
  text-align: center;
`;
const MessageJP = styled.div`
  font-size: 1.6rem;
  line-height: 3.2rem;
  font-weight: bold;
`;
export default Content;
