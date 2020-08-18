import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import commentSubmit2 from "../../images/commentsubmit2.svg";
import OtherComments from "./othercomments";
import logo from "../../images/logo_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import WorkData from "../../constants/workdata";
interface Props {
  englishTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  author: string;
}
const keyArray: string[] = Array.from(WorkData.keys());
const BottomToolBar: React.FC<Props> = ({
  englishTrigState: [englishTrig, setEnglishTrig],
  author,
}) => {
  const [commentOnTrig, setCommentOnTrig] = React.useState(false);
  const [expandTrig, setExpandTrig] = React.useState(false);
  const [previousAuthor, setPreviousAuthor] = React.useState("");
  const [nextAuthor, setNextAuthor] = React.useState("");
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

  React.useEffect(() => {
    const i = keyArray.indexOf(author);
    if (i > 0) {
      setPreviousAuthor(WorkData.get(keyArray[i - 1]).overview.img);
    }
    if (i < keyArray.length - 1) {
      setNextAuthor(WorkData.get(keyArray[i + 1]).overview.img);
    }
    console.log(previousAuthor);
  }, []);
  if (previousAuthor === "") {
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
          <Link
            href={`/mobile/works/${keyArray[keyArray.indexOf(author) + 1]}`}
          >
            <NextButton>
              <RoundImg src={nextAuthor} />
              <Arrow>
                <FontAwesomeIcon icon={faChevronRight} />
              </Arrow>
            </NextButton>
          </Link>
        </Wrapper>
        <Wrapper2 style={commentAnimation}>
          <Back
            onClick={() => {
              setCommentOnTrig(false);
              setExpandTrig(false);
            }}
          >
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </Back>
          <CommentFormWrapper>
            <CommentForm />
          </CommentFormWrapper>
          <CommentSubmit src={commentSubmit2} />
        </Wrapper2>
        <OtherComments
          commentOnTrigState={[commentOnTrig, setCommentOnTrig]}
          expandTrigState={[expandTrig, setExpandTrig]}
        />
      </>
    );
  } else if (nextAuthor === "") {
    return (
      <>
        <Wrapper style={toolBarAnimation}>
          <Link
            href={`/mobile/works/${keyArray[keyArray.indexOf(author) - 1]}`}
          >
            <PreviousButton>
              <Arrow>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Arrow>
              <RoundImg src={previousAuthor} />
            </PreviousButton>
          </Link>

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
              setExpandTrig(false);
            }}
          >
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </Back>
          <CommentFormWrapper>
            <CommentForm />
          </CommentFormWrapper>
          <CommentSubmit src={commentSubmit2} />
        </Wrapper2>
        <OtherComments
          commentOnTrigState={[commentOnTrig, setCommentOnTrig]}
          expandTrigState={[expandTrig, setExpandTrig]}
        />
      </>
    );
  } else {
    return (
      <>
        <Wrapper style={toolBarAnimation}>
          <Link
            href={`/mobile/works/${keyArray[keyArray.indexOf(author) - 1]}`}
          >
            <PreviousButton>
              <Arrow>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Arrow>
              <RoundImg src={previousAuthor} />
            </PreviousButton>
          </Link>

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
          <Link
            href={`/mobile/works/${keyArray[keyArray.indexOf(author) + 1]}`}
          >
            <NextButton>
              <RoundImg src={nextAuthor} />
              <Arrow>
                <FontAwesomeIcon icon={faChevronRight} />
              </Arrow>
            </NextButton>
          </Link>
        </Wrapper>
        <Wrapper2 style={commentAnimation}>
          <Back
            onClick={() => {
              setCommentOnTrig(false);
              setExpandTrig(false);
            }}
          >
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </Back>
          <CommentFormWrapper>
            <CommentForm />
          </CommentFormWrapper>
          <CommentSubmit src={commentSubmit2} />
        </Wrapper2>
        <OtherComments
          commentOnTrigState={[commentOnTrig, setCommentOnTrig]}
          expandTrigState={[expandTrig, setExpandTrig]}
        />
      </>
    );
  }
};

const Wrapper = animated(styled.div`
  background-color: #282729;
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-evenly;
  z-index: 3;
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
  z-index: 3;
`);
const Logo = styled.img`
  width: 39px;
  height: 39px;
  grid-column: 2/3;
  justify-self: center;
`;
const Back = styled.div`
  width: 39px;
  height: 39px;
  color: white;
  font-size: 3rem;
  text-align: center;
  line-height: 39px;
`;
const CommentSubmit = styled.img`
  width: 40px;
  height: 40px;
  grid-column: 3/4;
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
const JPEN = styled.span`
  font-size: 1.6rem;
  color: white;
  line-height: 40px;
  text-align: center;
  border-radius: 1.5rem;
  grid-column: 4/5;
  justify-self: center;
`;
const PreviousButton = styled.div`
  grid-column: 1/2;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const NextButton = styled.div`
  grid-column: 5/6;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Arrow = styled.div`
  font-size: 1.6rem;
  color: white;
  line-height: 40px;
  text-align: center;
`;
const RoundImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 0 10px 0 10px;
`;
export default BottomToolBar;
