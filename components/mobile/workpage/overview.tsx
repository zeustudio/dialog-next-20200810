//作品タイトルページ

import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

import WorkData from "../../../constants/workdata";

import mdf from "../../../images/mdftexture.jpg";
import { Overview, Author } from "../../../constants/Types";

interface Props {
  author: Author; //作者
  isEnglish: boolean; //英語表示トリガー
  scrollTrigState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
const OverviewComp: React.FC<Props> = ({
  author,
  isEnglish,
  scrollTrigState: [scrollTrig, setScrollTrig],
}) => {
  const overview = WorkData.get(author)?.overview as Overview; //作者より作品データ取得
  const [overviewDisplayTrig, setOverviewDisplayTrig] = React.useState(false);
  const overviewAnimation = useSpring({
    opacity: overviewDisplayTrig ? 1 : 0,
    transform: overviewDisplayTrig
      ? "translate3d(0,0,0)"
      : "translate3d(0,50%,0)",
  }); //コメント一覧のアニメーション
  const bind = useDrag(({ tap, swipe: [, swipeY] }) => {
    if (swipeY === -1) {
      if (!scrollTrig) {
        setOverviewDisplayTrig(true);
        setScrollTrig(true);
      }
    } else if (swipeY === 1) {
      if (scrollTrig) {
        setScrollTrig(false);
        setOverviewDisplayTrig(false);
      }
    } else if (tap) {
      setOverviewDisplayTrig(!overviewDisplayTrig);
      setScrollTrig(!scrollTrig);
    }
    console.log(scrollTrig);
  });
  return (
    <Wrapper {...bind()}>
      <Thumb src={overview.img} />
      <CaptionWrapper style={overviewAnimation}>
        <CaptionWrapper2>
          {isEnglish ? (
            <TitleEN>{overview.TitleEN}</TitleEN>
          ) : overview.TitleJP !== "" ? (
            <TitleJP>{overview.TitleJP}</TitleJP>
          ) : (
            <TitleEN>{overview.TitleEN}</TitleEN>
          )}
          {isEnglish ? (
            <Caption>{overview.CaptionEN}</Caption>
          ) : (
            <Caption>{overview.CaptionJP}</Caption>
          )}
          {isEnglish ? (
            <Credit>{overview.CreditEN}</Credit>
          ) : (
            <Credit>{overview.CreditJP}</Credit>
          )}
        </CaptionWrapper2>
      </CaptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${mdf});
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
`;
const Thumb = styled.img`
  height: 100%;
`;

const CaptionWrapper = animated(styled.div`
  background-color: #00000055;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`);
const CaptionWrapper2 = styled.div`
  color: white;
  word-wrap: break-word;
  margin: 0 5% 0 5%;
  overflow-y: scroll;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
const TitleJP = styled.div`
  margin-bottom: 10px;
  font-size: 1.8rem;
  line-height: 4rem;
  text-align: center;
`;
const TitleEN = styled.div`
  font-size: 2rem;
  line-height: 4rem;
  text-align: center;
`;
const Caption = styled.div`
  font-size: 1.2rem;
  line-height: 2.4rem;
  text-indent: 1em;
`;
const Credit = styled.div`
  font-size: 1rem;
  line-height: 2rem;
  margin-top: 10px;
  white-space: pre-line;
`;
export default OverviewComp;

/*<CaptionWrapper>
        {isEnglish ? (
          <TitleEN>{overview.TitleEN}</TitleEN>
        ) : overview.TitleJP !== "" ? (
          <TitleJP>{overview.TitleJP}</TitleJP>
        ) : (
          <TitleEN>{overview.TitleEN}</TitleEN>
        )}
        {isEnglish ? (
          <Caption>{overview.CaptionEN}</Caption>
        ) : (
          <Caption>{overview.CaptionJP}</Caption>
        )}
        {isEnglish ? (
          <Credit>{overview.CreditEN}</Credit>
        ) : (
          <Credit>{overview.CreditJP}</Credit>
        )}
      </CaptionWrapper>*/
