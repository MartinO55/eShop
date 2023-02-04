import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.productCard_Title}>
          <h3>{product.name}</h3>

          <img src={product.imgLink} className={styles.productCard_image} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
