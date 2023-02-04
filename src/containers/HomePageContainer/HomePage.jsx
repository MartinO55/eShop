import React from "react";
import CarouselOverflowContainer from "../CarouselOverFlowContainer/CarouselOverflowContainer";
import ProductGallery from "../../components/ProductGallery/ProductGallery";

const HomePage = () => {
  return (
    <>
      <CarouselOverflowContainer />

      {/* So I think we need a grid of all the products here  - clicking one should take you to the product page for that specific product*/}
      <ProductGallery />
    </>
  );
};

export default HomePage;
