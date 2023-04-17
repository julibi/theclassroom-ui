import { createContext, useCallback, useMemo, useState } from "react";
import { UIApi, UIProviderProps } from "./uiProvider.types";

const defaultContext: UIApi = {
  isSliderOpen: false,
  openSlider: () => undefined,
  closeSlider: () => undefined,
  activeIndex: 0,
  updateIndex: () => undefined,
  scrollId: null,
  updateScrollId: () => undefined,
};

export const UIContext = createContext(defaultContext);

export const UIProvider = ({ children }: UIProviderProps) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollId, setScrollId] = useState<null | number>(null);
  const updateIndex = useCallback(
    (newIndex: number) => {
      setActiveIndex(newIndex);
    },
    [activeIndex]
  );
  const updateScrollId = useCallback(
    (newId: number | null) => {
      setScrollId(newId);
    },
    [activeIndex]
  );
  const openSlider = () => {
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
      activeIndex,
      updateIndex,
      scrollId,
      updateScrollId,
    }),
    [isSliderOpen, openSlider, closeSlider]
  );
  return <UIContext.Provider value={api}>{children}</UIContext.Provider>;
};
