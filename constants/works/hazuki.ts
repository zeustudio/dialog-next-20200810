import hazuki_1_1 from "../../images/works/Hazuki/hazuki_1-1.png";
import hazuki_1_2 from "../../images/works/Hazuki/hazuki_1-2.png";
import hazuki_2 from "../../images/works/Hazuki/hazuki_2.png";
import hazuki_3_1 from "../../images/works/Hazuki/hazuki_3-1.png";
import hazuki_3_2 from "../../images/works/Hazuki/hazuki_3-2.png";
import hazuki_5 from "../../images/works/Hazuki/hazuki_5.png";
import hazuki_6 from "../../images/works/Hazuki/hazuki_6.png";
import hazuki_7 from "../../images/works/Hazuki/hazuki_7.png";
import hazuki_8 from "../../images/works/Hazuki/hazuki_8.png";
import hazuki_9 from "../../images/works/Hazuki/hazuki_9.png";
import HandWritingImage from "../../images/works/Hazuki/hazuki_handwriting.png";
import OGPImage from "../../images/works/Hazuki/hazuki_ogp.png";
import ThumbnailImage from "../../images/works/Hazuki/hazuki_small.png";

interface overview {
  img: string;
  TitleJP: string;
  TitleEN: string;
  CaptionJP: string;
  CaptionEN: string;
  CreditJP: string;
  CreditEN: string;
}

interface content {
  img: string[];
  video: string[];
  TitleJP: string;
  TitleEN: string;
  MessageJP: string;
  MessageEN: string;
}
interface workdata {
  overview: overview;
  contents: content[];
  handwritingImage: string;
  OGPImage: string;
}

const overview: overview = {
  img: ThumbnailImage,
  TitleJP: "",
  TitleEN:
    "Reduce Unconscious Gender Bias through Workshop with Co-Speculative Design",
  CaptionJP: `無意識のバイアスに気づくことは、簡単ではありません。生まれ育った環境や文化を通して、積み重なる学習によって根付いたものです。性別へのバイアスによって様々な可能性が阻まれている現状に対し、Co-Speculative Desginと言う理論を取り入れ、固定概念を覆し、内省を促すワークショップを設計しました。ワークショップ内では、起こりうる未来を想定しながらペルソナを作る過程でバイアスが露呈される仕掛けを用意し、参加者同士が対話することでバイアスに対する新たな問題への気づきを促しました。`,
  CaptionEN: `It is quite difficult to realize our unconscious bias. It develops in our subconsciousness, while we live through our own culture and environment. We designed a workshop to discover and self-examine our inner gender bias, by introducing co-speculative design theory. In this workshop, we designed to expose an individual's bias while each participant build persona simulating close future of themselves. And by each participant's conversation, we were able to make them perceive some new problems about bias.`,
  CreditJP: `制作：三好葉月\n ディレクション：山中俊治`,
  CreditEN: `Designer: Hazuki Miyoshi\n Director: Shunji Yamanaka`,
};

