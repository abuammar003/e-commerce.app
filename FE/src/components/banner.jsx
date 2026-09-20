

import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ShoppingBanner = () => {
  const slides = [
    "https://images.pexels.com/photos/6214454/pexels-photo-6214454.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/6214480/pexels-photo-6214480.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3735625/pexels-photo-3735625.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/14770812/pexels-photo-14770812.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="px-3 sm:px-5 md:px-8 py-4">
      <div className="relative max-w-screen-2xl mx-auto overflow-hidden rounded-xl">

        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full min-w-full h-[180px] sm:h-[230px] md:h-[280px] lg:h-[330px] object-cover"
            />
          ))}
        </div>

        {/* Previous */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2
          bg-white/90 rounded-full p-2 shadow"
        >
          <FiChevronLeft />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2
          bg-white/90 rounded-full p-2 shadow"
        >
          <FiChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index
                  ? "w-6 bg-green-600"
                  : "w-2 bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ShoppingBanner;
















    // ====================== OLD Slider Design ==============================

// import React, {useState, useEffect} from 'react'

// const ShoppingBanner = () => {
//    const slides = [
//      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4ae2635996d58d9d.jpg?q=20",
//      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cec883a33fc476d0.jpeg?q=20",
//      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f4a793ca0647bb43.jpg?q=20",
//      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5448938c117980ac.jpeg?q=20",
//      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cf6648015611c6b0.jpg?q=20",
//      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/fcad4ad7c0f9a001.jpeg?q=20",
//    ];
 
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

  
  
//   return (
//     <div>
//     <div className="max-sm:h-[13rem] sm:h-[18rem] md:h-[20rem] lg:h-[22rem] xl:h-[25rem] px-8 pt-8 mb-1">
    
//       <img src={slides[currentSlide]} alt="" className="max-sm:h-full max-sm:bg-cover max-sm:bg-center sm:h-full md:h-full lg:h-full xl:h-full" />
     
//     </div>
//     </div>



//   );
// }

// export default ShoppingBanner;
