import React from "react";
import styled from "@emotion/styled";
import commentSubmit from "../../images/commentsubmit.svg";
import logo from "../../images/logo_white.png";

const BottomToolBar = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <CommentSubmit src={commentSubmit} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #282729;
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 39px;
  height: 39px;
  margin-left: 20px;
`;
const CommentSubmit = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;
export default BottomToolBar;
