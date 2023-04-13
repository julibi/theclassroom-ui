import { ReactNode } from "react";

export type SliderApi = {
  isSliderOpen: boolean;
  openSlider: () => void;
  closeSlider: () => void;
};

export type SliderProviderProps = {
  children: ReactNode;
};
