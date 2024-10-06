import React, { useState, useEffect } from "react";
import car1 from "/imgs/car1.png";
import car2 from "/imgs/car2.png";
import car3 from "/imgs/car3.png";
import car4 from "/imgs/car4.png";

const Carousel = () => {
  const imgs = [car1, car2, car3, car4];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Duplicate the first and last image for smooth transitions
  const extendedImgs = [imgs[imgs.length - 1], ...imgs, imgs[0]];

//   const handleNext = () => {
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   };

//   const handlePrev = () => {
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => prevIndex - 1);
//   };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // Adjust for the duplicated first and last images
  };

  // Handle wrapping effect for infinite scrolling
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);

        if (currentIndex === extendedImgs.length - 1) {
          setCurrentIndex(1); // Wrap back to the first real image
        } else if (currentIndex === 0) {
          setCurrentIndex(imgs.length); // Wrap to the last real image
        }
      }, 700); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, extendedImgs.length, imgs.length, isTransitioning]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-700 ease-in-out ${
            isTransitioning ? "" : "transition-none"
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {extendedImgs.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Car ${index + 1}`}
              className="sm:w-[97%] lg:w-full mx-auto object-contain"
            />
          ))}
        </div>
      </div>

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imgs.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index + 1 ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
