import { ReactNode } from "react";

export type UIApi = {
  isSliderOpen: boolean;
  openSlider: () => void;
  closeSlider: () => void;
  activeIndex: number;
  updateIndex: (x: number) => void;
  scrollId: null | number;
  updateScrollId: (x: number | null) => void;
};

export type UIProviderProps = {
  children: ReactNode;
};
