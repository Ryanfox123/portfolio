"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { image } from "framer-motion/client";

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
    <div className="w-2/5 h-[800px] relative overflow-hidden my-auto">
      <Image
        src={images[currImageIndex].src}
        alt={images[currImageIndex].alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg transition-opacity duration-500"
      />
    </div>
  );
}

export default Carousel;
