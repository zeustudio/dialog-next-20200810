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
`;
const Thumb = styled.img`
  width: 100%;
`;
const CaptionWrapper = styled.div`
  margin: 5%;
  font-size: 2rem;
  word-wrap: break-word;
  line-height: 2.5rem;
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
