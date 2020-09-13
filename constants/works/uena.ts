import uena0301 from "../../images/works/Uena/04-03-01.png";
import uena0302 from "../../images/works/Uena/04-03-02.png";

import HandWritingImage from "../../images/works/Uena/uena_handwriting.png";
import OGPImage from "../../images/works/Uena/uena_ogp.png";
import ThumbnailImage from "../../images/works/Uena/uena_small.png";
import { Overview, Content, WorkData } from "../Types";

const overview: Overview = {
  img: ThumbnailImage,
  TitleJP: "ゆらゆら",
  TitleEN: "solid swing",
  CaptionJP: `柔らかい素材やダンパーを用いずに柔らかさを表現することを試みる中で、この作品は生まれました。動力を使わず、ヤジロベエが複数連なった構造だけで生み出されるふるまいは、モーメントが釣り合っていれば、どのような硬さや比重の素材でも同じ柔らかい動きを示します。 硬いけど柔らかい、そんな不思議なふるまいをご体験ください。`,
  CaptionEN: `This project is motivated by realizing the soft, flexible expression of an object’s property without involving elastic or damping material. The movement of the structure created by a series of Yajirobei(Japanese traditional balance toy), consistently expresses soft-looking animation regardless of the mechanical property of its component. Please enjoy the mysterious, both soft and rigid behavior of our prototype.`,
  CreditJP: `制作：上岡直樹\n ディレクション：山中俊治`,
  CreditEN: `Designer: Naoki Ueoka\n Director: Shunji Yamanaka`,
};

const contents: Content[] = [
  {
    img: [],
    video: ["https://www.youtube-nocookie.com/embed/uV4uMk2rvJg"],
    TitleJP: `着地動作に着目`,
    TitleEN: `Landing process`,
    MessageJP: `受動的かつしなやかに力を受け流す着地は、生き物らしさがよく現れている挙動であると考えました。`,
    MessageEN: `We thought that the landing process which distributes the shock smoothly and passively well represents the bio-likeness.`,
  },
  {
    img: [],
    video: [
      "https://www.youtube-nocookie.com/embed/KQlnPpaEH1c",
      "https://www.youtube-nocookie.com/embed/VYwwWftebRo",
      "https://www.youtube-nocookie.com/embed/o7o0t-S7_MA",
    ],
    TitleJP: `着地する足の構造`,
    TitleEN: `Leg structure`,
    MessageJP: `着地時の屈伸運動のみで生き物らしさを表現するため、その他の部分では生き物らしさを除きました。最も安定する三本足かつ一ヶ所のダンパーのみで全体の屈伸を制御できる構造です。`,
    MessageEN: `To express its bio-likeness with only its leg-bending motion during its landing process, we intended to make the other part of our prototype to be the opposite of it. As a result, we came up with this prototype, which has only three legs and a single damping component controlling the entire landing process.`,
  },
  {
    img: [uena0301, uena0302],
    video: [
      "https://www.youtube-nocookie.com/embed/TL-H9QozGec",
      "https://www.youtube-nocookie.com/embed/2TuRATVRZc4",
    ],
    TitleJP: `ゆらゆら`,
    TitleEN: `solid swing`,
    MessageJP: `着地というしなやかな動きを、生物の模倣とは異なるアプローチで再現しようとしました。素材の柔らかさを用いず、新しい機構のダンパーを試作していた過程で生まれたものがこの機構になります。`,
    MessageEN: `We tried to recreate the flexibility of the landing motion with a different approach than imitating living organisms. This mechanism was born out of the process of prototyping a new type of damper without using the softness of the material.`,
  },
];

const UenaData: WorkData = {
  overview: overview,
  contents: contents,
  handwritingImage: HandWritingImage,
  OGPImage: OGPImage,
};

export default UenaData;
