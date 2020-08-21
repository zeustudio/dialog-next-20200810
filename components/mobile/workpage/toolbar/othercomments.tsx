//bottomtoolbarの子コンポーネント、コメント一覧ボックス
import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

//firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyDx9tzYwvDgTJOXIvkLrbqh1YAJ8XNOrys",
  authDomain: "yamlab-3f326.firebaseapp.com",
  databaseURL: "https://yamlab-3f326.firebaseio.com",
  projectId: "yamlab-3f326",
  storageBucket: "yamlab-3f326.appspot.com",
  messagingSenderId: "382361918818",
  appId: "1:382361918818:web:1c3f7d472b65485f86a03b",
  measurementId: "G-HKGYWJK3CB",
};

const v = 0.7; //上下スワイプでコメント一覧が拡張する。その時のスワイプ敏感度合

interface Props {
  //親であるbottomtoolbar.tsx参照
  commentOnTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]; //コメント入力、コメント一覧欄表示トリガー
  expandTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]; //コメント一覧拡大トリガー
  thisCommentState: [string, React.Dispatch<React.SetStateAction<string>>]; //コメント入力欄に入力された文字列
  submitTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]; //送信トリガー
  author: string; //作者名の文字列
}
const OtherComments: React.FC<Props> = ({
  commentOnTrigState: [commentOnTrig, setCommentOnTrig],
  expandTrigState: [expandTrig, setExpandTrig],
  thisCommentState: [thisComment, setThisComment],
  submitTrigState: [submitTrig, setSubmitTrig],
  author,
}) => {
  const commentBoxId = `commentBox${author}`; //コメント一覧のid,document.getElementByIdメソッドを使うため設定

  const commentsBoxAnimation = useSpring({
    transform: commentOnTrig
      ? expandTrig
        ? `translate3d(0px,0px,0px)`
        : `translate3d(0px,0px,0px)`
      : `translate3d(0px,100%,0px)`,
    height: expandTrig ? `100%` : `50%`,
  }); //コメント一覧のアニメーション

  const [comments, setComments] = React.useState([
    { key: "", content: "", good: 0 },
  ]); //コメント一覧のデータリスト
  const bind = useDrag(({ vxvy: [, vy], last }) => {
    //スワイプアクションの設定
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

  React.useEffect(() => {
    //コンポーネント初期化、firebaseよりコメント一覧を取得する
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } //firebase初期化
    firebase
      .auth()
      .signInAnonymously()
      .catch((error) => console.log(error)); //firebase 匿名認証

    firebase
      .database()
      .ref(author)
      .once("value")
      .then((snap) => {
        let databaseRef: Object;
        databaseRef = snap.val(); //該当する作者の持つデーターベースのスナップショットを取得。この時はまだデータはJSON形式
        if (databaseRef !== null) {
          let comments: [
            string,
            { content: string; good: number }
          ][] = Object.entries(databaseRef); //JSONオブジェクトをリストに変換
          setComments(
            //comments state変数にデータを格納
            comments.map((comment) => {
              return {
                key: comment[0],
                content: comment[1].content,
                good: comment[1].good,
              };
            })
          );
        }
      });
  }, []);

  React.useEffect(() => {
    //送信ボタンが押されたらトリガーされる関数
    if (submitTrig) {
      if (thisComment !== "" && thisComment !== "ここにコメント入力") {
        if (thisComment.length > 100) {
          alert("コメントは100文字以内にしてください。"); //コメントの文字数制限
        } else {
          firebase
            .database()
            .ref(author)
            .push({ content: thisComment, good: 0 }); //データベースにコメントをアップロード
          firebase
            .database()
            .ref(author)
            .once("value")
            .then((snap) => {
              let databaseRef: Object;
              databaseRef = snap.val();
              let comments = Object.entries(databaseRef);
              setComments(
                comments.map((comment) => {
                  return {
                    key: comment[0],
                    content: comment[1].content,
                    good: comment[1].good,
                  };
                })
              );
            }); //コメント一覧を更新
          setThisComment(""); //入力欄を初期化
          setSubmitTrig(false); //トリガーの初期化
        }
      }
    }
  }, [submitTrig]); //submitTrigが変化する度トリガーされる

  return (
    <Wrapper {...bind()} style={commentsBoxAnimation}>
      <ExpandButton
        onClick={() => {
          setExpandTrig(!expandTrig);
        }}
      >
        <FontAwesomeIcon icon={faAngleDoubleUp} />
      </ExpandButton>
      <CommentsBoxWrapper id={commentBoxId}>
        {comments.map((comment) => {
          return (
            <CommentWrapper key={comment.key}>
              <Comment>{comment.content}</Comment>
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
  height: 50%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  z-index: 0;
`);
const ExpandButton = styled.div`
  background-color: rgba(28, 27, 29, 0.9);
  width: 100%;
  height: 40px;
  margin-top: 40px;
  color: white;
  font-size: 3rem;
  text-align: center;
  line-height: 39px;
`;
const CommentsBoxWrapper = styled.div`
  background-color: rgba(28, 27, 29, 0.9);
  width: 100%;
  flex: 1;
  margin-bottom: 40px;
  color: white;
  font-size: 2rem;
  line-height: 40px;
  overflow: scroll;
`;
const CommentWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding: 0px 10px 0px 10px;
  margin: 5px 5% 5px 5%;
  overflow-wrap: break-word;
`;
const Comment = styled.span`
  height: 30px;
`;

export default OtherComments;
