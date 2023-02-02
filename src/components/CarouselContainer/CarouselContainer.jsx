import React from "react";
import { useState, useEffect } from "react";
import styles from "./CarouselContainer.module.scss"; //this needs styles for active and inactive, then you can toggle between them

import CarouselCard from "../CarouselCard/CarouselCard";

const placeholderitems = [
  {
    title: "Die Hard",
    year: 1988,
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    title: "Die Hard 2",
    year: 1988,
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    title: "Die Hard 3",
    year: 1988,
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    title: "Die Hard 4",
    year: 1988,
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
];

const CarouselContainer = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentCenter, setCurrentCenter] = useState(0);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCurrentCenter(
      currentCenter === placeholderitems.length - 1 ? 0 : currentCenter + 1
    );
    console.log(currentCenter);
  };

  //this needs to map the list of items
  return (
    <>
      <div>
        {placeholderitems.map((test, index) => {
          return (
            <CarouselCard
              test={test}
              currentClass={currentCenter}
              key={index}
              index={index}
            />
          );
        })}
      </div>

      <button onClick={slideRight}>right</button>
    </>
  );
};

export default CarouselContainer;
