import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemByID, getItems } from "../../helpers/summonItems";
import { cleanDataForFocus } from "../../helpers/cleanDataForFocus";

import ProductFocussed from "../../components/ProductFocussed/ProductFocussed";

//this needs to be reworked a little - I don't think the state is ever used, or the useEffect
const ProductsContainer = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const id = useParams();

  useEffect(() => {
    setLoading(true);
    getItems() //this goes to summon
      .then((response) => {
        if (!response) {
          console.log("could not fetch data the product");
          return;
        }
        setProduct(cleanDataForFocus(id.id, response));
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>loading ...</p>
      ) : product.length === 0 ? (
        <p>Oops... I don't have that product. Sorry about that!</p>
      ) : (
        <ProductFocussed item={product} key={id.id} />
      )}
    </>
  );
};

export default ProductsContainer;
