//いいねボタン
import React from "react";
import styled from "@emotion/styled";
import * as firebase from "firebase/app";
import "firebase/database";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as faThumbsUpRegular } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as faThumbsUpSolid } from "@fortawesome/free-solid-svg-icons";

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

interface Props {
  commentKey: string;
}
const GoodButton: React.FC<Props> = ({ commentKey }) => {
  const [isClicked, setisClicked] = React.useState(false);
  const [good, setGood] = React.useState(0);

  React.useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } //firebase初期化
    firebase
      .database()
      .ref(`users/${firebase.auth().currentUser?.uid}`)
      .once("value")
      .then((snap1) => {
        const snapshot = snap1.val();
        const alreadySelectedItems =
          snapshot !== null ? Array.from(Object.values(snapshot)) : [];
        if (alreadySelectedItems.indexOf(commentKey) !== -1) {
          setisClicked(true);
          firebase
            .database()
            .ref(commentKey)
            .once("value")
            .then((snap2) => {
              setGood(snap2.val().good);
            });
        }
      });
  }, []);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isClicked) {
      firebase
        .database()
        .ref(`users/${firebase.auth().currentUser?.uid}`)
        .once("value")
        .then((snap1) => {
          const snapshot = snap1.val();
          const alreadySelectedItems =
            snapshot !== null ? Array.from(Object.values(snapshot)) : [];
          if (alreadySelectedItems.indexOf(commentKey) === -1) {
            firebase
              .database()
              .ref(commentKey)
              .once("value")
              .then((snap2) => {
                const score = snap2.val().good;
                firebase
                  .database()
                  .ref(commentKey)
                  .child("good")
                  .set(score + 1);
                setGood(snap2.val().good + 1);
              });
            firebase
              .database()
              .ref(`users/${firebase.auth().currentUser?.uid}`)
              .push(commentKey);
            setisClicked(true);
          }
        });
    }
  };

  return (
    <GoodButtonWrapper onClick={handleClick}>
      {isClicked ? (
        <FontAwesomeIcon icon={faThumbsUpSolid} />
      ) : (
        <FontAwesomeIcon icon={faThumbsUpRegular} />
      )}
      {isClicked && good !== 0 ? (
        good > 99 ? (
          <GoodButtonNumber>99+</GoodButtonNumber>
        ) : (
          <GoodButtonNumber>{good}</GoodButtonNumber>
        )
      ) : null}
    </GoodButtonWrapper>
  );
};

const GoodButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 15px;
  margin: 0 5px 0 5px;
  text-align: center;
  line-height: 40px;
  font-size: 1.8rem;
  position: relative;
`;
const GoodButtonNumber = styled.div`
  position: absolute;
  right: -5px;
  top: -5px;
  height: 15px;
  padding: 0 4px 0 4px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 15px;
  background-color: black;
  color: white;
`;

export default GoodButton;
