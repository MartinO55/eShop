import React from "react";
import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ test, currentClass, index }) => {
  //so this needs to take item details from server
  //image
  //price
  //variants
  //name
  //favourited
  //quantity(num in store I gather)
  return (
    <>
      <div
        className={
          currentClass == index
            ? styles.CarouselCard__active
            : styles.CarouselCard__Inactive
        }
      >
        {" "}
        <div>{test.title}</div>
        <div></div>
      </div>
    </>
  );
};

export default CarouselCard;
