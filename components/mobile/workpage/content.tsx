//作品ページのコンテンツ
import React from "react";
import styled from "@emotion/styled";
import Carousel from "../carousel";

import mdf from "../../../images/mdftexture.jpg";

interface content {
  img: string[]; //画像リスト
  video: string[]; //ビデオリスト(youtube埋め込みリンク)
  TitleJP: string; //キャプションタイトル
  TitleEN: string; //キャプションタイトル
  MessageJP: string; //キャプション本文
  MessageEN: string; //キャプション本文
}
interface Props {
  content: content; //真上のinterface content参考
  isEnglish: boolean; //英語表示のトリガー
}

const Content: React.FC<Props> = ({ content, isEnglish }) => {
  const [width, setWidth] = React.useState(0); //カルーセルのピクセル幅、cssを用いない幅データが欲しかったのでこっちで値を渡す。

  React.useEffect(() => {
    if (window.innerWidth > 500) {
      setWidth(window.innerWidth * 0.8);
    } else {
      setWidth(window.innerWidth);
    }
  }, []); //widthの設定

  return (
    <Wrapper>
      <ImgWrapper>
        <Carousel
          imgs={content.img}
          width={width}
          height={(width * 2) / 3}
          isTouchable={true}
          dotsOn={true}
        />
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
  text-indent: 1em;
`;
export default Content;
