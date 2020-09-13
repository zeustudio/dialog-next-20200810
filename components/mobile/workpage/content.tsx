//作品ページのコンテンツ
import React from "react";
import styled from "@emotion/styled";
//import Carousel from "../carousel";
//import dynamic from "next/dynamic";
/*const ReactSlickCarousel = dynamic(() => import("../reactslickcarousel"), {
  ssr: false,
});*/
import ReactSlickCarousel from "../reactslickcarousel";

import mdf from "../../../images/mdftexture.jpg";

import { Content } from "../../../constants/Types";

interface Props {
  content: Content; //真上のinterface content参考
  isEnglish: boolean; //英語表示のトリガー
}

const ContentComp: React.FC<Props> = ({ content, isEnglish }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <ReactSlickCarousel imgs={content.img} />
      </ImgWrapper>
      <CaptionWrapper>
        {isEnglish ? (
          <TitleEN>{content.TitleEN}</TitleEN>
        ) : content.TitleJP !== "" ? (
          <TitleJP>{content.TitleJP}</TitleJP>
        ) : (
          <TitleEN>{content.TitleEN}</TitleEN>
        )}
        {isEnglish ? (
          <MessageJP>{content.MessageEN}</MessageJP>
        ) : (
          <MessageJP>{content.MessageJP}</MessageJP>
        )}
      </CaptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${mdf});
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
  width: 100%;
  margin-top: 40px;
  margin-bottom: 30px;
  align-self: center;
  @media screen and (min-width: 500px) {
    width: 80%;
  }
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
  text-indent: 1em;
`;
export default ContentComp;
