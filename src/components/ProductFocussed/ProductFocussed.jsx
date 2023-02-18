import React from "react";
import { updateItem } from "../../helpers/updateItem.js";
import { useState } from "react";
import styles from "./ProductFoccussed.module.scss";
import unFavouriteIcon from "../../assets/Heart_Icon_empty.svg";
import favouriteIcon from "../../assets/Heart_Icon_full.svg";

const ProductFocussed = (product) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    console.log(favourite);
    setFavourite(!favourite);
    updateItem(product.item.ID, !favourite);
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
