import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductFocussed from "../../components/ProductFocussed/ProductFocussed";

const ProductsContainer = () => {
  const [targetProduct, setTargetProduct] = useState(0);
  const id = useParams();

  useEffect(() => {
    setTargetProduct(parseInt(id.id));
  }, []);

  return (
    <>
      {console.log(typeof id.id)}
      <ProductFocussed id={id.id} />
    </>
  );
};

export default ProductsContainer;
