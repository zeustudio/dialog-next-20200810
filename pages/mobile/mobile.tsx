import React from "react";
import styled from "@emotion/styled";
import WorkPage from "../../components/mobile/workpage";
const Mobile = () => {
  return (
    <Wrapper>
      <WorkPage author={"fumin"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export default Mobile;
