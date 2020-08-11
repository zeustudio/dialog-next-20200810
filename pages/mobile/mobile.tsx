import React from "react";
import styled from "@emotion/styled";
import WorkPage from "../../components/mobile/workpage";
const Mobile = () => {
  const [viewRect, setViewRect] = React.useState([0, 0]);
  React.useEffect(() => {
    setViewRect([window.innerWidth, window.innerHeight]);
  }, []);
  return (
    <Wrapper style={{ width: `${viewRect[0]}px`, height: `${viewRect[1]}px` }}>
      <WorkPage author={"fumin"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export default Mobile;
