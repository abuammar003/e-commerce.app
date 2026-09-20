import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { MdRemoveShoppingCart } from "react-icons/md";

const ShoppingCard = ({ product, filterProductFromCart }) => { 

  const { cartItems, handleAddToCart, handleRemoveFromCart } = useCart();
  const quantity = cartItems.find((item) => item.id === product.id);
  const navigate = useNavigate();

  return (
    <div
      className="pb-6 px-2 border text-center rounded-lg "
      onClick={() => navigate(`/listing/${product.id}`)}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-48 cursor-pointer"
          />
          <h1 className="text-lg md:text-xl ">{product.name.slice(0, 15)}</h1>
        </div>
        <div className="flex gap-2 items-center justify-center mb-1">
          <span className="text-xl">${product.price}</span>
          {/* <del className="text-sm">{product.discountPercentage}%</del> */}
        </div>
      </div>

      {quantity?.quantity > 0 ? (
        <div className="px-1 flex justify-center mt-5 items-center">
          <div className="flex justify-around py-0.5 rounded items-cente bg-green-600">
            <button
              className="px-2 text-xl pb-0.5 rounded text-white"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleRemoveFromCart(product);
              }}
            >
              -
            </button>
            <span className="items-center rounded text-xl px-2 bg-white">
              {quantity?.quantity}
            </span>
            <button
              className="px-2 text-xl pb-0.5 rounded text-white"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart(product);
              }}
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <button
          className="px-3 py-1 mt-5 rounded-lg bg-green-600 text-white"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleAddToCart(product);
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default ShoppingCard;
