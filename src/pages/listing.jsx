import React from "react";
import { useProduct } from "../context/product";
import ShoppingCard from "../components/card";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight  } from "react-icons/md";


export default function Listing() {
  const { products, isLoading, isError} = useProduct();

  const filterCategory = products.map((prod) => {
    return prod.category;
  });
  const navigate = useNavigate();
 
  const categoryList = [...new Set(filterCategory)];
  if (isLoading) <div>Loading...</div>;
  if (isError) <div>{isError}</div>;

  return (
    <div>
      {categoryList.map((category) => {
        return (
          <div key={category} className="py-8 px-6 border-b-8">
              <div className="flex justify-between items-center mb-8 mt-2">
                <h1 className="text-3xl max-sm:text-2xl uppercase font-semibold cursor-pointer" onClick={()=> navigate(`/category/${category}`)}>{category}</h1>
                <h3 className="flex text-4xl max-sm:text-3xl items-center text-violet-400 underline cursor-pointer" onClick={()=> navigate(`/category/${category}`)}><MdOutlineKeyboardDoubleArrowRight  /></h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
                {products.filter((product) => product.category === category).slice(0, 5).map((product) => (
                  <ShoppingCard 
                    key={product.id} 
                    product={product} />
                ))}
              </div>

          </div>
        )
      })}
    </div>
  );
}
