import React from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";
import smoothscroll from "smoothscroll-polyfill";
import { useTransition, animated } from "react-spring";
import Link from "next/link";

import MDFTexture from "../../images/mdftexture.jpg";
import HeaderLogo from "../../images/logo_white.png";
import dynamic from "next/dynamic";
const WorkCaptionCarousel = dynamic(import("./WorkCaptionCarousel"), {
  ssr: false,
});

import { WorkData } from "../../constants/Types";

const comments = [
  "hoge",
  "fuga",
  "hfff",
  "afsda",
  "fdsafds afdsafdsaf dsafdsafdsafdsa fdsafdsafdsa",
  "hoge",
  "fuga",
  "hfff",
  "afsda",
  "fdsafds afdsafdsaf dsafdsafdsafdsa fdsafdsafdsa",
];

interface WorkMainProps {
  AuthorData: WorkData;
}

export const WorkMain: React.FC<WorkMainProps> = ({ AuthorData }) => {
  const contents = AuthorData.contents.filter((content) => {
    return content.img.length !== 0;
  });
  // 現在選択されているsectionの番号 表紙+説明+コンテンツ
  const sections = React.useMemo(
    () => [...Array(2 + contents.length)].map((_, i) => i),
    []
  );
  const [selectedSection, setSelectedSection] = React.useState(0);
  // JP or EN
  const [isEnglish, setIsEnglish] = React.useState(false);

  const [consoleWidth, setConsoleWidth] = React.useState(0);
  const [consoleHeight, setConsoleHeight] = React.useState(0);

  const consoleAreaRef = React.useRef<HTMLDivElement>(null);

  // scrollのwrapperの範囲へのref
  const observerRootRef = React.useRef<HTMLDivElement>(null);
  // comment部分へのref
  const commentDivRef = React.useRef<HTMLDivElement>(null);
  // targets.current[id].currentにHTMLDivElementが格納される
  // refを一度にたくさん作成している
  const targets = React.useRef<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>({});
  sections.forEach((section) => {
    targets.current[section] = React.createRef();
  });
  // スクロール後に実行する用
  // cleartimeoutはnumber setTimeout Nodejs.TimeOutを指定している。。。なぞなのでany
  const timeoutIdRef = React.useRef<any | undefined>(undefined);
  // 今のセクションがどこか ダイレクトに表示する用
  const sectionIdRef = React.useRef<number>(0);

  // 高さ幅の取得
  React.useEffect(() => {
    const consoleArea = consoleAreaRef.current as HTMLDivElement;
    setConsoleWidth(consoleArea.clientWidth / 2);
    setConsoleHeight((consoleArea.clientWidth * 2) / 3 + 232);
    // setConsoleHeight(669.594);
  }, []);

  // 交差の検知の設定
  React.useEffect(() => {
    //wheelの伝播の防止
    const commentDiv = commentDivRef.current as HTMLDivElement;
    commentDiv.addEventListener("wheel", (e) => {
      e.stopPropagation();
    });
    // smoothのpolyfill
    smoothscroll.polyfill();
    const observerRoot = observerRootRef.current as HTMLDivElement;
    const options = {
      root: observerRoot,
      rootMargin: "-50% 0px",
      threshold: 0,
    };
    // 交差の検知
    const observer = new IntersectionObserver((argEntries) => {
      const entries = Array.prototype.slice.call(argEntries, 0);
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setSelectedSection(Number(entry.target.id));
          sectionIdRef.current = Number(entry.target.id);

          // 交差検知ごとに実行 間隔を短くしすぎるとボタンで飛べなくなる
          // 最初の間のみアニメーションの関係で間隔を短くする
          // if (entry.target.id <= 1) {
          //   clearTimeout(timeoutIdRef.current);
          //   timeoutIdRef.current = setTimeout(function () {
          //     smoothScroll(Number(entry.target.id));
          //   }, 10);
          // } else {
          // clearTimeout(timeoutIdRef.current);
          // timeoutIdRef.current = setTimeout(function () {
          //   smoothScroll(Number(entry.target.id));
          // }, 1000);
          // }
        }
      });
    }, options);
    Object.values(targets.current).forEach((target) => {
      const sectionDiv = target.current as HTMLDivElement;
      observer.observe(sectionDiv);
    });
    return () => {
      Object.values(targets.current).forEach((target) => {
        const sectionDiv = target.current as HTMLDivElement;
        // sectionDivがないときはとばす
        if (sectionDiv === null) {
          return;
        }
        observer.unobserve(sectionDiv);
      });
    };
  }, []);

  const smoothScroll = (id: number) => {
    const targetSection = document.getElementById(`${id}`) as HTMLDivElement;
    // 画面遷移のせいでnullになった場合、抜ける
    if (targetSection === null) {
      return;
    }
    targetSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleWheel = () => {
    // 最初の方はグリッドしない
    if (sectionIdRef.current < 2) {
      return;
    }
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(function () {
      smoothScroll(sectionIdRef.current);
    }, 500);
  };

  // リンククリックの時、smoothで移動させる
  const handleLink = React.useCallback((id: number) => {
    smoothScroll(id);
  }, []);

  // 背景画像のfadein fadeout用
  const transitinsBGImg = useTransition(selectedSection < 2, null, {
    initial: { opacity: 1 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const transitionsCaption = useTransition(selectedSection < 2, null, {
    initial: { opacity: 1 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 10,
    },
  });
  // 背景画像カバーのfadein fadeout用
  const transitinsCoverImg = useTransition(selectedSection === 1, null, {
    initial: { opacity: 0 },
    from: { opacity: 0 },
    enter: { opacity: 0.8 },
    leave: { opacity: 0 },
  });
  // headerのfadein fadeout用
  const transitinsHeader = useTransition(selectedSection >= 1, null, {
    from: { opacity: 0, transform: "translateY(56px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(56x)" },
  });
  // topの下ボタン　fadeoout用
  const transitinsUnderButton = useTransition(selectedSection <= 1, null, {
    initial: { opacity: 0.8 },
    from: { opacity: 0 },
    enter: { opacity: 0.8 },
    leave: { opacity: 0 },
  });

  return (
    <WrapperDiv ref={observerRootRef} onWheel={handleWheel}>
      {transitinsHeader.map(({ item, key, props }) =>
        item ? (
          <Header style={props} key={key}>
            <Link href="/">
              <HeaderLogoImg
                src={HeaderLogo}
                alt="Dia Log"
                height="800"
                width="800"
              />
            </Link>
            <JPENButton
              onClick={() => {
                setIsEnglish((prev) => !prev);
              }}
            >
              {isEnglish ? (
                <>
                  <JPENSpan>JP</JPENSpan> / EN
                </>
              ) : (
                <>
                  JP / <JPENSpan>EN</JPENSpan>
                </>
              )}
            </JPENButton>
          </Header>
        ) : null
      )}

      <MainDiv>
        {transitinsBGImg.map(({ item, key, props }) =>
          item ? (
            <OverviewImg src={AuthorData.OGPImage} style={props} key={key} />
          ) : null
        )}
        {transitinsCoverImg.map(({ item, key, props }) =>
          item ? <CoverDiv style={props} key={key} /> : null
        )}
        {transitinsUnderButton.map(({ item, key, props }) =>
          item ? (
            <UnderArrowButton
              onClick={() => handleLink(selectedSection + 1)}
              style={props}
              key={key}
            >
              ▼
            </UnderArrowButton>
          ) : null
        )}
        <SectionDiv ref={targets.current[0]} id={`${0}`} key={0}>
          <OverviewDummyDiv></OverviewDummyDiv>
        </SectionDiv>
        <SectionDiv ref={targets.current[1]} id={`${1}`} key={1}>
          <OverviewDiv>
            {transitionsCaption.map(({ item, key, props }) =>
              item ? (
                <OverviewCaptions style={props} key={key}>
                  {isEnglish ? (
                    <>
                      <OverviewCaptionTitle>
                        {AuthorData.overview.TitleEN}
                      </OverviewCaptionTitle>
                      <OverviewCaptionMain>
                        {AuthorData.overview.CaptionEN}
                      </OverviewCaptionMain>
                      <OverviewCaptionCredit>
                        {AuthorData.overview.CreditEN}
                      </OverviewCaptionCredit>
                    </>
                  ) : (
                    <>
                      <OverviewCaptionTitle>
                        {AuthorData.overview.TitleJP}
                      </OverviewCaptionTitle>
                      <OverviewCaptionMain>
                        {AuthorData.overview.CaptionJP}
                      </OverviewCaptionMain>
                      <OverviewCaptionCredit>
                        {AuthorData.overview.CreditJP}
                      </OverviewCaptionCredit>
                    </>
                  )}
                </OverviewCaptions>
              ) : null
            )}
          </OverviewDiv>
        </SectionDiv>
        {contents.map((content, index) => (
          <SectionDiv
            ref={targets.current[index + 2]}
            id={`${index + 2}`}
            key={index + 2}
          >
            <LimitDiv>
              <WrapCCArea>
                <CaptionArea ref={consoleAreaRef}>
                  <WorkCaptionCarousel
                    captionImages={content.img}
                    captionTitleJP={content.TitleJP}
                    captionTitleEN={content.TitleEN}
                    captionMessageJP={content.MessageJP}
                    captionMessageEN={content.MessageEN}
                    isEnglish={isEnglish}
                  />
                </CaptionArea>
                {index === 0 ? (
                  <ConsoleArea>
                    <ConsoleDiv width={consoleWidth} height={consoleHeight}>
                      <PageArea>
                        {sections.map((section, index) =>
                          index === 0 ? null : (
                            <SectionLink
                              key={index}
                              onClick={() => {
                                handleLink(section);
                              }}
                              css={
                                selectedSection === index ? ActivatedLink : null
                              }
                            >
                              {index <= 1
                                ? `${index}. Overview`
                                : `${index}. ${contents[index - 2].TitleEN}`}
                            </SectionLink>
                          )
                        )}
                      </PageArea>
                      <CommentArea>
                        <CommentDiv ref={commentDivRef}>
                          {comments.map((comment, index) => (
                            <CommentP key={index}>
                              {index}. {comment}
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
                        />
                        <StyledButton>▶︎</StyledButton>
                      </StyledForm>
                    </ConsoleDiv>
                  </ConsoleArea>
                ) : (
                  <></>
                )}
              </WrapCCArea>
            </LimitDiv>
          </SectionDiv>
        ))}
      </MainDiv>
    </WrapperDiv>
  );
};

const WrapperDiv = styled.div`
  width: 100%;
  background-image: url(${MDFTexture});
`;

const Header = styled(animated.header)`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 0;
  padding: 0 24px;
  z-index: 15;
`;

const HeaderLogoImg = styled.img`
  width: 104px;
  height: auto;
  margin-top: 8px;
  cursor: pointer;
`;

const JPENButton = styled.button`
  color: white;
  font-size: 1.6rem;
  margin-top: 32px;
`;

const JPENSpan = styled.span`
  opacity: 0.5;
`;

const OverviewDummyDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

const bounce = keyframes`
  from, 10%, 18%, 26%, to{
    transform: translateY(0);
  }
  14%, 22%{
    transform: translateY(-30px);
  }
`;

const UnderArrowButton = styled(animated.button)`
  position: fixed;
  left: 50%;
  bottom: 24px;
  width: 64px;
  height: 64px;
  color: white;
  background-color: black;
  border: solid 2px white;
  border-radius: 50%;
  animation: ${bounce} 5s ease-out infinite;
  z-index: 20;
`;

const OverviewDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

const OverviewCaptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  color: white;
`;

const OverviewCaptionTitle = styled.h3`
  width: 100%;
  margin-bottom: 24px;
`;
const OverviewCaptionMain = styled.p``;
const OverviewCaptionCredit = styled.p`
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 64px;
  margin-left: auto;
  justify-self: flex-end;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const OverviewImg = styled(animated.img)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: left top;
  z-index: 10;
`;

const CoverDiv = styled(animated.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 10;
`;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  /* scroll-snap-type: y proximity; */
`;

const SectionDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  scroll-snap-align: start;
`;

const LimitDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 1025px;
  margin: 0 auto;
`;

const WrapCCArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CaptionArea = styled.div`
  width: 64%;
`;

const ConsoleArea = styled.div`
  position: relative;
  width: 32%;
`;

const ConsoleDiv = styled.div<{
  width: number;
  height: number;
}>`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transform: translateY(-200vh);
`;

const PageArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding-bottom: 8px;
  /* background-color: black; */
  color: white;
`;

const SectionLink = styled.a`
  display: block;
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: darkgray;
  cursor: pointer;
  transition: 0.3s ease all;
  transform-origin: center left;
  transform: scale(0.8);
  &:hover {
    color: gray;
  }
`;

const ActivatedLink = css`
  color: black;
  transform: scale(1);
  &:hover {
    color: black;
  }
`;

const CommentArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 24px 24px 0;
  background-color: black;
  color: white;
  overflow: scroll;
  /* スクロールバーの削除 */
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
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
