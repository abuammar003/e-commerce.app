import React from "react";
import { useParams } from "react-router";
import { useProduct } from "../../context/product";
import { useCart } from "../AddToCart/CartContext";
import ShoppingCard from "../../components/card";

const AddToCart = () => {
  const { id } = useParams();
  const { products } = useProduct();
  const { addToCart } = useCart(); 
  
  const productId = Number(id);
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div className="text-3xl text-center mt-60">Product Not Found!</div>;
  }

  const handleAddToCart = (productData) => {
    addToCart({
      id: product.id,
      title: product.title,
      image: product.thumbnail,
      originalPrice: product.price,
      quantity: productData.quantity,
    });
  };

  return (
    <div className="flex justify-center p-5">
      <ShoppingCard
        id={product.id}
        image={product.thumbnail}
        title={product.title}
        originalPrice={product.price}
        discountPrice={product.discountPercentage}
        addToCart={handleAddToCart} 
      />
   
    </div>
  );
};

export default AddToCart;
