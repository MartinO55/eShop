import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../helpers/summonItems";
import { cleanDataForFocus } from "../../helpers/cleanDataForFocus";
import styles from "./ProductsContainer.module.scss";

import ProductFocussed from "../../components/ProductFocussed/ProductFocussed";

const ProductsContainer = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const id = useParams();

  useEffect(() => {
    setLoading(true);
    getItems() //this should go to get by ID. But all I have is the index number, not the ID hexadecimal, and to get the latter, I need to get everything
      .then((response) => {
        if (!response) {
          console.log("could not fetch data for the product");
          return;
        }
        setProduct(cleanDataForFocus(id.id, response));
      })
      .catch(setError) //Alex says this works
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p className={styles.Productloading}>loading ...</p>
      ) : product.length === 0 ? (
        <p className={styles.noProduct}>
          Oops... I don't have that product. Sorry about that!
        </p>
      ) : (
        <ProductFocussed item={product} key={id.id} />
      )}
    </>
  );
};

export default ProductsContainer;
