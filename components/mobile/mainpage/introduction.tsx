//先生挨拶
import React from "react";
import styled from "@emotion/styled";

import lineUp from "../../../images/lineUp.svg"; //　・\＿＿＿＿＿＿＿の画像
import lineDown from "../../../images/lineDown.svg"; //　-------------\.の画像
import mdf from "../../../images/mdftexture.jpg";

interface Props {
  width: number; //画面幅
  height: number; //画面高さ
  isEnglishState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]; //英語表示トリガー
}

const Introduction: React.FC<Props> = ({
  width,
  height,
  isEnglishState: [isEnglish, setIsEnglish],
}) => {
  return (
    <Wrapper style={{ width: width, height: height }}>
      <JPEN
        onClick={() => {
          setIsEnglish(!isEnglish);
        }}
      >
        JP/EN
      </JPEN>
      <Line src={lineUp} />
      <IntroductionWrapper>
        <Title>{isEnglish ? `-Introduction-` : `開催にあたり`}</Title>
        <Content>
          {isEnglish
            ? `Discovery often occurs during a “dialogue”. It also helps us to clarify the vague image of our concepts. Those ideas evolve steadily, sometimes dramatically with our engagement with others. Likewise, conversation and discussion are also critical for running our projects. A broader viewpoint, objective opinion and iteration of dialogue, pursuing new vision are always required. What is most important is the diversity of ideas. Our goal in this exhibition is to open a dialogue between you and us. The displayed prototypes are made upon our visions and values. If you have any questions or insights you would like to share with us, please feel free to ask. We would be very glad to hear your thoughts and opinions. Enjoy the short journey with our vision to the future.`
            : "言葉を交えると新しい発見があります。話すことによってイメージの輪郭が急にはっきりすることもあります。アイデアは、人との関わりの中で少しずつ、時には劇的に進展します。山中研究室においても、会話や議論はプロジェクト進行の中核になります。常に、より広い視野、客観的な意見、新たなビジョンを求めて繰り返される会話。重要なのは話者の多様性です。今回の展示では、来場いただいた皆さんと、研究メンバーが会話することを目指しました。展示されたプロトタイプには、私たちのビジョンや価値観が込められています。気になることがあったら、そこにいるメンバーに遠慮なく問いかけてください。そして、あなたが思ったこと、感じたこと、考えたことを聞かせてください。限られた時間ではありますが、一緒に未来をドライブできれば幸いです。"}
        </Content>
        <SenseiName>山中　俊治</SenseiName>
      </IntroductionWrapper>
      <Line src={lineDown} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  scroll-snap-align: end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${mdf});
  position: relative;
`;
const Line = styled.img`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;
const Title = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  line-height: 4rem;
`;
const Content = styled.div`
  font-size: 1.2rem;
  line-height: 2.4rem;
  margin: 0 20px 0 20px;
  text-indent: 1em;
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 3.2rem;
    margin: 0 20% 0 20%;
  }
`;
const SenseiName = styled.div`
  font-size: 1.2rem;
  line-height: 2.4rem;
  margin: 50px 20px 10px 20px;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 3.2rem;
    margin: 50px 20% 10px 20%;
  }
`;
const IntroductionWrapper = styled.div``;
const JPEN = styled.div`
  position: absolute;
  width: 80px;
  height: 40px;
  right: 5%;
  top: 3%;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
`;
export default Introduction;
