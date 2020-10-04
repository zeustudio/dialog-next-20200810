import styled from "@emotion/styled";
import { WorkMain } from "../WorkMain";

import OtoData from "../../../constants/works/oto";

const OtoDesktop = () => {
  return (
    <Wrapper>
      <WorkMain AuthorData={OtoData} author={"oto"} />
    </Wrapper>
  );
};

export default OtoDesktop;

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
