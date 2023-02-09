import React from "react";
import CarouselContainer from "../../components/CarouselContainer/CarouselContainer";
import styles from "./CarouselOverflowContainer.module.scss";

//I dont think this is ever called, except to add some styling
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
