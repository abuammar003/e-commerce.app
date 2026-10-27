
import React from "react";
import {
  FiShoppingCart,
  FiPlus,
  FiMinus,
} from "react-icons/fi";

const AddToCartButton = ({
  product,
  quantity,
  onAdd,
  onRemove,
  className = "",
}) => {
  const inStock = Number(product.stock) > 0;

  if (quantity?.quantity > 0) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="flex h-12 items-center justify-between overflow-hidden rounded-xl border border-green-600">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => onRemove(product)}
            className="flex h-full w-12 items-center justify-center bg-green-600 text-white transition hover:bg-green-700"
          >
            <FiMinus />
          </button>

          <span className="min-w-12 px-3 text-center font-bold text-gray-800">
            {quantity.quantity}
          </span>

          <button
            type="button"
            aria-label="Increase quantity"
            disabled={quantity.quantity >= product.stock}
            onClick={() => onAdd(product)}
            className="flex h-full w-12 items-center justify-center bg-green-600 text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            <FiPlus />
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      disabled={!inStock}
      onClick={() => onAdd(product)}
      className={`flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700 hover:shadow-md disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none ${className}`}
    >
      <FiShoppingCart className="text-lg" />
      {inStock ? "Add to Cart" : "Out of Stock"}
    </button>
  );
};

export default AddToCartButton;
