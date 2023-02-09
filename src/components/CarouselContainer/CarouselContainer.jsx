import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../config/storebackend.js";
import { getItems } from "../../helpers/summonItems.js";
import { cleanForCarousel } from "../../helpers/cleanDataForCarousel.js";
import styles from "./CarouselContainer.module.scss"; //this needs styles for active and inactive, then you can toggle between them. This has probably moved since styles is now called nowhere

import CarouselCard from "../CarouselCard/CarouselCard";

const CarouselContainer = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentCenter, setCurrentCenter] = useState(0);
  const [items, setItems] = useState([]);
  let timeOut = null;

  let itemsdata = [];

  useEffect(() => {
    getItems(db)
      .then((response) => {
        if (!response) {
          console.log("could not fetch data for carousel");
          return;
        }
        itemsdata = response;
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setItems(cleanForCarousel(itemsdata));
      });
  }, []);

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 3000);
  });

  const slideLeft = () => {
    setCurrentCenter(
      currentCenter === 0 ? items.length - 1 : currentCenter - 1
    );
  };

  const slideRight = () => {
    setCurrentCenter(
      currentCenter === items.length - 1 ? 0 : currentCenter + 1
    );
  };

  //this needs to map the list of items
  return (
    <>
      <div>
        {items.map((item, index) => {
          return (
            <CarouselCard
              key={index} //key so react doesn't complain
              item={item} //each item object
              currentClass={currentCenter} //sets style for the carousel
              index={index} //also for carousel styling
            />
          );
        })}
      </div>

      {/* <button onClick={slideRight}>right</button>
      <button onClick={slideLeft}>left</button> */}
    </>
  );
};

export default CarouselContainer;
