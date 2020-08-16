import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import commentSubmit2 from "../../images/commentsubmit2.svg";
import logo from "../../images/logo_white.png";

const BottomToolBar = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <CommentSubmit src={commentSubmit2} />
      <JPEN>JP/EN</JPEN>
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 39px;
  height: 39px;
  grid-column: 1/2;
  justify-self: center;
`;
const CommentSubmit = styled.img`
  width: 40px;
  height: 40px;
  grid-column: 2/3;
  justify-self: center;
`;
const CommentForm = styled.input`
  height: 30px;
  width: 100%;
  border-radius: 15px;
  border: none;
  padding: 0;
  background-color: #484749;
  font-size: 2rem;
  font-weight: medium;
  padding-left: 5%;
  padding-right: 5%;
  color: white;
  :focus {
    outline: none;
  }
`;
const CommentFormWrapper = styled.div`
  height: 40px;
  width: 70%;
  background-color: #282729;
  display: flex;
  align-items: center;
`;
const JPEN = styled.div`
  font-size: 1.6rem;
  color: white;
  line-height: 40px;
  text-align: center;
  width: 60px;
  height: 40px;
  border-radius: 1.5rem;
  grid-column: 3/4;
  justify-self: center;
`;
export default BottomToolBar;
