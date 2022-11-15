import {animate, spring} from "motion";

let state = false;

const useScale = (element: HTMLElement) => {
  if (!state) {
    animate(element, {scale: 1.1}, {easing: spring()});
  } else {
    animate(element, {scale: 1}, {easing: spring()});
  }
  state = !state;
};

export default useScale;
