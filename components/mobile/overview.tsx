import React from "react";
import styled from "@emotion/styled";
import WorkData from "../../constants/workdata";
interface overview {
  img: string;
  TitleJP: string;
  TitleEN: string;
  CaptionJP: string;
  CaptionEN: string;
  CreditJP: string;
  CreditEN: string;
}
interface Props {
  author: string;
  isEnglish: boolean;
}
const Overview: React.FC<Props> = ({ author, isEnglish }) => {
  const overview: overview = WorkData.get(author).overview;
  if (isEnglish === false) {
    if (overview.TitleJP === "") {
      return (
        <Wrapper>
          <Thumb src={overview.img} />
          <CaptionWrapper>
            <TitleEN>{overview.TitleEN}</TitleEN>
            <CaptionJP>{overview.CaptionJP}</CaptionJP>
            <CreditJP>{overview.CreditJP}</CreditJP>
          </CaptionWrapper>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Thumb src={overview.img} />
          <CaptionWrapper>
            <TitleJP>{overview.TitleJP}</TitleJP>
            <CaptionJP>{overview.CaptionJP}</CaptionJP>
            <CreditJP>{overview.CreditJP}</CreditJP>
          </CaptionWrapper>
        </Wrapper>
      );
    }
  } else {
    if (overview.TitleJP === "") {
      return (
        <Wrapper>
          <Thumb src={overview.img} />
          <CaptionWrapper>
            <TitleEN>{overview.TitleEN}</TitleEN>
            <CaptionJP>{overview.CaptionEN}</CaptionJP>
            <CreditJP>{overview.CreditEN}</CreditJP>
          </CaptionWrapper>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Thumb src={overview.img} />
          <CaptionWrapper>
            <TitleJP>{overview.TitleEN}</TitleJP>
            <CaptionJP>{overview.CaptionEN}</CaptionJP>
            <CreditJP>{overview.CreditEN}</CreditJP>
          </CaptionWrapper>
        </Wrapper>
      );
    }
  }
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  @media screen and (min-height: 700px) {
    justify-content: center;
  }
`;
const Thumb = styled.img`
  width: 80%;
  margin-top: 40px;
  @media screen and (min-width: 376px) {
    width: 60%;
    margin-bottom: 10%;
  }
`;

const CaptionWrapper = styled.div`
  margin: 0px 15px 0px 15px;
  word-wrap: break-word;
  margin-bottom: 40px;
  overflow: scroll;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
const TitleJP = styled.div`
  margin-top: 10px;
  font-size: 2rem;
  font-weight: bold;
  line-height: 4rem;
  text-align: center;
`;
const TitleEN = styled.div`
  font-size: 2rem;
  font-weight: bold;
  line-height: 4rem;
  text-align: center;
`;
const CaptionJP = styled.div`
  font-size: 1.2rem;
  line-height: 2.4rem;
  font-weight: bold;
  text-indent: 1em;
`;
const CreditJP = styled.div`
  font-size: 1rem;
  line-height: 2rem;
  margin-top: 10px;
  white-space: pre-line;
`;
export default Overview;
