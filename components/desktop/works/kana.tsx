import styled from "@emotion/styled";
import { WorkMain } from "../WorkMain";

import KanaData from "../../../constants/works/kana";

const KanaDesktop = () => {
  return (
    <Wrapper>
      <WorkMain AuthorData={KanaData} />
    </Wrapper>
  );
};

export default KanaDesktop;

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
