import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import commentSubmit2 from "../../images/commentsubmit2.svg";
import logo from "../../images/logo_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
interface Props {
  englishTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
const BottomToolBar: React.FC<Props> = ({
  englishTrigState: [englishTrig, setEnglishTrig],
}) => {
  const [commentOnTrig, setCommentOnTrig] = React.useState(false);
  const toolBarAnimation = useSpring({
    transform: commentOnTrig
      ? `translate3d(0px,40px,0px)`
      : `translate3d(0px,0px,0px)`,
  });
  const commentAnimation = useSpring({
    transform: commentOnTrig
      ? `translate3d(0px,0px,0px)`
      : `translate3d(0px,40px,0px)`,
  });
  return (
    <>
      <Wrapper style={toolBarAnimation}>
        <Link href="/mobile/mobile">
          <Logo src={logo} />
        </Link>
        <CommentSubmit
          src={commentSubmit2}
          onClick={() => {
            setCommentOnTrig(true);
          }}
        />
        <JPEN
          onClick={() => {
            setEnglishTrig(!englishTrig);
          }}
        >
          JP/EN
        </JPEN>
      </Wrapper>
      <Wrapper2 style={commentAnimation}>
        <Back
          onClick={() => {
            setCommentOnTrig(false);
          }}
        >
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </Back>
        <CommentFormWrapper>
          <CommentForm />
        </CommentFormWrapper>
        <CommentSubmit src={commentSubmit2} />
      </Wrapper2>
    </>
  );
};

const Wrapper = animated(styled.div`
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
`);
const Wrapper2 = animated(styled.div`
  background-color: #282729;
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`);
const Logo = styled.img`
  width: 39px;
  height: 39px;
  grid-column: 1/2;
  justify-self: center;
`;
const Back = styled.div`
  width: 39px;
  height: 39px;
  color: white;
  font-size: 3rem;
  font-weight: 100;
  text-align: center;
  line-height: 39px;
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
