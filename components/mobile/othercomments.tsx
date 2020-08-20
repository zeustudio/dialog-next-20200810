import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";

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

const v = 0.7;
interface Props {
  commentOnTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  expandTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  thisCommentState: [string, React.Dispatch<React.SetStateAction<string>>];
  submitTrig: boolean;
  author: string;
}
const OtherComments: React.FC<Props> = ({
  commentOnTrigState: [commentOnTrig, setCommentOnTrig],
  expandTrigState: [expandTrig, setExpandTrig],
  thisCommentState: [thisComment, setThisComment],
  submitTrig,
  author,
}) => {
  const commentBoxId = `commentBox${author}`;
  const commentsBoxAnimation = useSpring({
    transform: commentOnTrig
      ? expandTrig
        ? `translate3d(0px,0px,0px)`
        : `translate3d(0px,0px,0px)`
      : `translate3d(0px,100%,0px)`,
    height: commentOnTrig ? (expandTrig ? `100%` : `50%`) : `50%`,
  });

  const [comments, setComments] = React.useState([
    { key: "", content: "", good: 0 },
  ]);
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
  React.useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .auth()
      .signInAnonymously()
      .catch((error) => console.log(error));

    firebase
      .database()
      .ref(author)
      .once("value")
      .then((snap) => {
        let databaseRef: Object;
        databaseRef = snap.val();
        if (databaseRef !== null) {
          let comments: [
            string,
            { content: string; good: number }
          ][] = Object.entries(databaseRef);
          setComments(
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
    if (thisComment !== "" && thisComment !== "ここにコメント入力") {
      if (thisComment.length > 100) {
        alert("コメントは100文字以内にしてください。");
      } else {
        firebase.database().ref(author).push({ content: thisComment, good: 0 });
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
          });
        setThisComment("");
      }
    }
  }, [submitTrig]);
  React.useEffect(() => {
    const CommentsBox = document.getElementById(commentBoxId);
    CommentsBox?.scrollTo(0, CommentsBox.scrollHeight);
  }, [comments]);
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
