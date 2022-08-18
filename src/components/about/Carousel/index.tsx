import styled from "@emotion/styled";
import { useEffect } from "react";
import checkIsMobile from "~/src/utils/isMobile";
import Box from "../../core/Box";
import CarouselItem from "./CarouselItem";
import JumpButton from "./JumpButton";

const CarouselWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const InnerSlider = styled(Box)`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  height: 450px;
  transform: translateY(-50%);
`;

export default function Carousel({ data }: {
  data: Array<{ content: string; name: string; }>
}) {
  useEffect(() => {
    let carouselWrapper: any = document.querySelector('.carousel_wrapper');
    let carousel: any = document.querySelector('.carousel');
    let isMouseDown = false;
    let initialX = 0;
    function mouseDown(e: any) {
      carousel.style.transition="none";
      carousel.style.cursor = "grabbing";
      isMouseDown = true;
      initialX = e.clientX - carousel.offsetLeft;
    }
    function mouseEnter() {
      carousel.style.cursor = "grab";
    }
    function mouseLeave() {
      isMouseDown = false;
      initialX = 0;
    }
    function mouseUp() {
      carousel.style.cursor = "grab";
      isMouseDown = false;
      initialX = 0;
    }
    function checkBoundary() {
      const left = parseInt(carousel.style.left, 10);
      if (left > 0) {
        carousel.style.left = "0px";
      }
      if (left < window.innerWidth - carousel.clientWidth) {
        carousel.style.left = `${window.innerWidth - carousel.clientWidth}px`;
      }
    }
    function mouseMove(e: any) {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.clientX;
      carousel.style.left = `${x - initialX}px`;
      checkBoundary();
    }

    carouselWrapper.addEventListener('mousedown', mouseDown);
    carouselWrapper.addEventListener('mouseenter', mouseEnter);
    carouselWrapper.addEventListener('mouseleave', mouseLeave);
    carouselWrapper.addEventListener('mouseup', mouseUp);
    carouselWrapper.addEventListener('mousemove', mouseMove);

    return () => {
      carouselWrapper.removeEventListener('mousedown', mouseDown);
      carouselWrapper.removeEventListener('mouseenter', mouseEnter);
      carouselWrapper.removeEventListener('mouseleave', mouseLeave);
      carouselWrapper.removeEventListener('mouseup', mouseUp);
      carouselWrapper.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <Box position="relative">
      <CarouselWrapper className="carousel_wrapper">
        <InnerSlider className="carousel">
          {data.map((a, idx) => (
            <Box key={`${a.name}_${idx}`} paddingLeft={idx === 0 ? "8rem" : "3rem"} paddingRight={idx < data.length - 1 ? "0" : "8rem"}>
              <CarouselItem 
                content={a.content}
                name={a.name}
              />
            </Box>
          ))}
        </InnerSlider>
      </CarouselWrapper>
      
      <JumpButton 
        direction="left" 
        onClick={() => {
          let carouselWrapper: any = document.querySelector('.carousel_wrapper');
          let carousel: any = document.querySelector('.carousel');
          if (checkIsMobile()) {
            carouselWrapper.scroll({ left: 0, behavior: 'smooth' });
            return;
          }
          carousel.style.transition="0.5s";
          carousel.style.left = "0px";
        }}
      />
      <JumpButton 
        direction="right" 
        onClick={() => {
          let carouselWrapper: any = document.querySelector('.carousel_wrapper');
          let carousel: any = document.querySelector('.carousel');
          if (checkIsMobile()) {
            carouselWrapper.scroll({ left: carousel.clientWidth, behavior: 'smooth' });
            return;
          }
          carousel.style.transition="0.5s";
          carousel.style.left = `${window.innerWidth - carousel.clientWidth}px`;
        }}
      />
    </Box>
  );
};
