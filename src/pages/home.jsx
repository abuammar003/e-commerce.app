import React, { useEffect } from "react";
import ShoppingBanner from "../components/banner";
import ShoppingCard from "../components/card";
import { useProduct } from "../context/product";
import { Loader } from "lucide-react";
import { useCart } from "../context/CartContext";

const ShoppingHome = () => {
  const { products, isLoading, isError } = useProduct();

  useEffect(() => { 
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const slider = document.getElementById("product-slider");

    nextBtn?.addEventListener("click", () => {
      slider.scrollBy({ left: 320, behavior: "smooth" });
    });

    prevBtn?.addEventListener("click", () => {
      slider.scrollBy({ left: -320, behavior: "smooth" });
    });

    return () => {
      nextBtn?.removeEventListener("click", () => {});
      prevBtn?.removeEventListener("click", () => {});
    };
  }, []);

  if (isLoading) <div>Loading...</div>;
  if (isError)
    return <div className="text-center py-8 text-red-500">{isError}</div>;

  return (
    <div>
      <ShoppingBanner />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="my-8">
          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <ShoppingCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ShoppingHome;
