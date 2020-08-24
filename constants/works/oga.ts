import oga0101 from "../../images/works/Oga/01-01-01.png";
import oga0102 from "../../images/works/Oga/01-01-02.png";
import oga0103 from "../../images/works/Oga/01-01-03.png";
import oga0104 from "../../images/works/Oga/01-01-04.png";
import oga0201 from "../../images/works/Oga/01-02-01.png";
import oga0202 from "../../images/works/Oga/01-02-02.png";
import oga0203 from "../../images/works/Oga/01-02-03.png";
import oga0204 from "../../images/works/Oga/01-02-04.png";
import oga0301 from "../../images/works/Oga/01-03-01.png";
import oga0302 from "../../images/works/Oga/01-03-02.png";
import oga0303 from "../../images/works/Oga/01-03-03.png";
import oga0304 from "../../images/works/Oga/01-03-04.png";
import oga0305 from "../../images/works/Oga/01-03-05.png";
import oga0306 from "../../images/works/Oga/01-03-06.png";
import oga0307 from "../../images/works/Oga/01-03-07.png";
import oga0401 from "../../images/works/Oga/01-04-01.png";
import oga0402 from "../../images/works/Oga/01-04-02.png";
import oga0403 from "../../images/works/Oga/01-04-03.png";

import OGPImage from "../../images/works/Oga/oga_ogp.png";
import HandWritingImage from "../../images/works/Oga/oga_handwriting.png";
import ThumbnailImage from "../../images/works/Oga/oga_small.png";

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
  TitleEN: "Scalable hand",
  CaptionJP: `人にはそれぞれ、少しずつ違う手の大きさがあります。しかし、従来の義手やロボットハンドは大きさが段階的で、必ずしもあなたの欲しい手の大きさではないかもしれません。そこで私は、細かなサイズ調整を簡単に行える『Scalable hand』を制作しました。本来は硬いナイロン樹脂から形状を工夫することで、シリコンのように柔らかい指先・バネのような反発性のある関節を再現。これらの部品を3Dプリンタを用いて一度に造形することで組み立てにネジを使う必要がなく、3Dモデルを拡大・縮小するだけでサイズ調整が可能となります。`,
  CaptionEN: `There are many sizes of hand depending on people. However, the size of current humanoid hands are still limited and may not be a perfect size for each individual.  This scalable hand is a non-assembled robot hand that is created using PBF (Powder Bed Fusion) a type of 3D-printer. The changes of the size can be made limitlessly.  Nylon, the material used here is normally stiff. But, by devising its geometric shape, it can be very soft and supple. `,
  CreditJP: `制作：小笠原佑樹\n ディレクション：山中俊治`,
  CreditEN: `Designer: Yuki Ogasawara\n Director: Shunji Yamanaka`,
};

const contents: content[] = [
  {
    img: [oga0101, oga0102, oga0103, oga0104],
    video: [],
    TitleJP: `一体成型関節の試作`,
    TitleEN: `A prototype of unibody joint`,
    MessageJP: `最初期に試作した回転一自由度の一体成型関節です。内部のゼンマイばねの厚みを少しずつ変えています。`,
    MessageEN: `The first prototype, multiple unibody joints with a single degree of freedom. Each of them has a spiral spring with various thicknesses.`,
  },
  {
    img: [oga0201, oga0202, oga0203, oga0204],
    video: [],
    TitleJP: ``,
    TitleEN: `Scalable hand (Ver.1.0)`,
    MessageJP: `二指ハンドの構造として一般的な四節リンク構造の内部にゼンマイばねを組み込みました。`,
    MessageEN: `A model with the 4-link mechanism, typical for the 2-fingered manipulator, along with spiral spring for joint elasticity.`,
  },
  {
    img: [oga0301, oga0302, oga0303, oga0304, oga0305, oga0306, oga0307],
    video: [
      "https://www.youtube-nocookie.com/embed/xEYkd0KqGNo",
      "https://www.youtube-nocookie.com/embed/HkHoCw7BWyw",
      "https://www.youtube-nocookie.com/embed/Lhi__BrFwqk",
      "https://www.youtube-nocookie.com/embed/zCjqANIKhXE",
    ],
    TitleJP: ``,
    TitleEN: `Scalable hand (Ver.2.0)`,
    MessageJP: `取手を引くだけで物体を包み込むように掴んでくれる構造を採用した初期モデルです。指の腹に弾性構造を付与することで、柔らかい指先を再現しました。このモデルでは、輪ゴムで指関節の復元力を与えています。`,
    MessageEN: `The model with the mechanism, which can grab the object gently with a single pull of the lever. Fingertip with the soft surface has been achieved, by applying the compliant structure on it. In this model, rubber bands are used to function as the antagonist.`,
  },
  {
    img: [oga0401, oga0402, oga0403],
    video: [],
    TitleJP: ``,
    TitleEN: `Scalable hand (Ver.2.1)`,
    MessageJP: `前モデルにてゴムで与えていた復元力をゼンマイばねで代替。取手部分にもコイルばねを追加することで指が常に開くようになり、能動義手など牽引方向にしか力をかけられないものにも応用可能になりました。`,
    MessageEN: `The rubber band joint part is replaced by a spiral spring joint mechanism. For the benefit of spring added around the lever acting as an antagonist, it could be applied to active prosthesis hand, which only provides a tensile force for actuation.`,
  },
];

const OgaData: workdata = {
  overview: overview,
  contents: contents,
  handwritingImage: HandWritingImage,
  OGPImage: OGPImage,
};

export default OgaData;
