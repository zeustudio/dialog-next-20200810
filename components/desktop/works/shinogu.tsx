import styled from "@emotion/styled";
import { WorkMain } from "../WorkMain";

import ShinoguData from "../../../constants/works/shinogu";

const ShinoguDesktop = () => {
  return (
    <Wrapper>
      <WorkMain AuthorData={ShinoguData} />
    </Wrapper>
  );
};

export default ShinoguDesktop;

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
