import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import commentSubmit2 from "../../images/commentsubmit2.svg";
import OtherComments from "./othercomments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import WorkData from "../../constants/workdata";
interface Props {
  author: string;
  englishTrig: boolean;
}
const keyArray: string[] = Array.from(WorkData.keys());
const BottomToolBar: React.FC<Props> = ({ author, englishTrig }) => {
  const [commentOnTrig, setCommentOnTrig] = React.useState(false);
  const [expandTrig, setExpandTrig] = React.useState(false);
  const [previousAuthor, setPreviousAuthor] = React.useState("");
  const [nextAuthor, setNextAuthor] = React.useState("");
  const [thisComment, setThisComment] = React.useState("");
  const [submitTrig, setSubmitTrig] = React.useState(false);
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
    setThisComment("ここにコメント入力");
  }, []);

  return (
    <>
      <Wrapper style={toolBarAnimation}>
        {previousAuthor === "" ? null : (
          <Link
            href={{
              pathname: `/mobile/works/${
                keyArray[keyArray.indexOf(author) - 1]
              }`,
              query: { isEnglish: englishTrig },
            }}
          >
            <PreviousButton>
              <Arrow>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Arrow>
              <RoundImg src={previousAuthor} />
            </PreviousButton>
          </Link>
        )}

        <CommentSubmit
          src={commentSubmit2}
          onClick={() => {
            setCommentOnTrig(true);
          }}
        />
        {nextAuthor === "" ? null : (
          <Link
            href={{
              pathname: `/mobile/works/${
                keyArray[keyArray.indexOf(author) + 1]
              }`,
              query: { isEnglish: englishTrig },
            }}
          >
            <NextButton>
              <RoundImg src={nextAuthor} />
              <Arrow>
                <FontAwesomeIcon icon={faChevronRight} />
              </Arrow>
            </NextButton>
          </Link>
        )}
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
          <CommentForm
            type="text"
            value={thisComment}
            onChange={(e) => {
              setThisComment(e.target.value);
            }}
            onFocus={() => {
              setThisComment("");
            }}
          />
        </CommentFormWrapper>
        <CommentSubmit
          src={commentSubmit2}
          onClick={() => {
            setSubmitTrig(!submitTrig);
          }}
        />
      </Wrapper2>
      <OtherComments
        author={author}
        commentOnTrigState={[commentOnTrig, setCommentOnTrig]}
        expandTrigState={[expandTrig, setExpandTrig]}
        thisCommentState={[thisComment, setThisComment]}
        submitTrig={submitTrig}
      />
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
  padding-left: 10px;
  padding-right: 10px;
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
const PreviousButton = styled.div`
  grid-column: 1/2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NextButton = styled.div`
  grid-column: 3/4;
  display: flex;
  align-items: center;
  justify-content: center;
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
