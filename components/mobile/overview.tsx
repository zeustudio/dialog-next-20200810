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
}
const Overview: React.FC<Props> = ({ author }) => {
  const overview: overview = WorkData.get(author).overview;
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
          <TitleEN>-{overview.TitleEN}-</TitleEN>
          <CaptionJP>{overview.CaptionJP}</CaptionJP>
          <CreditJP>{overview.CreditJP}</CreditJP>
        </CaptionWrapper>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  @media screen and (min-height: 813px) {
    justify-content: space-evenly;
  }
`;
const Thumb = styled.img`
  width: 100%;
  margin-top: 40px;
  @media screen and (min-width: 376px) {
    width: 60%;
  }
`;

const CaptionWrapper = styled.div`
  margin: 15px 15px 10px 15px;
  word-wrap: break-word;
  margin-bottom: ${15 + 40}px;
  overflow: scroll;
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
`;
const CaptionJP = styled.div`
  font-size: 1.6rem;
  line-height: 3.2rem;
  font-weight: bold;
`;
const CreditJP = styled.div`
  font-size: 1rem;
  line-height: 2rem;
  margin-top: 10px;
  white-space: pre-line;
`;
export default Overview;
