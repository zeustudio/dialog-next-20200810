//作品タイトルページ

import React from "react";
import styled from "@emotion/styled";

import WorkData from "../../../constants/workdata";

import mdf from "../../../images/mdftexture.jpg";

interface overview {
  //作品タイトルページデータ
  img: string; //サムネ画像
  TitleJP: string; //タイトル
  TitleEN: string;
  CaptionJP: string; //キャプション
  CaptionEN: string;
  CreditJP: string; //クレジット
  CreditEN: string;
}
interface Props {
  author: string; //作者
  isEnglish: boolean; //英語表示トリガー
}

const Overview: React.FC<Props> = ({ author, isEnglish }) => {
  const overview: overview = WorkData.get(author).overview; //作者より作品データ取得

  return (
    <Wrapper>
      <Thumb src={overview.img} />
      <CaptionWrapper>
        {isEnglish ? (
          <TitleEN>{overview.TitleEN}</TitleEN>
        ) : overview.TitleJP !== "" ? (
          <TitleJP>{overview.TitleJP}</TitleJP>
        ) : (
          <TitleEN>{overview.TitleEN}</TitleEN>
        )}
        {isEnglish ? (
          <Caption>{overview.CaptionEN}</Caption>
        ) : (
          <Caption>{overview.CaptionJP}</Caption>
        )}
        {isEnglish ? (
          <Credit>{overview.CreditEN}</Credit>
        ) : (
          <Credit>{overview.CreditJP}</Credit>
        )}
      </CaptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${mdf});
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  @media screen and (min-height: 700px) {
    justify-content: center;
  }
`;
const Thumb = styled.img`
  width: 80%;
  margin-top: 40px;
  @media screen and (min-width: 376px) {
    width: 60%;
    margin-bottom: 10%;
  }
`;

const CaptionWrapper = styled.div`
  margin: 0px 15px 0px 15px;
  word-wrap: break-word;
  margin-bottom: 40px;
  overflow: scroll;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
const TitleJP = styled.div`
  margin-top: 10px;
  font-size: 2rem;
  font-weight: bold;
  line-height: 4rem;
  text-align: center;
`;
const TitleEN = styled.div`
  font-size: 2rem;
  font-weight: bold;
  line-height: 4rem;
  text-align: center;
`;
const Caption = styled.div`
  font-size: 1.2rem;
  line-height: 2.4rem;
  font-weight: bold;
  text-indent: 1em;
`;
const Credit = styled.div`
  font-size: 1rem;
  line-height: 2rem;
  margin-top: 10px;
  white-space: pre-line;
`;
export default Overview;
