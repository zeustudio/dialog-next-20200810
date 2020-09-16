import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Lottie from "react-lottie";
import Credits from "./MainPage/Credits";
import workDataMap from "../../constants/workdata";
import { Author } from "../../constants/Types";
import MDFTexture from "../../images/mdftexture.jpg";
import WideArrow from "../../images/wideArrow.svg";
import LineUp from "../../images/lineUp.svg";
import LineDown from "../../images/lineDown.svg";
import LogoOffline from "../../images/logo_old.svg";
import animationData from "../../images/online_motion_logo_subtitle_white.json";

const authors: Author[] = Array.from(workDataMap.keys());

const logoOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Desktop: React.FC = () => {
  const [author, setAuthor] = useState(authors[0]);

  useEffect(() => {
    const num = Math.floor(Math.random() * authors.length);
    setAuthor(authors[num]);
  }, []);

  return (
    <Wrapper>
      <TitleSection>
        <TitleImg src={workDataMap.get(author)?.OGPImage} />
        <TitleCover />
        <WrapperLogo>
          <Lottie options={logoOptions} />
        </WrapperLogo>
        <WrapperWhoWeAre>
          <WhoWeAre>東京大学　山中俊治研究室</WhoWeAre>
          <WhoWeAre>
            UTokyo
            <br />
            Prototyping & Design Laboratory
          </WhoWeAre>
          <WideArrowImg src={WideArrow} />
        </WrapperWhoWeAre>
      </TitleSection>
      <SectionDiv>
        <SectionTitle>この展覧会の楽しみ方</SectionTitle>
        <VideoDiv>
          <div>
            <p
              style={{
                width: "100%",
                textAlign: "center",
                fontSize: "4rem",
                lineHeight: "5rem",
                color: "white",
              }}
            >
              ▶︎
            </p>
            <p style={{ width: "100%", textAlign: "center", color: "white" }}>
              Dummy Video
            </p>
          </div>
        </VideoDiv>
      </SectionDiv>
      <SectionDiv>
        <SectionTitle>開催にあたり</SectionTitle>
        <GreetingMessage>
          言葉を交えると新しい発見があります。
          <br />
          話すことによってイメージの輪郭が急にはっきりすることもあります。
          <br />
          アイデアは、人との関わりの中で少しずつ、時には劇的に進展します。
          <br />
          山中研究室においても、会話や議論はプロジェクト進行の中核になります。
          <br />
          常に、より広い視野、客観的な意見、新たなビジョンを求めて繰り返される会話。
          <br />
          重要なのは話者の多様性です。
          <br />
          今回の展示では、来場いただいた皆さんと、研究メンバーが会話することを目指しました。
          <br />
          展示されたプロトタイプには、私たちのビジョンや価値観が込められています。
          <br />
          気になることがあったら、そこにいるメンバーに遠慮なく問いかけてください。
          <br />
          そして、あなたが思ったこと、感じたこと、考えたことを聞かせてください。
          <br />
          限られた時間ではありますが、一緒に未来をドライブできれば幸いです。
          <br />
        </GreetingMessage>
        <GreetingAuthor>山中　俊治</GreetingAuthor>
      </SectionDiv>
      <SectionDiv>
        <SectionTitle>もう一つのDiaLog</SectionTitle>
        <WrapperOffline>
          <OfflineImg src={LogoOffline} />
          <OfflineCaption>
            <OfflineTitle>
              DiaLog
              <br />
              きく、はなす、すすむ
            </OfflineTitle>
            <OfflineDate>
              2020.02.22 sat ~ 03.01 sun
              <br />
              東京大学生産技靴研究所S棟1階ギャラリー
            </OfflineDate>
            <OfflineDescription>
              作品製作者と来場者との対話が生まれる場所をコンセプトに、学生が主体となって展示会『DiaLog
              きく、はなす、すすむ』を企画しました。しかしCOVID-19の影響により、開催を目前に一般公開を延期という判断を致しました。
            </OfflineDescription>
          </OfflineCaption>
        </WrapperOffline>
      </SectionDiv>
      <SectionDiv>
        <SectionTitle>WORKS</SectionTitle>
        <WrapperWorks>
          {authors.map((author) => (
            <Link href={`works/${author}`} key={author}>
              <WrapperWorkImg>
                <WorkImg src={workDataMap.get(author)?.overview.img} />
                <MaskWorkImgDiv>
                  <MaskDescription>
                    {workDataMap.get(author)?.overview.TitleEN}
                  </MaskDescription>
                </MaskWorkImgDiv>
              </WrapperWorkImg>
            </Link>
          ))}
        </WrapperWorks>
      </SectionDiv>
      <SectionDiv>
        <Credits />
      </SectionDiv>
    </Wrapper>
  );
};

export default Desktop;

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
  background-image: url(${MDFTexture});
`;

const TitleSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: left top;
`;

const TitleCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.4;
`;

const WrapperLogo = styled.h1`
  width: 240px;
`;

const WrapperWhoWeAre = styled.div`
  position: absolute;
  bottom: 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const WhoWeAre = styled.div`
  width: 100%;
  color: white;
  font-size: 1.6rem;
  line-height: 3.2rem;
  text-align: center;
`;

const WideArrowImg = styled.img`
  margin-top: 16px;
`;

const SectionDiv = styled.div`
  padding: 240px 0 0;
`;

const SectionTitle = styled.h2`
  margin-bottom: 64px;
  font-size: 2rem;
  text-align: center;
  &::before {
    content: url(${LineUp});
    display: block;
    margin-bottom: -4px;
  }
  &::after {
    content: url(${LineDown});
    display: block;
  }
`;

const VideoDiv = styled.div`
  width: 960px;
  height: 540px;
  margin: 0 auto 40px;
  background-image: url(${workDataMap.get("heejun")?.OGPImage});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const GreetingMessage = styled.p`
  margin-bottom: 40px;
  text-align: center;
`;

const GreetingAuthor = styled.p`
  text-align: center;
`;

const WrapperOffline = styled.div`
  width: 60%;
  max-width: 880px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OfflineImg = styled.img`
  width: 240px;
`;

const OfflineCaption = styled.div`
  margin-left: 64px;
`;

const OfflineTitle = styled.h3`
  margin-bottom: 24px;
  font-weight: normal;
`;

const OfflineDate = styled.p`
  margin-bottom: 24px;
`;

const OfflineDescription = styled.p``;

const WrapperWorks = styled.div`
  width: 60%;
  max-width: 880px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const WrapperWorkImg = styled.div`
  position: relative;
  width: 45%;
  margin-bottom: 56px;
  overflow: hidden;
`;

const WorkImg = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const MaskWorkImgDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const MaskDescription = styled.p`
  width: 60%;
  text-align: center;
`;
