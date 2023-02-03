import React from "react";
import { useState, useEffect } from "react";
import { db, getItems } from "../../config/storebackend.js";
import { getItems } from "../../helpers/summonItems.js";
import { onValue, ref } from "firebase/database";
import { collection, addDoc, getDocs } from "firebase/firestore";
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
  const [autoPlay, setAutoPlay] = useState(false);
  const [currentCenter, setCurrentCenter] = useState(0);
  const [items, setItems] = useState([]);
  let timeOut = null;

  // const fetchItems = async () => {
  //   await getDocs(collection(db, "ShopItems")).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setItems(newData);
  //     console.log(items, newData);
  //   });
  // };

  //this returns itemsList, which is an array containing objects; the keys are the various required things, and the variants are an array
  useEffect(() => {
    getItems(db);
  }, []);

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
    //console.log(currentCenter);
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
