import takuro0101 from "../../images/works/Takuro/07-01-01.png";
import takuro0103 from "../../images/works/Takuro/07-01-03.png";
import takuro0104 from "../../images/works/Takuro/07-01-04.png";
import takuro0201 from "../../images/works/Takuro/07-02-01.png";
import takuro0202 from "../../images/works/Takuro/07-02-02.png";
import takuro0301 from "../../images/works/Takuro/07-03-01.png";
import takuro0302 from "../../images/works/Takuro/07-03-02.png";
import takuro0303 from "../../images/works/Takuro/07-03-03.png";
import takuro0304 from "../../images/works/Takuro/07-03-04.png";
import takuro0305 from "../../images/works/Takuro/07-03-05.png";
import takuro0501 from "../../images/works/Takuro/07-05-01.png";
import takuro0502 from "../../images/works/Takuro/07-05-02.png";
import takuro0503 from "../../images/works/Takuro/07-05-03.png";

import HandWritingImage from "../../images/works/Takuro/takuro_handwriting.png";
import OGPImage from "../../images/works/Takuro/takuro_ogp.png";
import ThumbnailImage from "../../images/works/Takuro/takuro_small.png";
import { Overview, Content, WorkData } from "../Types";

const overview: Overview = {
  img: ThumbnailImage,
  TitleJP: "",
  TitleEN: "Rami S",
  CaptionJP: `『Rami』は3Dプリンティングならではの立体構造となめらかな曲面を持つ、陸上競技用下腿義足です。機能的で美しいスポーツ用義足を、多くの人に届けるシステムを作るために研究開発しています。最初のマイルストーンとして、パラ短距離・走り幅跳び選手である高桑早生さんのための義足『Rami』を開発。そしてプロジェクトの次の段階としてユーザー数の増加と競技種目の拡大を目指し、走り高跳び選手のための義足『Rami S』を開発しました。`,
  CaptionEN: `"Rami" is a 3D printed below-knee prosthesis designed for track-and-field, which has 3D-print exclusive, smooth and curvaceous geometry. Our goal in this project is to design a system to deliver beautiful and properly engineered sport-purposed prosthesis to more people in need. As a first milestone, we designed a prosthesis for Saki Takakuwa: former Japanese national player for Rio and London Paralympics. And by using design scheme achieved by it, we were able to develop a prosthesis "Rami S" for high jump. It is one small leap for the mass-customization of beautiful prosthesis.`,
  CreditJP: `制作：山中俊治、阪本 真、杉本拓郎\n 協力：公益財団法人鉄道弘済会義肢装具サポートセンター、鈴木 徹、\n 株式会社今仙技術研究所、ミズノ株式会社`,
  CreditEN: `Designer: Shunji Yamanaka, Shin Sakamoto, Takuro Sugimoto\n Collaborator: Tetsudo Kousaikai Foundation Prosthetic and Orthotic Care Center, Toru Suzuki, Imasen Engineering Corporation, Mizuno Corporation`,
};

const contents: Content[] = [
  {
    img: [takuro0101, takuro0103, takuro0104],
    video: [],
    TitleJP: `従来の陸上競技用義足`,
    TitleEN: `Conventional socket for track-and-field`,
    MessageJP: `従来の義足ソケットは義肢装具士の手仕事によって制作されており、大量生産が困難であることや、義足ソケットに切断部の形が如実に現れてしまい、痛々しさを感じさせてしまうなどの課題がありました。`,
    MessageEN: `Conventional prosthetic foot sockets were made by hand by prostheticists, and they were difficult to mass-produce, and the shape of the amputation on the sockets made them seem painful to look at.`,
  },
  {
    img: [takuro0201, takuro0202],
    video: [],
    TitleJP: `チェックソケット`,
    TitleEN: `Checking socket`,
    MessageJP: `3Dプリンタは従来の製造技術に比べてオーダーメイド品を作りやすい反面、造形時の形状誤差が大きい欠点があります。そのため、設計初期に義足ソケットの内面の適合を確かめるためのチェックソケットを制作しました。`,
    MessageEN: `Since the geometric error of the 3D printer is usually more significant than traditional manufacturing technologies, we made this socket beforehand to test if the error is tolerable.`,
  },
  {
    img: [takuro0301, takuro0302, takuro0303, takuro0304, takuro0305],
    video: [],
    TitleJP: `重心位置の設計`,
    TitleEN: `Design of the socket's center of mass`,
    MessageJP: `走り高跳びにおける義足ソケットの影響として重心位置に注目し、その評価を行うための義足ソケットを設計しました。おもりを付け替えることで、重心位置を任意の位置に変更できます。`,
    MessageEN: `We focused on the effect of the weight distribution of prosthesis on the high jump and designed this socket to examine the effect quantitatively. By changing the weights, the position of the center of gravity can be changed to any position.`,
  },
  {
    img: [],
    video: ["https://www.youtube-nocookie.com/embed/2c_vL9pehdA"],
    TitleJP: `荷重負荷試験の様子`,
    TitleEN: `Load test`,
    MessageJP: `被験者の安全確保のため、走行試験に入る前に義足ソケットの強度試験を行いました。走行時の負荷を想定した荷重を義足ソケットに加え、その変形量および耐荷重を測定しました。`,
    MessageEN: `To guarantee the safety of the prosthesis before the field test, we have conducted the load test and examined the deformation and maximum load capability of it.`,
  },
  {
    img: [takuro0501, takuro0502, takuro0503],
    video: [],
    TitleJP: ``,
    TitleEN: `Rami S`,
    MessageJP: `走り高跳び用下腿義足 Rami S ver.1。現在、走行試験に移行し、選手に合わせた調整を行っています。`,
    MessageEN: `Rami S, a below-knee prosthesis for the high jump. We are planning to design the next model, based on the opinions gathered from the athletes.`,
  },
];

const TakuroData: WorkData = {
  overview: overview,
  contents: contents,
  handwritingImage: HandWritingImage,
  OGPImage: OGPImage,
};

export default TakuroData;
