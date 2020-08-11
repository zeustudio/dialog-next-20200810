import Image1_1 from "../../images/works/Oto/08-01-01.png";
import Image1_2 from "../../images/works/Oto/08-01-02.png";
import HandWritingImage from "../../images/works/Oto/oto_handwriting.png";
import OGPImage from "../../images/works/Oto/oto_ogp.png";
import ThumbnailImage from "../../images/works/Oto/oto_small.png";

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
  TitleJP: "道具の暇",
  TitleEN: "Tool's Leisure Time",
  CaptionJP: `人に使用されていない間には何も機能を果たしていない人工物が多く存在します。そんな人工物に生物らしい動きを与えることで注意や愛着を増やすことを目標にした”道具の暇”プロジェクトの二作品です。`,
  CaptionEN: `There are many artifacts that perform no function while not being used by humans. These two prototypes are the "Tool's Leisure Time" project that aims to increase attention and attachment by giving such artifacts a bio-like movement.`,
  CreditJP: `制作：川又 音\n ディレクション：山中俊治\n 制作協力：上岡直樹、長谷川彰宏、秋元海人、柳沢竜三`,
  CreditEN: `Designer: Oto Kawamata\n Director: Shunji Yamanaka\n Assistant: Naoki Ueoka, Akihiro Hasegawa,\n Kaito Akimoto, Ryuzo Yanagisawa`,
};

const contents: content[] = [
  {
    img: [Image1_1, Image1_2],
    video: [],
    TitleJP: `『道具の暇』のストーリー`,
    TitleEN: `Story`,
    MessageJP: `人に使用されていない間には何も機能を果たしていない人工物が多く存在します。そんな人工物に生物らしい動きを与えることで注意や愛着を増やすことを目標にしました。`,
    MessageEN: `There are many artifacts that perform no function while not being used by humans. The "Tool's Leisure Time" project aims to increase attention and attachment by giving such artifacts a bio-like movement.`,
  },
  {
    img: [],
    video: [
      "https://www.youtube.com/embed/Uli5_Hvqs5A",
      "https://youtube.com/embed/bv-YqLtDfIw",
    ],
    TitleJP: ``,
    TitleEN: `Amemism`,
    MessageJP: `傘の「暇」に注目し、傘に命を与えました。普段何気なく使っている傘が人や他の傘と交流を始めた時、あなたは何を感じるでしょうか。`,
    MessageEN: `We focused on the "leisure" of the umbrella and gave life to it. What do you feel when your casual umbrella starts interacting with people and other umbrellas?`,
  },
  {
    img: [],
    video: ["https://www.youtube.com/embed/RInMSV2yumM"],
    TitleJP: `積読に怒る本`,
    TitleEN: `Furious to be stacked`,
    MessageJP: `本の「暇」である積ん読に抵抗して、上に本を置かれると自らが開くことで落としてしまいます。本が利便性や効率から解放されて、人や他の本との交流を始めた時にあなたは何を感じるでしょうか。`,
    MessageEN: `The book resists "loading", which is the "leisure" of books, and when books are placed on it, it drops them by opening itself. What do you feel when a book is released from convenience or efficiency and begins to interact with people and other books?`,
  },
];

const OtoData: workdata = {
  overview: overview,
  contents: contents,
  handwritingImage: HandWritingImage,
  OGPImage: OGPImage,
};

export default OtoData;
