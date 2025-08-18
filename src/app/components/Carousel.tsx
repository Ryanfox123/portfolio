"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/ncgroup.png", alt: "Northcoders group picture" },
  { src: "/nc-cert.png", alt: "Bootcamp certificate" },
  { src: "/turkey.png", alt: "Holiday picture" },
  { src: "/ac-selfie.png", alt: "Construction selfie" },
];

function Carousel() {
  const [currImageIndex, setCurrImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative lg:w-5/5 h-[400px] sm:h-[500px] lg:h-[725px] overflow-hidden rounded-2xl shadow-2xl">
      {images.map((image, idx) => (
        <Image
          key={idx}
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover rounded-2xl absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrImageIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currImageIndex ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
