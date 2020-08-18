import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
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
        setAutoPlayTrig(false);
        setDisplayIndex(displayIndex - 1);
      }
    } else if (last && vx < -v) {
      if (displayIndex < n - 1) {
        setAutoPlayTrig(false);
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
    <>
      <Wrapper style={{ width: `${width}px`, height: `${height}px` }}>
        <ImgWrapper
          {...bind()}
          style={{
            ...carouselAnimation,
            width: `${width * 3}px`,
            height: `${height}px`,
          }}
          onClick={() => {
            setAutoPlayTrig(!autoPlayTrig);
          }}
        >
          {imgs.map((img, index) => {
            if (img.indexOf("https://www.youtube.com/embed/") !== -1) {
              return <Video key={index} src={img} allow={"fullscreen"} />;
            } else {
              return <Img key={index} src={img} />;
            }
          })}
        </ImgWrapper>
      </Wrapper>
      <DotWrapper>
        {imgs.map((img, index) => {
          if (index === displayIndex) {
            return (
              <Dot key={index} className={img}>
                <FontAwesomeIcon icon={faCircleRegular} />
              </Dot>
            );
          } else {
            return (
              <Dot key={index} className={img}>
                <FontAwesomeIcon icon={faCircleSolid} />
              </Dot>
            );
          }
        })}
      </DotWrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: top;
  overflow-x: hidden;
`;
const DotWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
const Dot = animated(styled.div`
  font-size: 10px;
  margin: 0 10px 0 10px;
`);

const Img = styled.img`
  width: 100%;
`;
const Video = styled.iframe`
  width: 100%;
  height: 100%;
`;
const ImgWrapper = animated(styled.div`
  display: flex;
`);
export default Carousel;

/*{imgs.map((img, index) => {
  if (img.indexOf("https://www.youtube.com/embed/") !== -1) {
    return <Video key={index} src={img} allow={"fullscreen"} />;
  } else {
    return <Img key={index} src={img} />;
  }
})}*/
