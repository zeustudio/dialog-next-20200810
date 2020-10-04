import styled from "@emotion/styled";
import { WorkMain } from "../WorkMain";

import TakuroData from "../../../constants/works/takuro";

const TakuroDesktop = () => {
  return (
    <Wrapper>
      <WorkMain AuthorData={TakuroData} author={"takuro"} />
    </Wrapper>
  );
};

export default TakuroDesktop;

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
