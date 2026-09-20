import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  FiHeart,
  FiShoppingCart,
  FiPlus,
  FiMinus,
  FiStar,
} from "react-icons/fi";

const ShoppingCard = ({ product }) => {
  const { cartItems, handleAddToCart, handleRemoveFromCart } = useCart();
  const navigate = useNavigate();

  const quantity = cartItems.find((item) => item.id === product.id);

  // Calculate discounted price
  // const discountedPrice =
  //   product.discountPercentage > 0
  //     ? product.price - (product.price * product.discountPercentage) / 100
  //     : product.price;

  return (
    <div
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden
      hover:border-green-300 hover:shadow-xl transition-all duration-300 cursor-pointer
      flex flex-col h-full"
      onClick={() => navigate(`/listing/${product.id}`)}
    >
      {/* ================= IMAGE SECTION ================= */}
      <div className="relative bg-gray-50 h-60 flex items-center justify-center overflow-hidden">

        {/* DISCOUNT BADGE */}
        {/* {product.discountPercentage > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {Math.round(product.discountPercentage)}% OFF
          </span>
        )} */}

        {/* WISHLIST BUTTON */}
        <button
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white
          flex items-center justify-center shadow-sm text-gray-500
          hover:text-red-500 hover:bg-red-50 transition-all duration-200"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <FiHeart className="text-lg" />
        </button>

        {/* PRODUCT IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-2
          group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* ================= PRODUCT DETAILS ================= */}
      <div className="p-4 flex flex-col flex-1">

        {/* CATEGORY */}
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
          {product.category}
        </p>

        {/* PRODUCT NAME */}
        <h2 className="text-base font-semibold text-gray-800 leading-6 line-clamp-2 min-h-[40px]">
          {product.name}
        </h2>

        {/* RATING */}
        <div className="flex items-center gap-1 mt-1">
          <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded text-xs font-semibold">
            <span>{product.rating}</span>
            <FiStar className="fill-current text-[11px]" />
          </div>

          <span className="text-xs text-gray-400">
            Customer Rating
          </span>
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          {/* <span className="text-xl font-bold text-gray-900">
            ${discountedPrice.toFixed(2)}
          </span> */}

          {/* {product.discountPercentage > 0 && (
            <>
              <del className="text-sm text-gray-400">
                ${Number(product.price).toFixed(2)}
              </del>

              <span className="text-xs font-semibold text-green-600">
                Save {Math.round(product.discountPercentage)}%
              </span>
            </>
          )} */}
        </div>

        {/* STOCK */}
        {/* <div className="mt-2 mb-2">
          {product.stock > 0 ? (
            <span className="text-xs text-green-600 font-medium">
              ✓ In Stock
            </span>
          ) : (
            <span className="text-xs text-red-500 font-medium">
              Out of Stock
            </span>
          )}
        </div> */}

        {/* ================= CART BUTTON ================= */}
        <div className="mt-auto">

          {quantity?.quantity > 0 ? (
            <div
              className="flex items-center justify-between border border-green-600
              rounded-xl overflow-hidden h-11"
            >
              {/* MINUS */}
              <button
                className="w-12 h-full flex items-center justify-center
                bg-green-600 text-white hover:bg-green-700 transition"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleRemoveFromCart(product);
                }}
              >
                <FiMinus />
              </button>

              {/* QUANTITY */}
              <span className="flex-1 text-center font-bold text-gray-800">
                {quantity.quantity}
              </span>

              {/* PLUS */}
              <button
                className="w-12 h-full flex items-center justify-center
                bg-green-600 text-white hover:bg-green-700 transition"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                <FiPlus />
              </button>
            </div>
          ) : (
            <button
              disabled={product.stock <= 0}
              className={`w-full h-11 rounded-xl flex items-center justify-center
              gap-2 font-semibold transition-all duration-200
              ${
                product.stock > 0
                  ? "bg-green-600 text-white hover:bg-green-700 hover:shadow-md"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                if (product.stock > 0) {
                  handleAddToCart(product);
                }
              }}
            >
              <FiShoppingCart className="text-lg" />

              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;











  // ====================== OLD Card Design =========================

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { MdRemoveShoppingCart } from "react-icons/md";

// const ShoppingCard = ({ product, filterProductFromCart }) => { 

//   const { cartItems, handleAddToCart, handleRemoveFromCart } = useCart();
//   const quantity = cartItems.find((item) => item.id === product.id);
//   const navigate = useNavigate();

//   return (
//     <div
//       className="pb-6 px-2 border text-center rounded-lg "
//       onClick={() => navigate(`/listing/${product.id}`)}
//     >
//       <div className="flex flex-col justify-between">
//         <div className="flex flex-col items-center">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="h-48 cursor-pointer"
//           />
//           <h1 className="text-lg md:text-xl ">{product.name.slice(0, 15)}</h1>
//         </div>
//         <div className="flex gap-2 items-center justify-center mb-1">
//           <span className="text-xl">${product.price}</span>
//           {/* <del className="text-sm">{product.discountPercentage}%</del> */}
//         </div>
//       </div>

//       {quantity?.quantity > 0 ? (
//         <div className="px-1 flex justify-center mt-5 items-center">
//           <div className="flex justify-around py-0.5 rounded items-cente bg-green-600">
//             <button
//               className="px-2 text-xl pb-0.5 rounded text-white"
//               onClick={(e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 handleRemoveFromCart(product);
//               }}
//             >
//               -
//             </button>
//             <span className="items-center rounded text-xl px-2 bg-white">
//               {quantity?.quantity}
//             </span>
//             <button
//               className="px-2 text-xl pb-0.5 rounded text-white"
//               onClick={(e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 handleAddToCart(product);
//               }}
//             >
//               +
//             </button>
//           </div>
//         </div>
//       ) : (
//         <button
//           className="px-3 py-1 mt-5 rounded-lg bg-green-600 text-white"
//           onClick={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             handleAddToCart(product);
//           }}
//         >
//           Add To Cart
//         </button>
//       )}
//     </div>
//   );
// };

// export default ShoppingCard;
