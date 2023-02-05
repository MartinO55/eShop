import React from "react";
import { db } from "../../config/storebackend.js";
import { getItems } from "../../helpers/summonItems.js";
import { useEffect, useState } from "react";
import { cleanDataForFocus } from "../../helpers/cleanDataForFocus.js";

import styles from "./ProductFoccussed.module.scss";

const ProductFocussed = (id) => {
  //this just has to get by ID, which is annoying because this is actually the index
  let itemsdata = [];
  const [theProduct, setTheProduct] = useState();

  useEffect(() => {
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
        //setItems(itemsdata);
        setTheProduct(cleanDataForFocus(id, itemsdata));
        //console.log(itemsdata);
      });
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default ProductFocussed;
