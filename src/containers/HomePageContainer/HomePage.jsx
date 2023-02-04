import React from "react";
import CarouselOverflowContainer from "../CarouselOverFlowContainer/CarouselOverflowContainer";

import ProductsGalleryHolder from "../ProductsGalleryHolder/ProductsGalleryHolder";

const HomePage = () => {
  return (
    <>
      <CarouselOverflowContainer />

      {/* So I think we need a grid of all the products here  - clicking one should take you to the product page for that specific product*/}
      <ProductsGalleryHolder />
    </>
  );
};

export default HomePage;
