import React from "react";
import { db } from "../../config/storebackend.js";
import { doc, updateDoc } from "firebase/firestore";

import { useState } from "react";

import styles from "./ProductFoccussed.module.scss";
import unFavouriteIcon from "../../assets/Heart_Icon_empty.png"; //change to svg
import favouriteIcon from "../../assets/Heart_Icon_full.png";

const ProductFocussed = (product) => {
  //This might be too much code at this level? Maybe the data fetch can go up. Also, I think we are doing too many fetches.
  //this just has to get by ID, which is annoying because this is actually the index

  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
    toggleFavourite(product.item.favourited, !favourite); //I am not 100% this is a good idea, or that the state is needed
  };

  const toggleFavourite = (toggle) => {
    const data = { favourited: toggle };
    const docref = doc(db, "ShopItems", product.item.ID);

    updateDoc(docref, data)
      .then((docref) => {
        console.log(
          "updated Favourites: " + product.item.name + " with " + toggle
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={styles.aProductCard}>
        <div className={styles.aProductCard_content}>
          <img
            src={product.item.imgLink}
            alt={product.item.name}
            className={styles.aProductCard_content_img}
          />
          <div>
            <div className={styles.aProductCard_content_title}>
              <h2>{product.item.name}</h2>
            </div>

            <p className={styles.aProductCard_content_price}>
              ${product.item.price}
            </p>

            <p className={styles.aProductCard_content_available}>
              number available: {product.item.quantity}
            </p>

            <div className={styles.aProductCard_content_variants}>
              <ul className={styles.aProductCard_content_variantList}>
                Variants:
                {product.item.variants.map((variant) => (
                  <li className={styles.aProductCard_content_variantListItem}>
                    {variant}{" "}
                    <button
                      className={
                        styles.aProductCard_content_variantListItem_button
                      }
                    >
                      Add to Cart
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src={favourite === false ? unFavouriteIcon : favouriteIcon}
                alt="favourite Icon"
                className={styles.aProductCard_content_favouriteIcon}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFocussed;
