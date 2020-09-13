import fumin0101 from "../../images/works/Fu-min/06-01-01.png";
import fumin0102 from "../../images/works/Fu-min/06-01-02.png";
import fumin0103 from "../../images/works/Fu-min/06-01-03.png";
import fumin0104 from "../../images/works/Fu-min/06-01-04.png";
import fumin0201 from "../../images/works/Fu-min/06-02-01.png";
import fumin0202 from "../../images/works/Fu-min/06-02-02.png";
import fumin0203 from "../../images/works/Fu-min/06-02-03.png";
import fumin0301 from "../../images/works/Fu-min/06-03-01.png";
import fumin0302 from "../../images/works/Fu-min/06-03-02.png";
import fumin0401 from "../../images/works/Fu-min/06-04-01.png";
import fumin0402 from "../../images/works/Fu-min/06-04-02.png";
import fumin0403 from "../../images/works/Fu-min/06-04-03.png";
import fumin0501 from "../../images/works/Fu-min/06-05-01.png";
import fumin0502 from "../../images/works/Fu-min/06-05-02.png";
import fumin0503 from "../../images/works/Fu-min/06-05-03.png";
import fumin0504 from "../../images/works/Fu-min/06-05-04.png";
import fumin0601 from "../../images/works/Fu-min/06-06-01.png";
import fumin0602 from "../../images/works/Fu-min/06-06-02.png";
import fumin0603 from "../../images/works/Fu-min/06-06-03.png";
import fumin0604 from "../../images/works/Fu-min/06-06-04.png";
import HandWritingImage from "../../images/works/Fu-min/fu-min_handwriting.png";
import OGPImage from "../../images/works/Fu-min/fu-min_ogp.png";
import ThumbnailImage from "../../images/works/Fu-min/fu-min_small.png";
import { Overview, Content, WorkData } from "../Types";

const overview: Overview = {
  img: ThumbnailImage,
  TitleJP: "ヴァイオリン用\n顎・肩当て",
  TitleEN: "Chin & Shoulder Rest",
  CaptionJP: `ヴァイオリンを弾くときには一般的に顎当てと肩当てが使われますが、長時間演奏していると首元にあざができ、痛みを生じることがあります。また顎当て・肩当ては、身体と楽器が唯一つながる部分であり、身体から出る曲への想いを楽器に十分に伝えることが求められます。この作品では、演奏時の痛みを減らすとともに心地よく演奏できることを目指しました。演奏者の身体を3Dスキャンし身体にフィットした形状を作成、そして曲げ木の弾性を利用することで顎・肩当ての美しい一体構造を実現しました。`,
  CaptionEN: `This project is motivated by realizing the soft, flexible expression of an object’s property without involving elastic or damping material. The movement of the structure created by a series of Yajirobei(Japanese traditional balance toy), consistently expresses soft-looking animation regardless of the mechanical property of its component. Please enjoy the mysterious, both soft and rigid behavior of our prototype.`,
  CreditJP: `制作：髙田ふみ\n ディレクション：安次富 隆、山中俊治`,
  CreditEN: `Designer: Fumi Takata\n Director: Takashi Ashitomi, Shunji Yamanaka`,
};

const contents: Content[] = [
  {
    img: [fumin0101, fumin0102, fumin0103, fumin0104],
    video: [],
    TitleJP: `従来の顎当てと肩当て`,
    TitleEN: `Traditional chinrest and shoulder rest`,
    MessageJP: `ヴァイオリンには、顎当て・肩当てというパーツが付いています。多くの演奏者が使用していますが、痛みを伴うあざや褥瘡、金属アレルギーを引き起こすことがあり、それらを解決したいと考えました。`,
    MessageEN: `Chinrest and shoulder rest are often mounted on the violin, in order to relieve pain while performing. However, since traditional ones are not fitted to individuals, it may still cause bruises or bedsores, and sometimes metallic allergy by its metal parts. Our motivation is to design a product to solve such problems.`,
  },
  {
    img: [fumin0201, fumin0202, fumin0203],
    video: [],
    TitleJP: `形の試作`,
    TitleEN: `Trial: shape`,
    MessageJP: `石膏で顎の型を取り、スタイロフォームとABSを削りながら、痛みを生じない美しい形状を模索しました。`,
    MessageEN: `By plastering chin and sculpting styrofoam/ABS, We tried to figure out an ergonomic, yet aesthetic form of the chinrest.`,
  },
  {
    img: [fumin0301, fumin0302],
    video: [],
    TitleJP: `構造の試作1`,
    TitleEN: `Trial: structure 1`,
    MessageJP: `構造を工夫して弾性素材を3Dプリントすることで、顎当ての痛みを減らす形状を模索しました。`,
    MessageEN: `We also tried to apply stress-relieving soft structure to the chinrest, formed by a 3D printed elastic material.`,
  },
  {
    img: [fumin0401, fumin0402, fumin0403],
    video: [],
    TitleJP: `構造の試作2`,
    TitleEN: `Trial: structure 1`,
    MessageJP: `構造を工夫して弾性素材を3Dプリントすることで、顎当ての痛みを減らす形状を模索しました。`,
    MessageEN: `We also tried to apply stress-relieving soft structure to the chinrest, formed by a 3D printed elastic material.`,
  },
  {
    img: [fumin0501, fumin0502, fumin0503, fumin0504],
    video: [],
    TitleJP: `ジョイントパーツの試作`,
    TitleEN: `Joint parts`,
    MessageJP: `ヴァイオリンと身体の距離が離れ、楽器を構えた際に不安定になってしまいました。改善のため楽器と顎・肩当てを繋ぐジョイントパーツを試作し、フック型のジョイントを用いることで安定させることができました。`,
    MessageEN: `The latest version of our chin and shoulder rest had a problem, that it separates our body from the violin too much, which causes instability while performing. We tried to solve this problem by redesigning a joint part that fixes the chin and shoulder rest to the violin. Among our prototypes, hook type was the most stable solution.`,
  },
  {
    img: [fumin0601, fumin0602, fumin0603, fumin0604],
    video: [],
    TitleJP: `パッケージ`,
    TitleEN: `Package`,
    MessageJP: `顎・肩当てを自分で微調整したいという演奏者の意見から、自由に切り貼りし、緩衝材や滑り止めとして使用できるラバーのキットを制作。取り扱い説明書も同封し、身体の変化に合わせた微調整を可能にしました。`,
    MessageEN: `There were requests from our targeting customer, that they would like the chin and shoulder rest to be adjustable. To answer those, we included the rubber kit which can be cut and pasted easily, to perform as a cushion and non-slip tape. We also included the instruction manual to assist users to fit their chin and shoulder rest to themselves.`,
  },
];

const FuminData: WorkData = {
  overview: overview,
  contents: contents,
  handwritingImage: HandWritingImage,
  OGPImage: OGPImage,
};

export default FuminData;
