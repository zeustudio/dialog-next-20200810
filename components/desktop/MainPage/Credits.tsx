import React from "react";
import styled from "@emotion/styled";

const Credits = () => {
  return (
    <CreditCSS>
      <CreditWrapper>
        <CreditLeftCSS>
          {" "}
          ディレクション： 山中俊治 <br></br>企画： 杉本拓郎　イ ヒジュン　山本
          凌　大西彬介<br></br> 　 　　今村知美　李 馨 <br></br>
          制作： イ ヒジュン　上岡直樹　小笠原佑樹　金山正貴<br></br> 　
          　　川又 音　杉本拓郎　髙田ふみ　三好葉月<br></br> 　
          　　宗像佑弥　山本 凌
        </CreditLeftCSS>
        <CreditRightCSS>
          <br></br>
          スタッフ： 東京大学 山中研究室一同<br></br>
          主催： 東京大学 山中研究室<br></br>
          グラフィック： 李 馨　髙田ふみ　杉本拓郎<br></br>
          WEB : イ ヒジュン　山本 凌<br></br>
          翻訳：イ ヒジュン
        </CreditRightCSS>
      </CreditWrapper>
    </CreditCSS>
  );
};

//Styles----------------------------------------------------------------------
const CreditCSS = styled.div`
  background-color: black;
  color: white;
  padding: 160px 24px;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;
const CreditWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
const CreditLeftCSS = styled.p`
  align-self: center;
  font-size: 1.6rem;
  line-height: 3rem;
  @media (max-width: 1000px) {
    font-size: 2.5vmin;
    line-height: 5vmin;
  }
`;
const CreditRightCSS = styled.p`
  align-self: center;
  font-size: 1.6rem;
  line-height: 3rem;

  @media (max-width: 1000px) {
    font-size: 2.5vmin;
    line-height: 5vmin;
    align-self: first baseline;
    margin-top: -5vmin;
  }
`;
export default Credits;
