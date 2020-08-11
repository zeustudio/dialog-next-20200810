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
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-height: 813px) {
    justify-content: space-evenly;
  }
`;
const Thumb = styled.img`
  width: 100%;
  @media screen and (min-width: 375px) {
    width: 375px;
  }
`;
const CaptionWrapper = styled.div`
  margin: 5%;
  font-size: 2rem;
  word-wrap: break-word;
  line-height: 2.5rem;
  overflow: scroll;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;
const TitleJP = styled.div``;
const TitleEN = styled.div``;
const CaptionJP = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`;
const CreditJP = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 20px;
  white-space: pre-line;
`;
export default Overview;
