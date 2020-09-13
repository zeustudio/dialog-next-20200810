import heejun0101 from "../../images/works/Heejun/09-01-01.png";
import heejun0102 from "../../images/works/Heejun/09-01-02.png";
import heejun0301 from "../../images/works/Heejun/09-03-01.png";
import heejun0401 from "../../images/works/Heejun/09-04-01.png";
import heejun0402 from "../../images/works/Heejun/09-04-02.png";
import heejun0501 from "../../images/works/Heejun/09-05-01.png";
import heejun0502 from "../../images/works/Heejun/09-05-02.png";
import heejun0601 from "../../images/works/Heejun/09-06-01.png";
import heejun0701 from "../../images/works/Heejun/09-07-01.png";
import heejun0702 from "../../images/works/Heejun/09-07-02.png";
import heejun0703 from "../../images/works/Heejun/09-07-03.png";

import HandWritingImage from "../../images/works/Heejun/heejun_handwriting.png";
import OGPImage from "../../images/works/Heejun/heejun_ogp.png";
import ThumbnailImage from "../../images/works/Heejun/heejun_small.png";
import { Overview, Content, WorkData } from "../Types";

const overview: Overview = {
  img: ThumbnailImage,
  TitleJP: "チタンの家具",
  TitleEN: "Titanium Furniture",
  CaptionJP: `チタンは、軽くて、強くて、錆びない、とても優れた金属です。意外かもしれませんが資源も豊富で、工場の配管など、産業分野では広く利用されています。日用品であまり目にしないのは、精練・加工が難しく、コストが掛かってしまうから。もしチタンをアルミのように安く使えるようになれば、世界中の日用品の多くはチタン製になるかもしれません。この作品では、配管用のチタンパイプの端材を材料に、グラフェンの転移機構を参考にしたアルゴリズムと3Dプリンタによるジョイント設計によって、美しく、作りやすいチタン製品を実現しました。`,
  CaptionEN: `This is the project to design aesthetic furniture using titanium. Titanium is a strong, lightweight and non-corrosive material, and it is often considered to be expensive. However, unlike rare earth, titanium ore is not rare on our planet. What makes this material very expensive is actually its cost of processing. Our approach is to design with cheap titanium pipe, which is the leftover from the manufacturing process of titanium heat exchanger. By using the algorithmic design method and 3D printed joints, we achieved low-cost, yet sophisticated design.`,
  CreditJP: `制作：イ ヒジュン\n ディレクション：山中俊治\n 協力：東京大学 生産技術研究所 岡部研究室`,
  CreditEN: `Designer: Heejun Lee\n Director: Shunji Yamanaka\n Collaborator: Okabe Lab,\n Institute of Industrial Science, the University of Tokyo`,
};

const contents: Content[] = [
  {
    img: [heejun0101, heejun0102],
    video: [],
    TitleJP: `チタンパイプ`,
    TitleEN: `Titanium pipe`,
    MessageJP: `大型熱交換器などに使用される純チタンパイプです。軽く丈夫な素材ですが、生産費用が高いことが欠点です。本作品では、産業現場で捨てられるチタンパイプの端材を用いて、美しい家具を制作します。`,
    MessageEN: `Titanium pipe, manufactured for high-temperature fluid transportation. Though it is lightweight and durable, its manufacturing cost is expensive. In this project, we reduced our project's building cost, by gathering cheap scrap titanium pipes from factories, rather than purchasing a new one.`,
  },
  {
    img: [],
    video: [],
    TitleJP: `発想: 不規則な形`,
    TitleEN: `Idea: Amorphous form`,
    MessageJP: `不規則な形状は有機的な美しさを持つことがあります。グラフェンの転位機構に注目しアルゴリズムとして実装することで、不規則形状の自動生成を行いました。`,
    MessageEN: `Sometimes, irregular geometry would possess the beauty of organic form. With the benefit of advanced computer technology, designing these forms became easier than before. In this project, we have generated such form automatically, by mimicking the Stone-Wales defect mechanism of graphene.`,
  },
  {
    img: [heejun0301],
    video: [],
    TitleJP: ``,
    TitleEN: `Stone-Wales defect`,
    MessageJP: `Stone-Wales欠陥はπ結合をもつ炭素原子の格子で、結合の順番が入れ替わり生成されます。このメカニズムを模倣すると、不規則な泡状の模様を等しい長さの線分で構成することができます。`,
    MessageEN: `Stone-Wales defect occurs in the lattice of carbon atoms with the π-bond network, by interchanging its bonding topology. By mimicking this mechanism, we were able to achieve an amorphous bubble-like form, with sole equilateral lines.`,
  },
  {
    img: [heejun0401, heejun0402],
    video: [],
    TitleJP: `ジョイントの制作`,
    TitleEN: `Manufacturing joints`,
    MessageJP: `アルゴリズムにより生成されたパターンを、Grasshopper™というデザイン支援ツールに流し込み、ジョイントの形状データを自動生成しました。このジョイントを3Dプリンタを用いることで造形します。`,
    MessageEN: `By using Grasshopper™, the computer-aided design application, we were able to generate 3D geometry of joints automatically, based on the generated pattern. Next, we have additively manufactured them with the 3D printer.`,
  },
  {
    img: [heejun0501, heejun0502],
    video: [],
    TitleJP: `等辺図形の利点`,
    TitleEN: `Benefits of equilateral form`,
    MessageJP: `本作品の天板は、すべて同じ長さのチタンパイプで構成されています。チタンパイプの長さを一様に変更すれば、全く同じジョイントを用いて、異なる大きさの天板を組み立てることができます。`,
    MessageEN: `The top board of the table is made up of equilateral pipes. By doing so, we can easily scale its size with another equilateral pipe and the exact same set of joints.`,
  },
  {
    img: [heejun0601],
    video: [],
    TitleJP: `張力構造`,
    TitleEN: `Tensegrity structure`,
    MessageJP: `一般的に長いものは引っ張る力に対して強い性質があり、構造を工夫すると、細いワイヤーでも頑丈にすることができます。このように浮遊するように見える構造が成り立っているのも、張力構造の強さによるものです。`,
    MessageEN: `In general, a long and thin object is strongest against the tensile force along its length, rather than bending or compressing forces. By designing the structure to distribute its load as tensile stress, we can build a rigid structure even with thin wires. The "floating" structure of this prototype is also due to the benefit of it.`,
  },
  {
    img: [heejun0701, heejun0702, heejun0703],
    video: [],
    TitleJP: `チタンのテーブル`,
    TitleEN: `Titanium table`,
    MessageJP: `これらのアイデアを組み合わせて、テーブルを制作しました。不規則なパターンで構成されている天板と、浮遊するような張力構造のフォルムにご注目ください。`,
    MessageEN: `By integrating these ideas, this table was built. Please enjoy the organic construction of the upper board and floating-like outfit of the tensegrity structure.`,
  },
];

const HeejunData: WorkData = {
  overview: overview,
  contents: contents,
  handwritingImage: HandWritingImage,
  OGPImage: OGPImage,
};

export default HeejunData;
