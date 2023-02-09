import React from "react";
import { db } from "../../config/storebackend.js";
import { doc, updateDoc } from "firebase/firestore";

import { getItems } from "../../helpers/summonItems.js";
import { useEffect, useState } from "react";
import { cleanDataForFocus } from "../../helpers/cleanDataForFocus.js";

import styles from "./ProductFoccussed.module.scss";
import unFavouriteIcon from "../../assets/Heart_Icon_empty.png"; //change to svg
import favouriteIcon from "../../assets/Heart_Icon_full.png";

const ProductFocussed = (id) => {
  //This might be too much code at this level? Maybe the data fetch can go up. Also, I think we are doing too many fetches.
  //this just has to get by ID, which is annoying because this is actually the index
  let itemsdata = [];
  const [theProduct, setTheProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
    toggleFavourite(theProduct, !favourite); //I am not 100% this is a good idea, or that the state is needed
  };

  const toggleFavourite = (item, toggle) => {
    const data = { favourited: toggle };
    const docref = doc(db, "ShopItems", item.ID);

    updateDoc(docref, data)
      .then((docref) => {
        console.log("updated Favourites: " + item.name + "with " + toggle);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    //this goes up one

    setLoading(true);

    getItems(db) //this goes to summon
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
          <p>Oops... I don't have that product. Sorry about that!</p>
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
        )}
      </div>
    </>
  );
};

export default ProductFocussed;
