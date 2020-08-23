import React from "react";
import styled from "@emotion/styled";
import Lottie from "react-lottie";

import Carousel from "../carousel";

import animationData from "../../../images/online_motion_logo_subtitle_white.json";
import wideArrow from "../../../images/wideArrow.svg"; //幅が広い下向き矢印画像

import WorkData from "../../../constants/workdata";

const keyArray: string[] = Array.from(WorkData.keys()); //作品作者リスト

const logoOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

interface Props {
  width: number; //画面幅
  height: number; //画面高さ
}

const TitleScreen: React.FC<Props> = ({ width, height }) => {
  const imgs: string[] = keyArray.map((key) => {
    return WorkData.get(key).overview.img; //作品サムネリストを取得
  });

  return (
    <Wrapper>
      <CarouselWrapper style={{ left: `${-(height - width) / 2}px` }}>
        <Carousel
          imgs={imgs}
          width={height}
          height={height}
          isTouchable={false}
          dotsOn={false}
        />
      </CarouselWrapper>
      <SmokeGlass>
        <Logo>
          <Lottie options={logoOptions} />
        </Logo>
        <WhoWeAreWrapper>
          <WhoWeAre>東京大学　山中俊治研究室</WhoWeAre>
          <WhoWeAre>UTokyo Prototyping & Design Laboratory</WhoWeAre>
        </WhoWeAreWrapper>
        <WideArrow src={wideArrow} />
      </SmokeGlass>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  scroll-snap-align: end;
`;

const CarouselWrapper = styled.div``;
const SmokeGlass = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  grid-template-rows: 3fr 3fr 2fr 1fr;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.div`
  width: 90%;
  grid-row: 2/3;
  align-self: center;
  justify-self: center;
`;

const WhoWeAre = styled.div`
  color: white;
  font-size: 1.6rem;
  line-height: 3.2rem;
  text-align: center;
`;
const WhoWeAreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  grid-row: 3/4;
`;
const WideArrow = styled.img`
  width: 40%;
  margin-bottom: 0%;
  grid-row: 4/5;
  align-self: center;
  justify-self: center;
`;
export default TitleScreen;
