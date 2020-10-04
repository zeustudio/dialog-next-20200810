import styled from "@emotion/styled";
import { WorkMain } from "../WorkMain";

import OgaData from "../../../constants/works/oga";

const OgaDesktop = () => {
  return (
    <Wrapper>
      <WorkMain AuthorData={OgaData} author={"oga"} />
    </Wrapper>
  );
};

export default OgaDesktop;

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
