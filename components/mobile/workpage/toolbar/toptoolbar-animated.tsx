import React from "react";
import styled from "@emotion/styled";
import { useSpring, useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import Link from "next/link";

import logo from "../../../../images/logo_white.png";

import WorkData from "../../../../constants/workdata";

const keyArray: string[] = Array.from(WorkData.keys()); //作品作者リスト
const n: number = keyArray.length; //作者数

const clamp = (x: number, a: number, b: number) => {
  //clamp関数、xをa以上b以下に抑える。サムネ画像の列がスライドするとき、一定範囲以内で動かせるため導入。
  if (x < a) {
    return a;
  } else if (x > b) {
    return b;
  } else {
    return x;
  }
};

interface Props {
  author: string; //作者名の文字列
  englishTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]; //英語表示トリガー
}

const TopToolBarAnimated: React.FC<Props> = ({
  author,
  englishTrigState: [englishTrig, setEnglishTrig],
}) => {
  const [thumbIndex, setThumbIndex] = React.useState(keyArray.indexOf(author)); //現在中央に位置するサムネのインデックス
  const [carouselPos, setCarouselPos] = React.useState(
    ((n - 1 - keyArray.indexOf(author)) * 375) / (2 * n + 1)
  ); //現在のカルーセル位置(ピクセル単位)
  const [width, setWidth] = React.useState(375 / 2); //サムネ列の幅、画面幅の半分くらい

  const [props, set] = useSpring(() => ({
    transform: `translate3d(${
      ((n - 1 - keyArray.indexOf(author)) * 375) / (2 * n + 1)
    }px,0px,0px)`,
  })); //サムネ列の左右アニメーション

  const thumbAnimation = useSprings(
    n,
    keyArray.map((key, index) => ({
      width: index === n - 1 - thumbIndex ? `32px` : `16px`,
      height: index === n - 1 - thumbIndex ? `32px` : `16px`,
      name: key,
    }))
  ); //サムネ画像の拡大縮小アニメーション

  const [deltaWidth, setDeltaWidth] = React.useState(375 / (2 * n + 1)); //各サムネが占有する幅(ピクセル)

  const bind = useDrag(({ down, delta: [dx] }) => {
    if (down) {
      setCarouselPos(carouselPos + dx);
    }
  }); //サムネ列のドラッグ操作

  React.useEffect(() => {
    //コンポーネント初期化、サムネ、サムネ列の幅などを計算する
    const a = 16;
    const b = 32;
    const c = (window.innerWidth / 2 - (n - 1) * a - b / 2) / n;
    setWidth(window.innerWidth / 2 + c + b / 2); //サムネ列の幅
    setDeltaWidth(a + c); //マージンを含むサムネ幅
    setCarouselPos((n - 1 - keyArray.indexOf(author)) * (a + c)); //カルーセルの初期位置、現在設定されている作品のサムネに合わせられる。
  }, []);

  React.useEffect(() => {
    setThumbIndex(clamp(Math.round(carouselPos / deltaWidth), 0, n - 1));
  }, [carouselPos]); //carouselPosを用いてthumbIndexを設定

  React.useEffect(() => {
    set({ transform: `translate3d(${thumbIndex * deltaWidth}px,0px,0px)` });
  }, [thumbIndex]); //thumbIndexを用いてアニメーションを実装

  return (
    <Wrapper {...bind()}>
      <Link href={{ pathname: "/", query: { isEnglish: englishTrig } }}>
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
      </Link>
      <Wrapper2 style={{ ...props, width: `${width}px` }}>
        {thumbAnimation.map((prop, index) => {
          return (
            <Link
              href={{
                pathname: `/works/${keyArray[index]}`,
                query: { isEnglish: englishTrig },
              }}
              key={index}
            >
              <Img
                src={WorkData.get(keyArray[index]).overview.img}
                style={prop}
              />
            </Link>
          );
        })}
      </Wrapper2>
      <JPEN
        onClick={() => {
          setEnglishTrig(!englishTrig);
        }}
      >
        JP/EN
      </JPEN>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #282729;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 3;
`;
const Wrapper2 = animated(styled.div`
  position: absolute;
  height: 36px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  overflow: hidden;
  padding-bottom: 4px;
`);
const Img = animated(styled.img``);
const Logo = styled.img`
  margin-left: 20px;
  width: 40px;
  height: 40px;
`;
const JPEN = styled.div`
  position: absolute;
  width: 80px;
  height: 40px;
  background: #282729;
  right: 0px;
  font-size: 1.6rem;
  color: white;
  line-height: 40px;
  text-align: center;
`;
const LogoWrapper = styled.div`
  position: absolute;
  background: #282729;
  width: 60px;
  height: 40px;
  z-index: 10;
`;

export default TopToolBarAnimated;
