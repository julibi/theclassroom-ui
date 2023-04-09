import { createContext, useCallback, useMemo, useState } from "react";
import { SliderApi, SliderProviderProps } from "./sliderProvider.types";

const defaultContext: SliderApi = {
  isSliderOpen: false,
  openSlider: () => undefined,
  closeSlider: () => undefined,
};

export const SliderContext = createContext(defaultContext);

export const SliderProvider = ({ children }: SliderProviderProps) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const openSlider = () => {
    console.log("first");
    setIsSliderOpen(true);
  };
  const closeSlider = () => {
    setIsSliderOpen(false);
  };
  const api = useMemo(
    () => ({
      isSliderOpen,
      openSlider,
      closeSlider,
    }),
    [isSliderOpen, openSlider, closeSlider]
  );
  return (
    <SliderContext.Provider value={api}>{children}</SliderContext.Provider>
  );
};
