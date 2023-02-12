import React from "react";
import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ item, currentClass, index }) => {
  return (
    <>
      <div
        //picks the centered card for the carousel
        className={
          currentClass == index
            ? styles.CarouselCard__active
            : styles.CarouselCard__Inactive
        }
      >
        <div>
          <img
            src={item.imgLink}
            className={styles.CarouselCard__FeatureProductImg}
          />
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
