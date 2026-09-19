import React, {useState, useEffect} from 'react'

const ShoppingBanner = () => {
   const slides = [
     "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4ae2635996d58d9d.jpg?q=20",
     "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cec883a33fc476d0.jpeg?q=20",
     "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f4a793ca0647bb43.jpg?q=20",
     "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5448938c117980ac.jpeg?q=20",
     "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cf6648015611c6b0.jpg?q=20",
     "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/fcad4ad7c0f9a001.jpeg?q=20",
   ];
 
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  
  
  return (
    <div>
    <div className="max-sm:h-[13rem] sm:h-[18rem] md:h-[20rem] lg:h-[22rem] xl:h-[25rem] px-8 pt-8 mb-1">
    
      <img src={slides[currentSlide]} alt="" className="max-sm:h-full max-sm:bg-cover max-sm:bg-center sm:h-full md:h-full lg:h-full xl:h-full" />
     
    </div>
    </div>



  );
}

export default ShoppingBanner;
