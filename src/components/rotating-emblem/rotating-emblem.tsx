import { useMemo } from "react";
import { RotatingEmblemProps } from "./rotating-emblem.types";
import styles from "./rotating-emblem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const RotatingEmblem = ({ txt }: RotatingEmblemProps) => {
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
    <div className={styles.emblem}>
      <FontAwesomeIcon icon={faStar} size="sm" className={styles.star} />
      {circularText.map((transformStyle, idx) => (
        <span
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
