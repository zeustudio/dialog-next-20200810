import styled from "@emotion/styled";
import { WorkMain } from "../WorkMain";

import UenaData from "../../../constants/works/uena";

const UenaDesktop = () => {
  return (
    <Wrapper>
      <WorkMain AuthorData={UenaData} />
    </Wrapper>
  );
};

export default UenaDesktop;

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
