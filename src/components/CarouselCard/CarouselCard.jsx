import React from "react";
import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ item, currentClass, index }) => {
  //so this needs to take item details from server
  //image imgLink
  //price
  //variants [strings]
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
        <div>{item.name}</div>
        <div></div>
      </div>
    </>
  );
};

export default CarouselCard;
