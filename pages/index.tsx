import { isMobile } from "react-device-detect";
import Desktop from "./desktop/desktop";
import Mobile from "./mobile/mobile";

const IndexPage = () => {
  if (isMobile === false) {
    return <Desktop />;
  } else {
    return <Mobile />;
  }
};
export default IndexPage;
