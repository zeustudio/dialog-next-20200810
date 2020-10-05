import styled from "@emotion/styled";
import { WorkMain } from "../WorkMain";

import HeejunData from "../../../constants/works/heejun";

const HeejunDesktop = () => {
  return (
    <Wrapper>
      <WorkMain AuthorData={HeejunData} author={"heejun"} />
    </Wrapper>
  );
};

export default HeejunDesktop;

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
