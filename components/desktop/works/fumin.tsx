import styled from "@emotion/styled";
import { WorkMain } from "../WorkMain";

import FuminData from "../../../constants/works/fumin";

const FuminDesktop = () => {
  return (
    <Wrapper>
      <WorkMain AuthorData={FuminData} author={"fumin"} />
    </Wrapper>
  );
};

export default FuminDesktop;

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
