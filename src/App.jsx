import React from "react";
import { Route, Routes } from "react-router";
import ShoppingHome from "./pages/home";
import ShoppingHeader from "./components/header";
import ShoppingDetail from "./pages/detail";
import ShoppingCart from "./pages/AddToCart/shoppingCart";
import { CartProvider } from "./context/CartContext";
import CategoryProducts from "./pages/category";
import Listing from "./pages/listing";

const App = () => {
  return (
    <>
      <CartProvider>
      <ShoppingHeader />
        <Routes>
          <Route path="/" element={<ShoppingHome />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/listing/:id" element={<ShoppingDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/category/:categoryName" element={<CategoryProducts />} /> 

        </Routes>
      </CartProvider>
     
    </>
  );
};

export default App;
