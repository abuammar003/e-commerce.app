import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      
      // const response = await axios.get("https://dummyjson.com/products");     //API taken from Dummy JSON.

          const response = await axios.get(
              "http://localhost:8000/api/products/"       //API Taking from Backend.
          );

            setProducts(response.data);
          

        } catch (error) {
            console.log(error);
            setIsError(true);

        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
      fetchProducts();
    }, []);

    console.log(products);



  return (
    <ProductContext.Provider value={{ products, fetchProducts, isLoading, isError }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

// export {ProductContext};

export const useProduct = () => useContext(ProductContext);
