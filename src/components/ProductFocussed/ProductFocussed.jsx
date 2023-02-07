import React from "react";
import { db } from "../../config/storebackend.js";
import { doc, documentId, updateDoc } from "firebase/firestore";

import { getItems } from "../../helpers/summonItems.js";
import { useEffect, useState } from "react";
import { cleanDataForFocus } from "../../helpers/cleanDataForFocus.js";

import styles from "./ProductFoccussed.module.scss";
import unFavouriteIcon from "../../assets/Heart_Icon_empty.png";
import favouriteIcon from "../../assets/Heart_Icon_full.png";

const ProductFocussed = (id) => {
  //console.log(id);
  //this just has to get by ID, which is annoying because this is actually the index
  let itemsdata = [];
  const [theProduct, setTheProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
    //toggleFavourite(theProduct, favourite);
    console.log(theProduct);
  };

  const toggleFavourite = (item, toggle) => {
    // const data = { favourited: toggle };
    // const docref = doc(db, "ShopItems",);

    updateDoc();
  };

  useEffect(() => {
    setLoading(true);

    getItems(db)
      .then((response) => {
        if (!response) {
          console.log("could not fetch data the product");
          return;
        }
        itemsdata = response;
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setTheProduct(cleanDataForFocus(id.id, itemsdata));
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>test</h1>
      <div className={styles.aProductCard}>
        {loading ? (
          <p>loading ...</p>
        ) : theProduct.length === 0 ? (
          <p>Oops... That product doesn't exist</p>
        ) : (
          <div className={styles.aProductCard_content}>
            <img
              src={theProduct.imgLink}
              alt={theProduct.name}
              className={styles.aProductCard_content_img}
            />
            <div>
              <div className={styles.aProductCard_content_title}>
                <h2>{theProduct.name}</h2>
              </div>

              <p className={styles.aProductCard_content_price}>
                ${theProduct.price}
              </p>

              <p className={styles.aProductCard_content_available}>
                number available: {theProduct.quantity}
              </p>

              <div className={styles.aProductCard_content_variants}>
                <ul className={styles.aProductCard_content_variantList}>
                  Variants:
                  {theProduct.variants.map((variant) => (
                    <li className={styles.aProductCard_content_variantListItem}>
                      {variant}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <img
                  src={
                    theProduct.favourited === true
                      ? favouriteIcon
                      : unFavouriteIcon
                  }
                  alt="favourite Icon"
                  className={styles.aProductCard_content_favouriteIcon}
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductFocussed;
