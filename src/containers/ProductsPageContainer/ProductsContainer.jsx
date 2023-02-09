import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductFocussed from "../../components/ProductFocussed/ProductFocussed";

//this needs to be reworked a little - I don't think the state is ever used
const ProductsContainer = () => {
  const [targetProduct, setTargetProduct] = useState(0);
  const id = useParams();

  useEffect(() => {
    setTargetProduct(parseInt(id.id));
  }, []);

  return (
    <>
      <ProductFocussed id={id.id} />
    </>
  );
};

export default ProductsContainer;
