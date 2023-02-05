import React from "react";
import ProductCard from "../ProductsCard/ProductCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { db } from "../../config/storebackend.js";
import { getItems } from "../../helpers/summonItems.js";
import styles from "./ProductGallery.module.scss";
import ProductFocussed from "../ProductFocussed/ProductFocussed";

const ProductGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  let itemsdata = [];
  let navigate = useNavigate();

  //I vaguely feel like this should be a function called from another file
  useEffect(() => {
    getItems(db)
      .then((response) => {
        if (!response) {
          console.log("could not fetch data for products gallery");
          return;
        }
        itemsdata = response;
      })
      .catch((error) => console.log(error))
      .finally(() => {
        //setItems(itemsdata);
        setGalleryItems(itemsdata);
        //console.log(itemsdata);
      });
  }, []);

  const handleClick = (idTarget) => {
    //so this gets the index number
    let path = `/products/${idTarget}`;

    //console.log(idTarget);
    navigate(path);
    return idTarget;
  };

  return (
    <>
      <div className={styles.ProductGallery}>
        {galleryItems.map((item, index) => {
          //console.log(index);
          //so in addition to this, we need to attach a function to each card that brings up each card into a separate page
          //This could be an onclick navlink, which would navigate to a component that is /:id(index) - Product Card with different styling - the current should be gallery
          //the new one would be focussed.
          //it shouldn't matter that the index is the key because I am not changing data often?
          return (
            <div onClick={() => handleClick(index)}>
              <ProductCard key={index} product={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductGallery;
