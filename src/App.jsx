import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/Navbar/Navbar.jsx";
import HomePage from "./containers/HomePageContainer/HomePage";
import NotFound from "./components/NotFound/NotFound";
import ProductsContainer from "./containers/ProductsPageContainer/ProductsContainer";

import ProductsGalleryHolder from "./containers/ProductsGalleryHolder/ProductsGalleryHolder.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/products" element={<ProductsGalleryHolder />} />
          <Route path="/products/:id" element={<ProductsContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
