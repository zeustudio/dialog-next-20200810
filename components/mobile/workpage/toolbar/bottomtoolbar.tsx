//作品ページフッター

import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import commentSubmit2 from "../../../../images/commentsubmit2.svg";
import OtherComments from "./othercomments";

import WorkData from "../../../../constants/workdata";

interface Props {
  author: string;
  englishTrig: boolean;
}

const keyArray: string[] = Array.from(WorkData.keys()); //作者名のリスト

const BottomToolBar: React.FC<Props> = ({ author, englishTrig }) => {
  const [commentOnTrig, setCommentOnTrig] = React.useState(false); //コメント入力、コメント一覧欄表示トリガー
  const [expandTrig, setExpandTrig] = React.useState(false); //コメント一覧拡大トリガー
  const [previousAuthorImg, setPreviousAuthorImg] = React.useState(""); //これより前の作者のサムネ画像
  const [nextAuthorImg, setNextAuthorImg] = React.useState(""); //これより次の作者のサムネ画像
  const [thisComment, setThisComment] = React.useState(""); //コメント入力欄に入力された文字列
  const [submitTrig, setSubmitTrig] = React.useState(false); //送信トリガー、値の変化でトリガーされるので値そのものは意味ない

  const toolBarAnimation = useSpring({
    transform: commentOnTrig
      ? `translate3d(0px,40px,0px)`
      : `translate3d(0px,0px,0px)`,
  });
  const commentAnimation = useSpring({
    transform: commentOnTrig
      ? `translate3d(0px,0px,0px)`
      : `translate3d(0px,40px,0px)`,
  }); //フッターバーのアニメーション、片方が出るともう片方は引っ込む

  React.useEffect(() => {
    const i = keyArray.indexOf(author);
    if (i > 0) {
      setPreviousAuthorImg(WorkData.get(keyArray[i - 1]).overview.img);
    }
    if (i < keyArray.length - 1) {
      setNextAuthorImg(WorkData.get(keyArray[i + 1]).overview.img);
    }
    setThisComment("ここにコメント入力");
  }, []); //コンポーネント初期化、前と後の作者が存在するか確認し、画像パスを格納する。

  return (
    <>
      <Wrapper style={toolBarAnimation}>
        {previousAuthorImg === "" ? null : (
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
              <RoundImg src={previousAuthorImg} />
            </PreviousButton>
          </Link>
        )}

        <CommentSubmit
          src={commentSubmit2}
          onClick={() => {
            setCommentOnTrig(true);
          }}
        />
        {nextAuthorImg === "" ? null : (
          <Link
            href={{
              pathname: `/mobile/works/${
                keyArray[keyArray.indexOf(author) + 1]
              }`,
              query: { isEnglish: englishTrig },
            }}
          >
            <NextButton>
              <RoundImg src={nextAuthorImg} />
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
            if (submitTrig === false) {
              setSubmitTrig(true);
            }
          }}
        />
      </Wrapper2>
      <OtherComments
        author={author}
        commentOnTrigState={[commentOnTrig, setCommentOnTrig]}
        expandTrigState={[expandTrig, setExpandTrig]}
        thisCommentState={[thisComment, setThisComment]}
        submitTrigState={[submitTrig, setSubmitTrig]}
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
