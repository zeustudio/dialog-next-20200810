import React from "react";
import styled from "@emotion/styled";
import css from "@emotion/css";
import Slider from "react-slick";

interface Props {
  imgs: string[];
}

const appendDots = (dots: string) => (
  <div style={{ width: "100%", position: "absolute", bottom: "-30px" }}>
    <StyledDots> {dots} </StyledDots>
  </div>
);

const ReactSlickCarousel: React.FC<Props> = ({ imgs }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const customPaging = (i: number) => (
    <StyledPaging style={{ color: i === currentSlide ? "white" : "gray" }}>
      ●
    </StyledPaging>
  );
  const settings = {
    class: "center",
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1000,
    dots: true,
    swipeToSlide: true,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [],
    beforeChange: (_: any, next: number) => {
      setTimeout(() => setCurrentSlide(next), 30);
    },
    appendDots: appendDots,
    customPaging: customPaging,
  };

  return (
    <CaptionWrapperDiv>
      <Slider {...settings} css={CssSlider}>
        {imgs.map((img, index) => (
          <div key={index}>
            <StyledContents>
              <StyledImgDiv>
                <StyledImg src={img} />
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
  width: 30px;
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
`;
