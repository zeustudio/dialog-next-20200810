export interface Overview {
  //作品タイトルページデータ
  img: string; //サムネ画像
  TitleJP: string; //タイトル
  TitleEN: string;
  CaptionJP: string; //キャプション
  CaptionEN: string;
  CreditJP: string; //クレジット
  CreditEN: string;
}

export interface Content {
  img: string[];
  video: string[];
  TitleJP: string;
  TitleEN: string;
  MessageJP: string;
  MessageEN: string;
}
export interface WorkData {
  overview: Overview;
  contents: Content[];
  handwritingImage: string;
  OGPImage: string;
}

export type Author =
  | "fumin"
  | "hazuki"
  | "heejun"
  | "kana"
  | "oga"
  | "oto"
  | "shinogu"
  | "takuro"
  | "uena";
