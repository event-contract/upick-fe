import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { colors } from "~/src/configs/colors";
import Box from "../../core/Box";
import Img from "../../core/Img";
import CarouselItem from "./CarouselItem";
import JumpButton from "./JumpButton";

const CarouselWrapper = styled(Box)`
  position: relative;
  width: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const InnerSlider = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
`;

export default function Carousel({ data }: {
  data: Array<{ content: string; name: string; }>
}) {
  const [isMouseDown, setMouseDown] = useState(false);
  const [initialX, setInitialX] = useState(0);

  useEffect(() => {
    let carousel: any = document.querySelector('.carousel');
    function mouseDown(e: any) {
      carousel.style.cursor = "grabbing";
      setMouseDown(true);
      setInitialX(e.clientX - carousel.offsetLeft);
    }
    function mouseEnter() {
      carousel.style.cursor = "grab";
    }
    function mouseLeave() {
      setMouseDown(false);
      setInitialX(0);
    }
    function mouseUp() {
      carousel.style.cursor = "grab";
      setMouseDown(false);
      setInitialX(0);
    }
    function checkBoundary() {
      const left = parseInt(carousel.style.marginLeft, 10);
      if (left > 0) {
        carousel.style.marginLeft = "0px";
      }
      if (left < window.innerWidth - carousel.clientWidth) {
        carousel.style.marginLeft = `${window.innerWidth - carousel.clientWidth}px`;
      }
    }
    function mouseMove(e: any) {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.clientX;
      carousel.style.marginLeft = `${x - initialX}px`;
      checkBoundary();
    }

    carousel.addEventListener('mousedown', mouseDown);
    carousel.addEventListener('mouseenter', mouseEnter);
    carousel.addEventListener('mouseleave', mouseLeave);
    carousel.addEventListener('mouseup', mouseUp);
    carousel.addEventListener('mousemove', mouseMove);

    return () => {
      carousel.removeEventListener('mousedown', mouseDown);
      carousel.removeEventListener('mouseenter', mouseEnter);
      carousel.removeEventListener('mouseleave', mouseLeave);
      carousel.removeEventListener('mouseup', mouseUp);
      carousel.removeEventListener('mousemove', mouseMove);
    };
  }, [isMouseDown, initialX]);

  return (
    <Box position="relative">
      <CarouselWrapper>
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
          let carousel: any = document.querySelector('.carousel');
          carousel.style.marginLeft = "0px";
        }}
      />
      <JumpButton 
        direction="right" 
        onClick={() => {
          let carousel: any = document.querySelector('.carousel');
          carousel.style.marginLeft = `${window.innerWidth - carousel.clientWidth}px`;
        }}
      />
    </Box>
  );
};
