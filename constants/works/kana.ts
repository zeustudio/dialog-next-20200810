import kana0101 from "../../images/works/Kana/05-01-01.mp4";
import kana0201 from "../../images/works/Kana/05-02-01.mp4";
import kana0301 from "../../images/works/Kana/05-03-01.png";
import kana0302 from "../../images/works/Kana/05-03-02.png";
import kana0303 from "../../images/works/Kana/05-03-03.png";
import kana0304 from "../../images/works/Kana/05-03-04.png";
import kana0401 from "../../images/works/Kana/05-04-01.png";
import kana0402 from "../../images/works/Kana/05-04-02.png";
import kana0403 from "../../images/works/Kana/05-04-03.png";
import kana0501 from "../../images/works/Kana/05-05-01.mp4";
import kana0601 from "../../images/works/Kana/05-06-01.png";
import kana0602 from "../../images/works/Kana/05-06-02.png";
import kana0603 from "../../images/works/Kana/05-06-03.png";

import HandWritingImage from "../../images/works/Kana/kana-munya_handwriting.png";
import OGPImage from "../../images/works/Kana/kana-munya_ogp.png";
import ThumbnailImage from "../../images/works/Kana/kana-munya_small.png";
import { Overview, Content, WorkData } from "../Types";

const overview: Overview = {
  img: ThumbnailImage,
  TitleJP: "OTT: OTTOTTO",
  TitleEN: "Oops Robot",
  CaptionJP: `生物は安定した状態となるよう重力などの物理法則の上で常に均衡を保つようにしており、例えばひとたび不安定な姿勢になると、様々な反応や動作を即座に行うことで安定した姿勢に戻ろうとします。この作品では、こうした安定と不安定な姿勢を行き来する際の反応・動作の中から生命感や愛おしさを感じるふるまいを抽出し、人工物に適用しました。ふるまいにより生まれる、生き物らしさにご注目ください。`,
  CaptionEN: `Living creatures, tend to balance themselves against the surrounding force such as gravity, to maintain their stable position. For instance, if one became unstable due to external interference, it tries to recover its stable state by properly reacting with their limbs. In this project, we tried to extract the essence of bio-likeness and adorableness from the behavior oscillating its state between stable and unstable and implemented it to this artifact. You would be able to observe bio-likeness through the behavior of our prototype.`,
  CreditJP: `制作：金山正貴、宗像佑弥\n ディレクション：山中俊治`,
  CreditEN: `Designer: Masaki Kanayama, Yuya Munakata\n Director: Shunji Yamanaka`,
};

const contents: Content[] = [
  {
    img: [],
    video: [kana0101],
    TitleJP: `考察と発想`,
    TitleEN: `Insights and ideas`,
    MessageJP: `研究を進めるにあたり不安定なモノについて考察したことや、実現にあたり描いたアイデアスケッチです。`,
    MessageEN: `This is a study of instable things in our research, and idea sketches drawn to realize it.`,
  },
  {
    img: [],
    video: [kana0201],
    TitleJP: `ビデオプロトタイプ`,
    TitleEN: `Video prototype`,
    MessageJP: `アイデアスケッチを元に、形状と動き方を簡易的なアニメーションで検討しました。`,
    MessageEN: `Video prototype to consider the form and motion, based on idea sketches.`,
  },
  {
    img: [kana0301, kana0302, kana0303, kana0304],
    video: [],
    TitleJP: `プロトタイプ1`,
    TitleEN: `Prototype 1`,
    MessageJP: `地面に立った状態を想定した試作です。回転軸に支えがあるため不安定さがうまく引き出せませんでした。`,
    MessageEN: `First prototype representing "Standing state". We couldn’t express instability, because of the support acting as a rotation axle.`,
  },
  {
    img: [kana0401, kana0402, kana0403],
    video: [],
    TitleJP: `プロトタイプ2`,
    TitleEN: `Prototype 2`,
    MessageJP: `足元を玉乗りのような形状にすることで不安定さを強調し、腕の動きで頑張って元の状態に戻る様子を表現しました。`,
    MessageEN: `We built this prototype representing "Balancing-on-a ball" state. With its arm movement trying to balance itself, we have strongly expressed its instability.`,
  },
  {
    img: [],
    video: [kana0501],
    TitleJP: `強化学習の過程`,
    TitleEN: `Reinforcement learning process`,
    MessageJP: `腕の振り方を強化学習させることで、現実には起こりにくい不安定な動きの表現を試みました。`,
    MessageEN: `By reinforcement learning process how to swing its arms, we tried to make it perform physically impossible action.`,
  },
  {
    img: [kana0601, kana0602, kana0603],
    video: [],
    TitleJP: `プロトタイプ3`,
    TitleEN: `Prototype 3`,
    MessageJP: `強化学習の結果を反映する予定のプロトタイプです。頂部を指でつつくとそれに反応してリアクションできることを想定しています。`,
    MessageEN: `The latest prototype will be updated with the results of the reinforcement learning process. If you try poking its head, it will react.`,
  },
];

const KanaData: WorkData = {
  overview: overview,
  contents: contents,
  handwritingImage: HandWritingImage,
  OGPImage: OGPImage,
};

export default KanaData;
