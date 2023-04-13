import { useContext } from "react";
import { SliderContext } from "../../providers/sliderProvider/sliderProvider";

export const useSlider = () => {
  const api = useContext(SliderContext);
  if (!api) {
    throw new Error("useSlider must be used within a SliderProvider");
  }

  return api;
};
