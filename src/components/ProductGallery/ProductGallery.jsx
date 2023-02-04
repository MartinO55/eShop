import React from "react";
import ProductCard from "../ProductsCard/ProductCard";
import { useEffect, useState } from "react";

import { db } from "../../config/storebackend.js";
import { getItems } from "../../helpers/summonItems.js";
import styles from "./ProductGallery.module.scss";

const ProductGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  let itemsdata = [];
  //I vaguely feel like this should be a function called from another file
  useEffect(() => {
    getItems(db)
      .then((response) => {
        if (!response) {
          console.log("could not fetch data");
          return;
        }
        itemsdata = response;
      })
      .catch((error) => console.log(error))
      .finally(() => {
        //setItems(itemsdata);
        setGalleryItems(itemsdata);
        //console.log(items);
      });
  }, []);

  return (
    <>
      <div className={styles.ProductGallery}>
        {galleryItems.map((item, index) => {
          return <ProductCard key={index} product={item} />;
        })}
      </div>
    </>
  );
};

export default ProductGallery;
