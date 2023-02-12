import React from "react";
import styles from "./NotFound.module.scss";
import fourohfour from "../../assets/404Cat.jpg";

const NotFound = () => {
  return (
    <>
      <div className={styles.NotFound}>
        <img src={fourohfour} alt="404" className={styles.fourohfour} />
      </div>
    </>
  );
};

export default NotFound;
