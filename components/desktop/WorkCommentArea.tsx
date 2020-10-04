import React from "react";
import styled from "@emotion/styled";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { Author } from "../../constants/Types";

//firebaseの設定
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDx9tzYwvDgTJOXIvkLrbqh1YAJ8XNOrys",
  authDomain: "yamlab-3f326.firebaseapp.com",
  databaseURL: "https://yamlab-3f326.firebaseio.com",
  projectId: "yamlab-3f326",
  storageBucket: "yamlab-3f326.appspot.com",
  messagingSenderId: "382361918818",
  appId: "1:382361918818:web:1c3f7d472b65485f86a03b",
  measurementId: "G-HKGYWJK3CB",
};

type Props = {
  author: Author;
};

type CommentInfo = {
  key: string;
  content: string;
  good: number;
};

export const WorkCommentArea: React.FC<Props> = ({ author }) => {
  // コメント情報一覧
  const [commentInfoList, setCommentInfoList] = React.useState<CommentInfo[]>(
    []
  );
  // 入力中のコメント
  const [currentComment, setCurrentComment] = React.useState("");
  // 送信ボタンを押したか
  const [flagSubmit, setFlagSubmit] = React.useState(false);

  // comment部分へのref
  const commentDivRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    //wheelの伝播の防止
    const commentDiv = commentDivRef.current as HTMLDivElement;
    commentDiv.addEventListener("wheel", (e) => {
      e.stopPropagation();
    });

    //コンポーネント初期化、firebaseよりコメント一覧を取得する
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    } //firebase初期化
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
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
              setCommentInfoList(
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
      })
      .catch((error) => console.log(error)); //firebase 匿名認証
  });

  React.useEffect(() => {
    //送信ボタンが押されたらトリガーされる関数
    if (flagSubmit) {
      if (currentComment !== "" && currentComment !== "ここにコメント入力") {
        if (currentComment.length > 100) {
          alert("コメントは100文字以内にしてください。"); //コメントの文字数制限
        } else {
          firebase
            .database()
            .ref(author)
            .push({ content: currentComment, good: 0 }); //データベースにコメントをアップロード
          firebase
            .database()
            .ref(author)
            .once("value")
            .then((snap) => {
              let databaseRef: Object;
              databaseRef = snap.val();
              let comments = Object.entries(databaseRef);
              setCommentInfoList(
                comments.map((comment) => {
                  return {
                    key: comment[0],
                    content: comment[1].content,
                    good: comment[1].good,
                  };
                })
              );
            }); //コメント一覧を更新
          setCurrentComment(""); //入力欄を初期化
          setFlagSubmit(false); //トリガーの初期化
        }
      }
    }
  }, [flagSubmit]); //submitTrigが変化する度トリガーされる

  return (
    <>
      <CommentArea>
        <CommentDiv ref={commentDivRef}>
          {commentInfoList.map((commentInfo, index) => (
            <CommentP key={index}>
              {index}. {commentInfo.content}
            </CommentP>
          ))}
        </CommentDiv>
      </CommentArea>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <StyledInput
          type="text"
          placeholder="コメントをどうぞ"
          onChange={(e) => {
            setCurrentComment(e.currentTarget.value);
          }}
          value={currentComment}
        />
        <StyledButton
          onClick={() => {
            setFlagSubmit(true);
          }}
        >
          ▶︎
        </StyledButton>
      </StyledForm>
    </>
  );
};

const CommentArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 24px 24px 0;
  background-color: black;
  color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  /* スクロールバーの削除 */
  /* -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`;

const CommentDiv = styled.div`
  margin-bottom: 16px;
`;

const CommentP = styled.p`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  line-height: 1.5em;
  border-bottom: 1px solid white;
  word-break: normal;
`;

const StyledForm = styled.form`
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  padding: 36px 24px 16px;
  margin-top: -4px;
  background-color: black;
  height: 8rem;
`;

const StyledInput = styled.input`
  width: 90%;
  height: 2.5rem;
  color: white;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  height: 2.5rem;
  margin-left: 1rem;
  color: white;
`;
