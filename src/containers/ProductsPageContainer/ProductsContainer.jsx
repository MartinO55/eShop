import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductFocussed from "../../components/ProductFocussed/ProductFocussed";

const ProductsContainer = () => {
  const [targetProduct, setTargetProduct] = useState(null);
  const id = useParams();

  useEffect(() => {
    setTargetProduct(id.id);
  });
  console.log(id.id);

  return (
    <>
      <ProductFocussed id={targetProduct} />
    </>
  );
};

export default ProductsContainer;
