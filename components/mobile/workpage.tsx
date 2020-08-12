import React from "react";
import styled from "@emotion/styled";

import globalCSS from "../../styles/global";
import { Global } from "@emotion/core";

import TopToolBar from "./toptoolbar";
import BottomToolBar from "./bottomtoolbar";

import Overview from "./overview";
import WorkData from "../../constants/workdata";
import Content from "./content";
const uuid = require("react-uuid");

interface Props {
  author: string;
}
interface content {
  img: string[];
  video: string[];
  TitleJP: string;
  TitleEN: string;
  MessageJP: string;
  MessageEN: string;
}
const WorkPage: React.FC<Props> = ({ author }) => {
  const contents: content[] = WorkData.get(author).contents;
  return (
    <Wrapper>
      <Global styles={globalCSS} />
      <TopToolBar author={author} />
      <ContentsWrapper>
        <Overview author={author} />
        {contents.map((content) => {
          return <Content key={uuid()} content={content} />;
        })}
      </ContentsWrapper>
      <BottomToolBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
