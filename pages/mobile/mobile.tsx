import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import TitleScreen from "../../components/mobile/titlescreen";
import HowToVideo from "../../components/mobile/howtovideo";
import Introduction from "../../components/mobile/introduction";
import Works from "../../components/mobile/works";

import globalCSS from "../../styles/global";
import { Global } from "@emotion/core";

const Mobile = () => {
  const [width, height] = useWindowSize();
  const router = useRouter();
  const isEnglish: boolean = router.query.isEnglish === "true";
  const [englishTrig, setEnglishTrig] = React.useState(isEnglish);

  return (
    <Wrapper style={{ width: width, height: height }} id="mainPage">
      <Global styles={globalCSS} />
      <TitleScreen width={width} height={height} />
      <HowToVideo width={width} height={height} />
      <Introduction
        width={width}
        height={height}
        isEnglishState={[englishTrig, setEnglishTrig]}
      />
      <Works
        width={width}
        height={height}
        isEnglishState={[englishTrig, setEnglishTrig]}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (min-width: 1025px) {
    display: none;
  }
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export default Mobile;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState([375, 812]);

  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
