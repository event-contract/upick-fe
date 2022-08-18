import { useEffect } from "react";

export default function useAboutPageScroll() {
  useEffect(() => {
    let container: any = document.querySelectorAll(".content_container");
    
    container.forEach((ele: any) => {
      let content = ele.querySelector('.contents_wrapper');

      // 처음에 렌더링 됐을 때 보이는 부분은 opacity 1이어야 한다.
      if (window.scrollY + window.innerHeight >= ele.offsetTop) {
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
      }
      
      function scroll() {
        if (window.scrollY + window.innerHeight / 2 >= ele.offsetTop) {
          content.style.transition = "1s";
          content.style.opacity = "1";
          content.style.transform = "translateY(0)";
        }
      };
      window.addEventListener('scroll', scroll);
      return () => {
        window.removeEventListener('scroll', scroll);
      };
    });
  }, []);
};
