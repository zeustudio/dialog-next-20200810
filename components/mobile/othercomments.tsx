import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
const uuid = require("react-uuid");
const v = 0.5;
interface Props {
  commentOnTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  expandTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
const comments = [
  "すごい",
  "なんじゃこれ",
  "いいね",
  "気になります",
  "眠い",
  "wwwwwwwww",
  "は？",
  "ほしい",
  "実物見たい",
  "ははは",
];
const OtherComments: React.FC<Props> = ({
  commentOnTrigState: [commentOnTrig, setCommentOnTrig],
  expandTrigState: [expandTrig, setExpandTrig],
}) => {
  const commentsBoxAnimation = useSpring({
    transform: commentOnTrig
      ? expandTrig
        ? `translate3d(0px,0px,0px)`
        : `translate3d(0px,50%,0px)`
      : `translate3d(0px,100%,0px)`,
  });
  const bind = useDrag(({ vxvy: [, vy], last }) => {
    if (commentOnTrig === true) {
      if (last && vy < -v) {
        setExpandTrig(true);
      } else if (last && vy > v) {
        if (expandTrig === true) {
          setExpandTrig(false);
        } else {
          setCommentOnTrig(false);
        }
      }
    }
  });
  return (
    <Wrapper {...bind()} style={commentsBoxAnimation}>
      <ExpandButton
        onClick={() => {
          setExpandTrig(!expandTrig);
        }}
      >
        <FontAwesomeIcon icon={faAngleDoubleUp} />
      </ExpandButton>
      <CommentsBoxWrapper>
        {comments.map((comment) => {
          return (
            <CommentWrapper key={uuid()}>
              <Comment>{comment}</Comment>
            </CommentWrapper>
          );
        })}
      </CommentsBoxWrapper>
    </Wrapper>
  );
};

const Wrapper = animated(styled.div`
  background: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: grid;
  grid-template-rows: 40px 40px 1fr 40px;
  align-items: center;
  justify-content: center;
  z-index: 0;
`);
const ExpandButton = styled.div`
  background-color: rgba(28, 27, 29, 0.9);
  width: 100vw;
  height: 100%;
  grid-row: 2/3;
  color: white;
  font-size: 3rem;
  text-align: center;
  line-height: 39px;
`;
const CommentsBoxWrapper = styled.div`
  background-color: rgba(28, 27, 29, 0.9);
  width: 100%;
  height: 100%;
  grid-row: 3/4;
  color: white;
  font-size: 2rem;
  line-height: 40px;
  overflow: scroll;
`;
const CommentWrapper = styled.div`
  height: 40px;
  margin: 0 5% 0 5%;
`;
const Comment = styled.div`
  width: 100%;
  height: 35px;
  border-bottom: 1px solid white;
`;

export default OtherComments;
