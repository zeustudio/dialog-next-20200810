import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
const uuid = require("react-uuid");
const v = 0.3;
interface Props {
  imgs: string[];
  width: number;
  height: number;
}

const Carousel: React.FC<Props> = ({ imgs, width, height }) => {
  const n = imgs.length;
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [autoPlayTrig, setAutoPlayTrig] = React.useState(true);
  const autoPlayTrigRef = React.useRef(autoPlayTrig);
  const displayIndexRef = React.useRef(displayIndex);

  const [carouselAnimation, setCarouselAnimation] = useSpring(() => ({
    transform: `translate3d(${-displayIndexRef.current * width}px,0px,0px)`,
  }));
  const bind = useDrag(({ vxvy: [vx], last }) => {
    if (last && vx > v) {
      if (displayIndex > 0) {
        setDisplayIndex(displayIndex - 1);
      }
    } else if (last && vx < -v) {
      if (displayIndex < n - 1) {
        setDisplayIndex(displayIndex + 1);
      }
    }
  });
  React.useEffect(() => {
    autoPlayTrigRef.current = autoPlayTrig;
  }, [autoPlayTrig]);
  React.useEffect(() => {
    displayIndexRef.current = displayIndex;
  }, [displayIndex]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlayTrigRef.current === true) {
        setDisplayIndex((displayIndex) =>
          displayIndex < n - 1 ? displayIndex + 1 : 0
        );
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  React.useEffect(() => {
    setCarouselAnimation({
      transform: `translate3d(${-displayIndex * width}px,0px,0px)`,
    });
  }, [displayIndex]);

  return (
    <Wrapper style={{ width: `${width}px`, height: `${height}px` }}>
      <ImgWrapper
        {...bind()}
        style={{ ...carouselAnimation, width: `${width * n}px` }}
        onClick={() => {
          setAutoPlayTrig(!autoPlayTrig);
        }}
      >
        {imgs.map((img) => {
          if (img.indexOf("https://www.youtube.com/embed/") !== -1) {
            return <Video key={uuid()} src={img} allow={"fullscreen"} />;
          } else {
            return <Img key={uuid()} src={img} />;
          }
        })}
      </ImgWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  overflow-x: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Video = styled.iframe`
  width: 100%;
  height: 100%;
`;
const ImgWrapper = animated(styled.div`
  height: 100%;
  display: flex;
`);
export default Carousel;
