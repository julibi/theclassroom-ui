import { useContext } from "react";
import { MoonpageContext } from "../../providers/moonpageProvider/moonpageProvider";

export const useMoonpage = () => {
  const api = useContext(MoonpageContext);
  if (!api) {
    throw new Error("useMoonpage must be used within a MoonpageProvider");
  }

  return api;
};
