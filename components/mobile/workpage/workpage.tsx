import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import globalCSS from "../../../styles/global";
import { Global } from "@emotion/core";

import TopToolBarAnimated from "./toolbar/toptoolbar-animated";
import BottomToolBar from "./toolbar/bottomtoolbar";
import Overview from "./overview";
import Content from "./content";

import WorkData from "../../../constants/workdata";

interface Props {
  author: string; //作者
}
interface content {
  //content.tsxに渡されるデータ形式
  img: string[];
  video: string[];
  TitleJP: string;
  TitleEN: string;
  MessageJP: string;
  MessageEN: string;
}

const WorkPage: React.FC<Props> = ({ author }) => {
  const contents: content[] = WorkData.get(author).contents; //content.tsxに渡されるデータを取得
  const router = useRouter(); //　next/linkコンポーネントからqueryを受け取るためのrouter。ページ間英語・日本語設定を引き継ぐため
  const isEnglish: boolean = router.query.isEnglish === "true"; //queryの文字列をbooleanに変換
  const [englishTrig, setEnglishTrig] = React.useState(isEnglish); //英語表示トリガー

  return (
    <Wrapper>
      <Global styles={globalCSS} />
      <TopToolBarAnimated
        author={author}
        englishTrigState={[englishTrig, setEnglishTrig]}
      />
      <ContentsWrapper>
        <Overview author={author} isEnglish={englishTrig} />
        {contents.map((content, index) => {
          return (
            <Content key={index} content={content} isEnglish={englishTrig} />
          );
        })}
      </ContentsWrapper>
      <BottomToolBar author={author} englishTrig={englishTrig} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #eac69a;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: #eac69a;
  scroll-snap-type: y mandatory;
`;
export default WorkPage;
