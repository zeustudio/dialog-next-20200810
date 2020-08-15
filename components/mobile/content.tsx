import React from "react";
import styled from "@emotion/styled";
import Carousel from "./carousel";
interface content {
  img: string[];
  video: string[];
  TitleJP: string;
  TitleEN: string;
  MessageJP: string;
  MessageEN: string;
}
interface Props {
  content: content;
}

const Content: React.FC<Props> = ({ content }) => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (window.innerWidth > 500) {
      setWidth(window.innerWidth * 0.8);
    } else {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <Wrapper>
      <ImgWrapper>
        <Carousel imgs={content.img} width={width} height={(width * 2) / 3} />
      </ImgWrapper>
      <CaptionWrapper>
        <TitleJP>{content.TitleJP}</TitleJP>
        <TitleEN>-{content.TitleEN}-</TitleEN>
        <MessageJP>{content.MessageJP}</MessageJP>
      </CaptionWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  padding-top: 40px;
  @media screen and (min-height: 813px) {
    justify-content: space-evenly;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
`;

const CaptionWrapper = styled.div`
  font-size: 2rem;
  word-wrap: break-word;
  line-height: 2.5rem;
  margin-bottom: ${15 + 40}px;
  margin-top: 20px;
  overflow: scroll;
  width: 315px;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
const TitleJP = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 4rem;
  text-align: center;
`;
const TitleEN = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 4rem;
  text-align: center;
  margin-bottom: 30px;
`;
const MessageJP = styled.div`
  font-size: 1.6rem;
  line-height: 3.2rem;
  font-weight: bold;
`;
export default Content;

/*<ImgWrapper id={globalID}>
            {content.img.map((img, index) => {
              return <Img key={uuid()} className={`${index}`} src={img} />;
            })}
          </ImgWrapper>
          
          const ImgWrapper2 = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: ${(100 * 2) / 3}%;
`;
const ImgWrapper3 = styled.div`
  width: 100%;
  @media screen and (min-width: 500px) {
    width: 80%;
  }const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
`;
`;*/
