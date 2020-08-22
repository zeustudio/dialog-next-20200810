import styled from "@emotion/styled";
const Desktop = () => {
  return <Wrapper>desktop!</Wrapper>;
};

const Wrapper = styled.div`
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
export default Desktop;
