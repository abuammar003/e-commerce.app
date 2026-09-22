import React from "react";
import { useNavigate, useParams } from "react-router";
import { useProduct } from "../context/product";
import ShoppingCard from "../components/Card";
import { RxCrossCircled } from "react-icons/rx";


const ShoppingDetail = () => {
  const { id } = useParams();
  console.log(id);
  const { products } = useProduct(); 
  console.log(products[id]);

  const productId = Number(id);

  const product = products.find((product) => product.id === productId);

  if (!product) {
   return <div className="text-3xl text-center mt-60">Product Not Found!</div>
  }

  function goBack() {
    window.history.back();
  }


  return (

    <div className="max-sm:h-auto sm:h-[30rem] pt-8 px-6">
      
      <div className="relative border">
        
        <span className="absolute top-4 right-4">
            <RxCrossCircled className="text-2xl text-black cursor-pointer" onClick={goBack}/>
        </span>

        <div className="flex justify-center p-2 mb-6 items-center">
         
          <div className="flex flex-col justify-center items-center text-center">
            <img src={product.image} alt={product.name} className="max-sm:h-44 sm:h-52 items-center" />
            <h2 className="max-sm:text-xl sm:text-2xl mt-4">{product.name}</h2>
            <p className="max-sm:text-lg sm:text-xl text-gray-600 mt-2">{product.description}</p>
            <div className="mt-2">
              <span className="text-2xl font-bold">${product.price}</span>
            </div>

            
            {product.discountPercentage && (
              <p className="text-xl text-green-500 mt-2">
                {product.discountPercentage}% OFF
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingDetail;





