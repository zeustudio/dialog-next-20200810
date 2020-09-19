import React from "react";
import styled from "@emotion/styled";
import css from "@emotion/css";
import { Color } from "../../constants/Color";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactPlayer from "react-player";
import videourl from "../../images/TitleVideo.mp4";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

interface Props {
  captionImages: string[];
  captionTitleJP: string;
  captionTitleEN: string;
  captionMessageJP: string;
  captionMessageEN: string;
  isEnglish: Boolean;
}

const StyledDots = styled.ul`
  background-color: black;
`;

const StyledPlayButton = styled.button`
  display: inline-block;
  color: ${Color.CAPTION_SUB_FONT_COLOR};
  font-size: 1.5rem;
  margin-left: 2rem;
  &:hover {
    color: ${Color.CAPTION_FONT_COLOR};
  }
`;

const WorkCaptionCarousel: React.FC<Props> = ({
  captionImages,
  captionTitleJP,
  captionTitleEN,
  captionMessageJP,
  captionMessageEN,
  isEnglish,
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [flagAuto, setFlagAuto] = React.useState(true);
  const sliderRef = React.useRef<Slider>(null);
  const sliderAutoStopOrPlay = () => {
    const slider = sliderRef.current as Slider;
    if (flagAuto) {
      slider.slickPause();
      setFlagAuto(false);
    } else {
      slider.slickNext();
      slider.slickPlay();
      setFlagAuto(true);
    }
  };
  const appendDots = (dots: any) => (
    <div>
      <StyledDots>
        {dots}
        <StyledPlayButton onClick={sliderAutoStopOrPlay}>
          {flagAuto ? (
            <FontAwesomeIcon icon={faStop} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </StyledPlayButton>
      </StyledDots>
    </div>
  );
  const customPaging = (i: number) => (
    <StyledPaging css={i === currentSlide ? CssPaging : null}>●</StyledPaging>
  );
  const settings = {
    class: "center",
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "ease",
    speed: 1000,
    fade: true,
    dots: true,
    initialSlide: 0,
    infinite: true,
    beforeChange: (_: any, next: number) => {
      setTimeout(() => setCurrentSlide(next), 30);
    },
    appendDots: appendDots,
    customPaging: customPaging,
  };
  return (
    <CaptionWrapperDiv>
      <Slider {...settings} css={CssSlider} ref={sliderRef}>
        {captionImages.map((captionImage, index) => (
          <StyledImg key={index} src={captionImage} width="600" height="400" />
        ))}
        <ReactPlayer
          width={"100%"}
          url={videourl}
          controls={false}
          playing={true}
          loop={true}
        />
      </Slider>
      <CaptionMessageDiv>
        {captionTitleJP === "" ? (
          <CaptionENOnly>{captionTitleEN}</CaptionENOnly>
        ) : (
          <>
            <CaptionTitleJP>{captionTitleJP}</CaptionTitleJP>
            <CaptionTitleEN>- {captionTitleEN} -</CaptionTitleEN>
          </>
        )}
        {isEnglish ? (
          <CaptionMessageEN>{captionMessageEN}</CaptionMessageEN>
        ) : (
          <CaptionMessageJP>{captionMessageJP}</CaptionMessageJP>
        )}
      </CaptionMessageDiv>
    </CaptionWrapperDiv>
  );
};

export default WorkCaptionCarousel;

const CaptionWrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: ${Color.CAPTION_COLOR};
`;

const CaptionMessageDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 232px;
  padding: 40px 0 0;
  margin: 0;
  color: ${Color.CAPTION_FONT_COLOR};
  overflow: scroll;
  /* スクロールバーの削除 */
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CaptionTitleJP = styled.h3`
  width: 90%;
  margin-top: 3.2rem;
  margin: 0 auto;
`;
const CaptionTitleEN = styled.h3`
  width: 90%;
  margin: 0 auto 1.6rem;
`;
const CaptionENOnly = styled.h3`
  width: 90%;
  margin: 0 auto 1.6rem;
`;

const CaptionMessageJP = styled.p`
  width: 90%;
  text-align: justify;
  margin: 0 auto;
`;
const CaptionMessageEN = styled.p`
  width: 90%;
  text-align: justify;
  margin: 0 auto;
`;

//slider関係
const CssSlider = css`
  width: 100%;
  height: auto;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  vertical-align: bottom;
`;

// slider dots関係
const StyledPaging = styled.div`
  width: 30px;
  color: ${Color.CAPTION_SUB_FONT_COLOR};
  &:hover {
    color: ${Color.CAPTION_SUB_FONT_COLOR2};
  }
  &:focus {
    color: ${Color.CAPTION_SUB_FONT_COLOR2};
  }
`;

const CssPaging = css`
  color: ${Color.CAPTION_FONT_COLOR} !important;
`;
