import React from "react";
import CarouselContainer from "../../components/CarouselContainer/CarouselContainer";
import styles from "./CarouselOverflowContainer.module.scss";

const CarouselOverflowContainer = () => {
  return (
    <>
      <div className={styles.CarouselHolder}>
        <CarouselContainer />
      </div>
    </>
  );
};

export default CarouselOverflowContainer;
