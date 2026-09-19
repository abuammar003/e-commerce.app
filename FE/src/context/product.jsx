import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext(null);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function fetchProducts() {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products)
    // console.log(response)
  }
  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <Context.Provider value={{ products, fetchProducts, isLoading, isError }}>
      {children}
    </Context.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => useContext(Context);
