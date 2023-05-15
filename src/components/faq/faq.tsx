import React, { useState } from "react";
import cx from "classnames";
import { inter } from "@/utils/fonts";
import styles from "./faq.module.css";
import { FaqProps } from "./faq.types";
import { Title } from "../title";
import { Button } from "../button";

export const FAQ = ({ question, answer }: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={cx(styles.faq, inter.className)}>
      <div className={styles.questionRow}>
        <Title size={2} className={styles.question}>
          {question}
        </Title>
        <Button onClick={toggle}>{isOpen ? "-" : "+"}</Button>
      </div>
      <div className={styles.answer}>{isOpen && answer}</div>
    </div>
  );
};
