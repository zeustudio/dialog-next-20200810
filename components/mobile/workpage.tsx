import React from "react";
import styled from "@emotion/styled";

import globalCSS from "../../styles/global";
import { Global } from "@emotion/core";

import TopToolBar from "./toptoolbar";
import BottomToolBar from "./bottomtoolbar";

import Overview from "./overview";

interface Props {
  author: string;
}

const WorkPage: React.FC<Props> = ({ author }) => {
  return (
    <Wrapper>
      <Global styles={globalCSS} />
      <TopToolBar author={author} />
      <Contents>
        <Overview author={author} />
      </Contents>
      <BottomToolBar />
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
  display: grid;
  grid-template-rows: 53px 1fr 53px;
`;
const Contents = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 2/3;
  overflow: scroll;
  background-color: #eac69a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default WorkPage;