const contents: content[] = [
  {
    img: [hazuki_1_1, hazuki_1_2],
    video: [],
    TitleJP: `なぜ理系に女性が少ないのか`,
    TitleEN: `Why are there so few women in science?`,
    MessageJP: `要因の一つとして「無意識のジェンダーバイアス」があると考え、無意識のバイアスへの気づきを促すワークショップを設計し、Implicit Association Test(IAT)で評価を行うことにしました。`,
    MessageEN: `Considering that one of the factors is "unconscious gender bias," we designed a workshop to promote awareness of unconscious bias and assessed it with the Implicit Association Test (IAT).`,
  },
  {
    img: [hazuki_2],
    video: [],
    TitleJP: `新しいワークショップの提案1\n -Co-Speculative Designを用いた\n ワークショップの開催`,
    TitleEN: `New Workshop Proposal 1 - Workshop on Co-Speculative Design`,
    MessageJP: `Speculative Design（未来の可能性を提示し、問題提起するデザインの方法論）として、“Future Scientist”の映像制作を行い、「未来の評価システム」を考えることをコンセプトに設定しました。映像観賞後、参加者それぞれから生まれた問いや疑問を元に、議論や対話を行います（Co-Speculative Design）。このフェーズで、参加者がワークショップのコンセプトにある問題提起以上の新たな問題が発見ないし再定義されることを目指しました。`,
    MessageEN: `Future Scientist film production as Speculative Design (design methodologies that present future possibilities and create questions) and set up the concept of thinking about the evaluation system of the future. After watching the film, participants will discuss and have a dialogue based on the questions and doubts raised by each of them (Co-Speculative Design).In this phase, the aim was for participants to discover or redefine new issues beyond those raised in the workshop concept.`,
  },
  {
    img: [hazuki_3_1, hazuki_3_2],
    video: [],
    TitleJP: `新しいワークショップの提案2\n -無意識のジェンダーバイアスではなく一般論から議論を始める`,
    TitleEN: `New Workshop Proposal 2\n - We start the discussion with generalities, not unconscious gender bias.`,
    MessageJP: `入試や受験における評価システムのような、動機よりも手段に重きが置かれている評価システムへの問題提起から出発し、個人のポテンシャルを発揮できるような適材適所で多様性のある未来の評価システムを考えることをWSのゴールに設定しました。UGBを減らす目的とは参加者に伝えずにWSを進め、後半のワークでUGBが露呈するような仕掛けを用意しました。`,
    MessageEN: `The goal of the workshop was to think about a future evaluation system with diversity and the right person in the right place to demonstrate individual potential, starting with the issue of evaluation systems that place more emphasis on the means than the motive, such as those used in entrance examinations.We proceeded with the WS without telling participants that the purpose was to reduce UGB, and we prepared a device that would expose UGB in the second half of the work.`,
  },
  {
    img: [],
    video: ["https://www.youtube-nocookie.com/embed/YLnCXKA4O_c"],
    TitleJP: `ワークショップの実施`,
    TitleEN: `Workshops`,
    MessageJP: `無意識のジェンダーバイアスを前提としないワークショップにより、無意識のジェンダーバイアス減少を目指しました。STEP3のジェンダースワップにより生じた解釈を、STEP4のセッションにて深掘りすることで無意識のジェンダーバイアスに気付くという仕掛けを施しました。`,
    MessageEN: `We aimed to reduce unconscious gender bias through workshops that did not assume it. The trick was to notice the unconscious gender bias by digging deeper into the interpretations created by the STEP3 gender swap in the STEP4 session.`,
  },
  {
    img: [hazuki_5],
    video: [],
    TitleJP: `WSを通して無意識のジェンダーバイアスは減ったのか`,
    TitleEN: `Has unconscious gender bias been reduced through WS?`,
    MessageJP: `ワークショップ参加前後のIAT結果より、ワークショップによって無意識のジェンダーバイアスは減少、もしくは不変であったことがわかりました。`,
    MessageEN: `Pre- and post-workshop IAT results showed that unconscious gender bias was reduced or unchanged by the workshop.`,
  },
  {
    img: [hazuki_6],
    video: [],
    TitleJP: `Co-speculative Designの有効性`,
    TitleEN: `Effectiveness of Co-speculative Design`,
    MessageJP: `参加者同士の議論や対話を通して、WSのコンセプトにある問題提起以上の新たな問題が発見、ないし再定義される部分を評価しました。評価は、WS中のユーザの振る舞いを記録、観察し、ユーザとの対話によって行動の理由やショックのあった部分を深掘りすることで行いました。また、必要に応じて追跡調査を実施しました。`,
    MessageEN: `Through discussion and dialogue among the participants, we evaluated the areas where new issues were discovered or redefined new issues beyond the WS concept. The evaluation is based on recording and observing the user's behavior during the WS and interacting with them to determine the reasons for their behavior and We did this by digging deeper into the areas where there was a shock. We also conducted follow-up surveys as needed.`,
  },
  {
    img: [hazuki_7],
    video: [],
    TitleJP: `ワークショップの評価`,
    TitleEN: `Evaluation of workshop`,
    MessageJP: `全3回のワークショップについて、懸念点、評価点を分析しました。`,
    MessageEN: `We analyzed the concerns and evaluations of all three workshops`,
  },
  {
    img: [hazuki_8],
    video: [],
    TitleJP: `要約`,
    TitleEN: `Summary`,
    MessageJP: `実施したWSによって無意識のジェンダーバイアスへの気づきを促すことに成功しました。また、Co-Speculative Designは新しい問題構築に有効であること、WSにおいては雰囲気作りも重要であることがわかりました。`,
    MessageEN: `The WS that was conducted successfully promoted awareness of unconscious gender bias. We also found that Co-Speculative Design is effective in building new questions and that setting a mood is also important in WS.`,
  },
  {
    img: [hazuki_9],
    video: [],
    TitleJP: `結論`,
    TitleEN: `conclusion`,
    MessageJP: `無意識のバイアスに気づくことは困難なため、自分を見つめ直す機会を持つことが重要であると考えました。`,
    MessageEN: `Since unconscious bias can be difficult to recognize, we thought it was important to have an opportunity to reflect on ourselves.`,
  },
];

const HazukiData: workdata = {
  overview: overview,
  contents: contents,
  handwritingImage: HandWritingImage,
  OGPImage: OGPImage,
};

export default HazukiData;
