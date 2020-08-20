import shinogu0101 from "../../images/works/Shinogu/02-01-01.png";
import shinogu0102 from "../../images/works/Shinogu/02-01-02.png";
import shinogu0201 from "../../images/works/Shinogu/02-02-01.png";
import shinogu0202 from "../../images/works/Shinogu/02-02-02.png";
import shinogu0203 from "../../images/works/Shinogu/02-02-03.png";
import shinogu0301 from "../../images/works/Shinogu/02-03-01.png";
import shinogu0302 from "../../images/works/Shinogu/02-03-02.png";
import shinogu0303 from "../../images/works/Shinogu/02-03-03.png";
import shinogu0304 from "../../images/works/Shinogu/02-03-04.png";
import shinogu0401 from "../../images/works/Shinogu/02-04-01.png";
import shinogu0402 from "../../images/works/Shinogu/02-04-02.png";
import shinogu0403 from "../../images/works/Shinogu/02-04-03.png";
import shinogu0404 from "../../images/works/Shinogu/02-04-04.png";
import shinogu0501 from "../../images/works/Shinogu/02-05-01.png";
import shinogu0601 from "../../images/works/Shinogu/02-06-01.png";
import shinogu0602 from "../../images/works/Shinogu/02-06-02.png";
import shinogu0603 from "../../images/works/Shinogu/02-06-03.png";
import shinogu0604 from "../../images/works/Shinogu/02-06-04.png";
//＠しのぐ：ファイル名順番通り直したよ

import HandWritingImage from "../../images/works/Shinogu/shinogood_handwriting.png";
import ThumbnailImage from "../../images/works/Shinogu/shinogu_small.png";
import OGPImage from "../../images/works/Shinogu/shinogu_ogp.png";
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
  TitleJP: "流点",
  TitleEN: "Ruten",
  CaptionJP: `水の動きに見入ってしまった経験はありますか？雄大にしぶきを上げ流れ落ちる滝も、繊細に静かに滴り落ちる水滴も、思わず鑑賞し続けたくなる魅力があります。そしてこの魅力は、水の持つ「不定形さ」によってもたらされるのではないかと考えました。この作品では、小さな塊となった色水が、ひとつひとつ、流路に沿って滑らかに進みます。それは規則的でありながらどこか不安定さを感じさせる、不思議に満ちた動きです。しなやかな水が生み出す優美さを是非ご覧ください。`,
  CaptionEN: `There is some indescribable aesthetic inflow of water, ranging from breathtaking, giant waterfall to a single, tiny waterdrop. We thought what makes it such beautiful is the amorphous nature of liquid water. In this prototype, a tiny droplet of colored water travels through the channel smoothly, and calmly. It is well-regulated motion yet looks unstable in some respects. Please enjoy the elegance created by the sophisticated flow of the water.`,
  CreditJP: `制作：山本 凌\n ディレクション：山中俊治\n 協力：木下晴之、三澤 徹`,
  CreditEN: `Designer: Shinogu Yamamoto\n Director: Shunji Yamanaka\n Collaborator: Haruyuki Kinoshita, Toru Misawa`,
};

const contents: content[] = [
  {
    img: [shinogu0101, shinogu0102],
    video: [],
    TitleJP: `プロトタイプ1`,
    TitleEN: `Prototype 1`,
    MessageJP: `初期に利用していたアクリル製流路と小型ポンプです。アクリル製流路は、厚み2mmの流路部が厚み5ｍｍの蓋と底に挟まれた三層構造になっています。いくつか問題点があったため、現在は使用しておりません。`,
    MessageEN: `Acrylic flow channel and mini pump for the first prototype. The prototype is made of 2mm thick acrylic board forming the channel part, sandwiched with 5mm thick board. Obsoleted version due to technical problems.`,
  },
  {
    img: [shinogu0201, shinogu0202, shinogu0203],
    video: [],
    TitleJP: `アクリル流路の検討1`,
    TitleEN: `Trial: Acrylic flow channel 1`,
    MessageJP: `水相と油相が向かい合わせに合流する形状になっており、安定したスラグ流の形成が行われませんでした。`,
    MessageEN: `This prototype has failed to generate a stable slug flow pattern. We assumed it results from the heads-on collision of each initial flow, due to the channel configuration.`,
  },
  {
    img: [shinogu0301, shinogu0302, shinogu0303, shinogu0304],
    video: [],
    TitleJP: `アクリル流路の検討2`,
    TitleEN: `Trial: Acrylic flow channel 2`,
    MessageJP: `流路の合流形状の変更により、比較的安定したスラグ流の形成が確認できました。`,
    MessageEN: `On the next prototype, we have modified the channel configuration. We were able to observe relatively stable slug flow formation than before.`,
  },
  {
    img: [shinogu0401, shinogu0402, shinogu0403, shinogu0404],
    video: [],
    TitleJP: `ガラス流路の検討`,
    TitleEN: `Glass flow channel`,
    MessageJP: `ガラスを用いるとアクリルよりも流体が付着しにくく、長時間安定してスラグ流が形成されることが確認できました。`,
    MessageEN: `We have replaced the material of the channel with glass. We confirmed that this can form stable slug flow for a longer period than those made of acrylics since glass is less likely to adhere to oil on its surface than acrylics.`,
  },
  {
    img: [shinogu0501],
    video: [],
    TitleJP: `使用する流体`,
    TitleEN: `2-phase fluid`,
    MessageJP: `水相には水を、油相には流動パラフィンを用いています。着色には絵具やキャンドル用染料を使用しました。`,
    MessageEN: `2-phase fluid for our work is composed of water and mineral oil. We have dyed each with watercolor and candle pigment.`,
  },
  {
    img: [shinogu0601, shinogu0602, shinogu0603, shinogu0604],
    video: [],
    TitleJP: `プロトタイプ2`,
    TitleEN: `Prototype 2`,
    MessageJP: `立体的な構造での見た目を検討するために作成したプロトタイプです。脈動のない安定的な流体の供給を実現するため、シリンジポンプを利用しています。`,
    MessageEN: `This prototype was created to study a three-dimensional flow path. In order to achieve a stable supply of fluid without pulsation, we used a syringe pump.`,
  },
  {
    img: [],
    video: ["https://www.youtube-nocookie.com/embed/ihsDc9Mm9is"],
    TitleJP: `プロトタイプ映像`,
    TitleEN: `Prototype Movie`,
    MessageJP: `本作品は、「スラグ流」という現象を用いた作品です。本映像は、表現検討のために行った実験の映像になります。`,
    MessageEN: `Slug flow phenomenon is a major concept of this protype. This is the video demonstration that contains a brief explanation of the phenomenon and rough video prototype to review the expression.`,
  },
];

const ShinoguData: workdata = {
  overview: overview,
  contents: contents,
  handwritingImage: HandWritingImage,
  OGPImage: OGPImage,
};

export default ShinoguData;
