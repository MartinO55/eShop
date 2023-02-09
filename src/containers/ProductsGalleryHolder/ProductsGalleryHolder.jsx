import React from "react";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import styles from "./ProductsGalleryHolder.module.scss";

const ProductsGalleryHolder = () => {
  return (
    <>
      <div className={styles.ProductsGalleryHolder}>
        <ProductGallery />
      </div>
    </>
  );
};

export default ProductsGalleryHolder;
