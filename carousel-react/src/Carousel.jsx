import { useState } from "react";
import { styled } from "styled-components";

const appData = ["/background1.jpg", "/background2.jpg", "/background3.jpg"];
const numberOfSlides = appData.length;

function Carousel() {
  const [currentSlideIndex, setSlideImageIndex] = useState(0);
  const [isImageHidden, setIsImageHidden] = useState(true);

  function nextSlideImage() {
    setSlideImageIndex((currentSlideIndex + 1) % numberOfSlides);
  }
  function previousSlideImage() {
    setSlideImageIndex((currentSlideIndex - 1) % numberOfSlides);
  }
  
  return (
    <StyledCarouselContainer>
      <StyledCarouselSlide>
        <StyledCarouselSlideImage src={appData[Math.abs(currentSlideIndex)]}/>
      </StyledCarouselSlide>
      {/* Control Side Buttons */}
      <StyledControlButtonPrevious
        $isHidden={numberOfSlides <= 1 ? true : false}
        onClick={() => previousSlideImage()}
      ></StyledControlButtonPrevious>
      <StyledControlButtonNext
        $isHidden={numberOfSlides <= 1 ? true : false}
        onClick={() => nextSlideImage()}
      ></StyledControlButtonNext>
      <div>{currentSlideIndex}</div>
    </StyledCarouselContainer>
  );
}

const StyledDot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${(props) => (props.$isHidden ? "red" : "blue")};
  border-radius: 50%;
  display: ${(props) => (props.$isHidden ? "none" : "inline-block")};

  &:hover {
    background-color: #717171;
  }
`;
const StyledControlButtonPrevious = styled("div")`
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin: -22px 50px 0px 50px;
  padding: 14px;
  color: white;
  transition: 0.6s ease;
  border-radius: 50%;
  user-select: none;
  text-align: center;
  display: ${(props) => (props.$isHidden ? "none" : "block")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const StyledControlButtonNext = styled(StyledControlButtonPrevious)`
  right: 0;
`;
const StyledCarouselContainer = styled("div")`
  position: relative;
  width: 400px;
`;
const StyledCarouselSlideImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledCarouselSlide = styled("figure")`
  height: 500px;
  overflow: hidden;
`;
export default Carousel;
