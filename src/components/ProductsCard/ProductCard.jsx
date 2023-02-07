import React from "react";
import styles from "./ProductCard.module.scss";
import { useState } from "react";
import { updateItem } from "../../helpers/updateItem";
//I hope this is allowed
import unFavouriteIcon from "../../assets/Heart_Icon_empty.png";
import favouriteIcon from "../../assets/Heart_Icon_full.png";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.productCard_Content}>
          <img
            src={product.imgLink}
            className={styles.productCard_Image}
            alt={product.name}
          />
          <h3 className={styles.productCard_Title}>{product.name}</h3>

          <div>
            <div className={styles.ProductCard_details}>
              <div>
                <p className={styles.ProductCard_price}>${product.price}</p>
              </div>
              <div>
                <img
                  src={
                    product.favourited === true
                      ? favouriteIcon
                      : unFavouriteIcon
                  }
                  alt="favourite Icon"
                  className={styles.favouriteIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
