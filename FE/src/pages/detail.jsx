
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../context/product";
import { useCart } from "../context/CartContext";
import AddToCartButton from "../components/addToCartButton";
import { RxCrossCircled } from "react-icons/rx";
import {
  FiStar,
  FiTruck,
  FiShield,
  FiRotateCcw,
  FiPackage,
} from "react-icons/fi";

const ShoppingDetail = () => {
  const { products = [] } = useProduct();
  const {
    cartItems = [],
    handleAddToCart,
    handleRemoveFromCart,
  } = useCart();

  const { id } = useParams();
  const navigate = useNavigate();

  const productId = Number(id);
  const product = products.find((item) => item.id === productId);
  const quantity = cartItems.find((item) => item.id === productId);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <FiPackage className="text-6xl text-gray-300 mb-4" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Product Not Found
        </h1>
        <p className="text-gray-500 mt-2">
          This product may be unavailable or no longer exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const inStock = Number(product.stock) > 0;
  const rating = Number(product.rating);
  const discount = Number(product.discountPercentage) || 0;

  return (
    <main className="min-h-screen bg-[#f5f7f6] px-2 py-2 sm:px-4 sm:py-4 lg:px-6">

      <div className="mx-auto max-w-6xl">

        {/* Product Container */}
        <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
         
          {/* Close Button */}
          <button
            onClick={goBack}
            aria-label="Go back"
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:bg-red-50 hover:text-red-500 sm:right-5 sm:top-5"
          >
            <RxCrossCircled className="text-2xl" />
          </button>

          <div className="grid grid-cols-1 gap-6 p-2 sm:p-4 md:gap-6 md:p-6 lg:grid-cols-2 lg:p-8">
            
            {/* Product Image */}
            <div className="flex min-w-0 flex-col gap-4">
              <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-2xl bg-gray-50 p-3 sm:min-h-[350px] sm:p-8">
                {discount > 0 && (
                  <span className="absolute left-4 top-4 z-[1] rounded-lg bg-green-600 px-3 py-1.5 text-sm font-bold text-white">
                    {discount}% OFF
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[300px] w-full object-contain transition duration-500 hover:scale-105 sm:max-h-[380px]"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 px-2 py-4 text-center">
                  <FiTruck className="text-xl text-green-600 sm:text-2xl" />
                  <span className="text-xs font-medium text-gray-600 sm:text-sm">
                    Delivery
                  </span>
                  {/* <span className="text-sm font-medium text-gray-600 sm:text-sm" >7 Days</span> */}
                </div>
                <div className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 px-2 py-4 text-center">
                  <FiShield className="text-xl text-green-600 sm:text-2xl" />
                  <span className="text-xs font-medium text-gray-600 sm:text-sm">
                    Quality Assured
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 px-2 py-4 text-center">
                  <FiRotateCcw className="text-xl text-green-600 sm:text-2xl" />
                  <span className="text-xs font-medium text-gray-600 sm:text-sm">
                    Easy Support
                  </span>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="flex min-w-0 flex-col pt-1 sm:pt-3">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-green-700 sm:text-sm">
                {product.brand || "Bazaar Collection"}
              </p>

              <h1 className="pr-8 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                {product.name}
              </h1>

              {/* Rating */}
              {Number.isFinite(rating) && rating > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 rounded-lg bg-green-600 px-2.5 py-1 text-sm font-semibold text-white">
                    {rating.toFixed(1)}
                    <FiStar className="fill-current" />
                  </span>
                  <span className="text-sm text-gray-500">
                    Product Rating
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="mt-6 border-b border-gray-100 pb-6">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    ${Number(product.price).toFixed(2)}
                  </span>

                  {discount > 0 && (
                    <span className="text-sm font-medium text-green-700">
                      {discount}% discount
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Price shown is for one item.
                </p>
              </div>

              {/* Description */}
              <div className="mt-5">
                <h2 className="mb-2 text-base font-semibold text-gray-900">
                  Product Description
                </h2>
                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  {product.description ||
                    "Product details are currently unavailable."}
                </p>
              </div>

              {/* Stock Status */}
              <div className="mt-5 flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    inStock ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <span
                  className={`text-sm font-semibold ${
                    inStock ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {inStock
                    ? `${product.stock} items available`
                    : "Currently out of stock"}
                </span>
              </div>

              {/* Cart Controls */}
              <div className="flex justify-center items-center mt-2"
                    onClick={(e) => e.stopPropagation()}
              >
                <AddToCartButton
                  product={product}
                  quantity={quantity}
                  onAdd={handleAddToCart}
                  onRemove={handleRemoveFromCart}
                />
              </div>

              <p className="mt-3 text-center text-xs leading-5 text-gray-400 sm:text-left">
                Secure shopping experience with Bazaar.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ShoppingDetail;


