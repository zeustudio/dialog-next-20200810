interface Overview {
  img: string;
  TitleJP: string;
  TitleEN: string;
  CaptionJP: string;
  CaptionEN: string;
  CreditJP: string;
  CreditEN: string;
}

interface Content {
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
