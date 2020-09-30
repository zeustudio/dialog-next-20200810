import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import globalCSS from "../../../styles/global";
import { Global } from "@emotion/core";

import BottomToolBar from "./toolbar/bottomtoolbar_v2";
import OverviewComp from "./overview";
import ContentComp from "./content";

import workDataMap from "../../../constants/workdata";
import { Content, Author } from "../../../constants/Types";

interface Props {
  author: Author; //作者
}

const WorkPage: React.FC<Props> = ({ author }) => {
  const contents = workDataMap.get(author)?.contents as Content[]; //content.tsxに渡されるデータを取得
  const router = useRouter(); //　next/linkコンポーネントからqueryを受け取るためのrouter。ページ間英語・日本語設定を引き継ぐため
  const isEnglish: boolean = router.query.isEnglish === "true"; //queryの文字列をbooleanに変換
  const [englishTrig, setEnglishTrig] = React.useState(isEnglish); //英語表示トリガー
  const [scrollTrig, setScrollTrig] = React.useState(false);

  return (
    <Wrapper>
      <Global styles={globalCSS} />
      <ContentsWrapper
        style={scrollTrig ? { overflow: "scroll" } : { overflow: "hidden" }}
      >
        <OverviewComp
          author={author}
          isEnglish={englishTrig}
          scrollTrigState={[scrollTrig, setScrollTrig]}
        />
        {contents.map((content, index) => {
          return (
            <ContentComp
              key={index}
              content={content}
              isEnglish={englishTrig}
            />
          );
        })}
      </ContentsWrapper>
      <BottomToolBar
        author={author}
        englishTrigState={[englishTrig, setEnglishTrig]}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow-x: hidden;
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;
const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  scroll-snap-type: y mandatory;
`;
export default WorkPage;
