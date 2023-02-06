import React from "react";
import { db } from "../../config/storebackend.js";
import { getItems } from "../../helpers/summonItems.js";
import { useEffect, useState } from "react";
import { cleanDataForFocus } from "../../helpers/cleanDataForFocus.js";

import styles from "./ProductFoccussed.module.scss";

const ProductFocussed = (id) => {
  console.log(id);
  //this just has to get by ID, which is annoying because this is actually the index
  let itemsdata = [];
  const [theProduct, setTheProduct] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.log(itemsdata[id.id]);
        console.log(id);
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
          <p>Oops...</p>
        ) : (
          <div>{theProduct.name}</div>
        )}
      </div>
    </>
  );
};

export default ProductFocussed;
