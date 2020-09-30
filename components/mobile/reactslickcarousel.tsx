import React from "react";
import styled from "@emotion/styled";
import css from "@emotion/css";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { Color } from "../../constants/Color";

interface Props {
  imgs: string[];
  videos: string[];
}

const ReactSlickCarousel: React.FC<Props> = ({ imgs, videos }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const sliderRef = React.useRef<Slider>(null);

  const appendDots = (dots: any) => (
    <div>
      <StyledDots>{dots}</StyledDots>
    </div>
  );

  const customPaging = (i: number) => (
    <StyledPaging css={i === currentSlide ? CssPaging : null}>●</StyledPaging>
  );
  const settings = {
    class: "center",
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    speed: 1000,
    dots: true,
    swipeToSlide: true,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
        },
      },
    ],
    beforeChange: (_: any, next: number) => {
      setTimeout(() => setCurrentSlide(next), 30);
    },
    appendDots: appendDots,
    customPaging: customPaging,
  };

  return (
    <CaptionWrapperDiv>
      <Slider {...settings} css={CssSlider} ref={sliderRef}>
        {imgs.map((img, index) => (
          <div key={index}>
            <StyledContents>
              <StyledImgDiv>
                <StyledImg
                  src={img}
                  onClick={() => {
                    const slider = sliderRef.current as Slider;
                    slider.slickPause();
                  }}
                />
              </StyledImgDiv>
            </StyledContents>
          </div>
        ))}
        {videos.map((video, index) => (
          <div key={index}>
            <StyledContents>
              <StyledImgDiv>
                <ReactPlayer
                  width={"100%"}
                  height={"100%"}
                  url={video}
                  controls={true}
                  volume={0.5}
                  muted={true}
                  config={{
                    file: {
                      attributes: {
                        controlsList: "nodownload",
                        disablePictureInPicture: true,
                      },
                    },
                  }}
                  onPlay={() => {
                    const slider = sliderRef.current as Slider;
                    slider.slickPause();
                  }}
                  onEnded={() => {
                    const slider = sliderRef.current as Slider;
                    slider.slickPlay();
                  }}
                />
              </StyledImgDiv>
            </StyledContents>
          </div>
        ))}
      </Slider>
    </CaptionWrapperDiv>
  );
};

export default ReactSlickCarousel;

const CaptionWrapperDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`;

//slider関係
const CssSlider = css`
  width: 100%;
  height: auto;
`;

const StyledContents = styled.div`
  width: 100%;
  position: relative;
  &::before {
    content: "";
    display: block;
    padding-top: 66%;
  }
`;

const StyledImgDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// slider dots関係
const StyledPaging = styled.div`
  width: 100%;
  color: gray;
  &:hover {
    color: white;
  }
  &:focus {
    color: white;
  }
`;
const StyledDots = styled.ul`
  padding-top: 7px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CssPaging = css`
  color: ${Color.CAPTION_FONT_COLOR} !important;
`;
