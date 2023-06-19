import { ReactNode } from "react";

export type UIApi = {
  isSliderOpen: boolean;
  openSlider: () => void;
  closeSlider: () => void;
  activeIndex: number;
  updateIndex: (x: number) => void;
  scrollId: null | number;
  updateScrollId: (x: number | null) => void;
  shouldShuffle: boolean;
  updateShouldShuffle: (x: boolean) => void;
};

export type UIProviderProps = {
  children: ReactNode;
};
