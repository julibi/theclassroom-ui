import { useMemo } from "react";
import cx from "classnames";
import Image from "next/image";
import { RotatingEmblemProps } from "./rotating-emblem.types";
import styles from "./rotating-emblem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const RotatingEmblem = ({ txt, className }: RotatingEmblemProps) => {
  const circularText = useMemo(() => {
    var transformStyles = [];
    for (var i = 0; i < txt.length; i++) {
      var r = (360 / txt.length) * i;
      var x = (Math.PI / txt.length) * i;
      var y = (Math.PI / txt.length) * i;

      transformStyles.push(`rotateZ(${r}deg) translate3d(${x}px,${y}px,0) `);
    }

    return transformStyles;
  }, [txt]);

  return (
    <div className={cx(styles.emblem, className)}>
      <FontAwesomeIcon icon={faStar} size="sm" className={styles.star} />
      {/* <Image height={110} width={110} src={"/Logo.svg"} alt="bla" priority /> */}
      {circularText.map((transformStyle, idx) => (
        <span
          key={idx}
          style={{
            transform: transformStyle,
            display: "block",
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            textTransform: "uppercase",
            fontSize: "24px",
            transition: "all .5s cubic-bezier(0,0,0,1)",
          }}
        >
          {txt[idx]}
        </span>
      ))}
    </div>
  );
};
