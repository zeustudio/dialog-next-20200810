import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
//react-slickがなぜかバグったため、自作しました。

const v = 0.3; //カルーセルスワイプ速さの閾値。これ以下のスピードでスワイプすると遷移がトリガーされない。

interface Props {
  imgs: string[]; //画像リスト
  width: number; //カルーセル幅
  height: number; //カルーセル高さ
  isTouchable: boolean; //スワイプで画像をめくる機能のトリガー
  dotsOn: boolean; //カルーセル下の点々のトリガー
}

const Carousel: React.FC<Props> = ({
  imgs,
  width,
  height,
  isTouchable,
  dotsOn,
}) => {
  const n = imgs.length;
  const [displayIndex, setDisplayIndex] = React.useState(0); //現在表示される画像のインデックス
  const [autoPlayTrig, setAutoPlayTrig] = React.useState(true); //スライドショーの自動再生トリガー
  const autoPlayTrigRef = React.useRef(autoPlayTrig);
  const displayIndexRef = React.useRef(displayIndex); //上記二つのstateは再レンダリングされるたびに初期化されちゃうので、こっちに格納する。

  const [carouselAnimation, setCarouselAnimation] = useSpring(() => ({
    transform: `translate3d(${-displayIndexRef.current * width}px,0px,0px)`,
  })); //カルーセルアニメーション。displayIndexで選択された画像が中央に来るようになる。

  const bind = useDrag(({ vxvy: [vx], last }) => {
    //スワイプアクションの定義
    if (isTouchable) {
      if (last && vx > v) {
        if (displayIndex > 0) {
          setAutoPlayTrig(false);
          setDisplayIndex(displayIndex - 1);
        }
      } else if (last && vx < -v) {
        if (displayIndex < n - 1) {
          setAutoPlayTrig(false);
          setDisplayIndex(displayIndex + 1);
        }
      }
    }
  });

  React.useEffect(() => {
    autoPlayTrigRef.current = autoPlayTrig;
  }, [autoPlayTrig]);
  React.useEffect(() => {
    displayIndexRef.current = displayIndex;
  }, [displayIndex]); //refにstateを格納

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlayTrigRef.current === true) {
        setDisplayIndex((displayIndex) =>
          displayIndex < n - 1 ? displayIndex + 1 : 0
        );
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []); //自動再生を処理するところ、3000ms毎に画像がスライドする

  React.useEffect(() => {
    setCarouselAnimation({
      transform: `translate3d(${-displayIndex * width}px,0px,0px)`,
    });
  }, [displayIndex]); //displayIndexとアニメーションを関連付けるところ

  return (
    <>
      <Wrapper style={{ width: `${width}px`, height: `${height}px` }}>
        <ImgWrapper
          {...bind()}
          style={{
            ...carouselAnimation,
            width: `${width * n}px`,
            height: `${height}px`,
          }}
          onClick={() => {
            setAutoPlayTrig(!autoPlayTrig);
          }}
        >
          {imgs.map((img, index) => {
            if (img.indexOf("https://www.youtube-nocookie.com/embed/") !== -1) {
              return (
                <Video
                  key={index}
                  src={img}
                  allow={"fullscreen"}
                  style={{ width: `${width}px`, height: `${height}px` }}
                />
              );
            } else {
              return (
                <Img
                  key={index}
                  src={img}
                  style={{ width: `${width}px`, height: `${height}px` }}
                />
              );
            }
          })}
        </ImgWrapper>
      </Wrapper>
      {dotsOn ? (
        <DotWrapper>
          {imgs.map((img, index) => {
            if (index === displayIndex) {
              return (
                <Dot key={index} className={img}>
                  <FontAwesomeIcon icon={faCircleRegular} />
                </Dot>
              );
            } else {
              return (
                <Dot key={index} className={img}>
                  <FontAwesomeIcon icon={faCircleSolid} />
                </Dot>
              );
            }
          })}
        </DotWrapper>
      ) : null}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: top;
  overflow-x: hidden;
`;
const DotWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
const Dot = animated(styled.div`
  font-size: 10px;
  margin: 0 10px 0 10px;
`);

const Img = styled.img``;
const Video = styled.iframe``;
const ImgWrapper = animated(styled.div`
  display: flex;
`);
export default Carousel;
