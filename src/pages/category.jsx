import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../context/product";
import ShoppingCard from "../components/card";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

export default function category(product) {
  const { categoryName } = useParams();
  const { products, isLoading, isError } = useProduct();
  console.log(products);

  const filteredProduct = products.filter((p) => {
    return p.category === categoryName;
  });
  function goBack() {
    window.history.back();
  }
  // const navigate = useNavigate();
  if (isLoading) <div>Loading...</div>;

  console.log(filteredProduct);

  useEffect(() => {
    window.scroll(0, 1);
  }, []);

  return (
    <div className="py-4 px-4">
      <div className="flex justify-between items-center mb-8 mt-2">
        <h1 className="text-3xl max-sm:text-2xl uppercase font-semibold">{categoryName}</h1>
        <h3
          className="text-4xl max-sm:text-3xl items-center text-violet-400 underline cursor-pointer"
          onClick={goBack}>
          <MdOutlineKeyboardDoubleArrowLeft />
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
        {filteredProduct.map((product) => {
          const filteredProduct = products.find(
            (item) => item.id === product.id
          );

          return (
            <ShoppingCard
              key={product.id}
              product={product}
              filteredProduct={filteredProduct}
            />
          );
        })}
      </div>
    </div>
  );
}
