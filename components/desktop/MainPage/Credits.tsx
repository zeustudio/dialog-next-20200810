import React from "react";
import styled from "@emotion/styled";
import LineUp from "../../../images/lineUp.svg";
import LineDown from "../../../images/lineDown.svg";

const Credits = () => {
  return (
    <CreditWrapper>
      <SectionTitle>STAFF</SectionTitle>
      <Credit>
        ディレクション
        <br />
        山中俊治
      </Credit>
      <Credit>
        企画
        <br />
        杉本拓郎　イ ヒジュン　山本 凌　大西彬介 今村知美　李 馨
      </Credit>
      <Credit>
        制作
        <br />
        イ ヒジュン　上岡直樹　小笠原佑樹　金山正貴
        <br />
        川又 音　杉本拓郎　髙田ふみ　三好葉月 宗像佑弥　山本 凌
      </Credit>
      <Credit>
        スタッフ： 東京大学 山中研究室一同
        <br />
        主催： 東京大学 山中研究室
        <br />
        グラフィック： 李 馨　髙田ふみ　杉本拓郎
        <br />
        WEB : イ ヒジュン　山本 凌<br />
        翻訳：イ ヒジュン
      </Credit>
    </CreditWrapper>
  );
};

//Styles----------------------------------------------------------------------

const CreditWrapper = styled.div`
  background-color: #262626;
  color: white;
  padding: 160px 0;
`;

const SectionTitle = styled.h2`
  margin-bottom: 64px;
  font-size: 2rem;
  text-align: center;
  &::before {
    content: url(${LineUp});
    display: block;
    margin-bottom: -4px;
    filter: invert();
  }
  &::after {
    content: url(${LineDown});
    display: block;
    filter: invert();
  }
`;

const Credit = styled.p`
  text-align: center;
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default Credits;
