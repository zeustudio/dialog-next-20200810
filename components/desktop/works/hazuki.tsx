import styled from "@emotion/styled";
import { WorkMain } from "../WorkMain";

import HazukiData from "../../../constants/works/hazuki";

const HazukiDesktop = () => {
  return (
    <Wrapper>
      <WorkMain AuthorData={HazukiData} author={"hazuki"} />
    </Wrapper>
  );
};

export default HazukiDesktop;

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
