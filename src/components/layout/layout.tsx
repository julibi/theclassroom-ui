import React from "react";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import styles from "./layout.module.css";
import { LayoutProps } from "./layout.types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* <Navbar /> */}

      {children}

      {/* <Footer /> */}
    </div>
  );
};
