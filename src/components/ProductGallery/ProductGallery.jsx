import React from "react";
import ProductCard from "../ProductsCard/ProductCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { getItems } from "../../helpers/summonItems.js";
import styles from "./ProductGallery.module.scss";

const ProductGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  let navigate = useNavigate();

  //I vaguely feel like this should be a function called from another file
  useEffect(() => {
    getItems()
      .then((response) => {
        if (!response) {
          console.log("could not fetch data for products gallery");
          return;
        }
        setGalleryItems(response);
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }, []);

  const handleClick = (idTarget) => {
    //so this gets the index number
    let path = `/products/${idTarget}`;

    navigate(path);
    return idTarget;
  };

  return (
    <>
      <div className={styles.ProductGallery}>
        {galleryItems.map((item, index) => {
          return (
            <div onClick={() => handleClick(index)}>
              <ProductCard product={item} key={item.ID} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductGallery;
