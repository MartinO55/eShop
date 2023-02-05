import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.productCard_Content}>
          <img src={product.imgLink} className={styles.productCard_Image} />
          <h3 className={styles.productCard_Title}>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
