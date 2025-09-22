// "use client";
// import React from "react";
// import { HeroParallax } from "../../components/ui/hero-parallax";

// type SecondProps = {
//   images: string[];
// };

// const Second: React.FC<SecondProps> = ({ images }) => {
//   // Convert each image into a product object
//   const products = images.map((img, i) => ({
//     title: `Image ${i + 1}`,
//     link: "#",
//     thumbnail: img,
//   }));

//   return <HeroParallax products={products} />;
// };

// export default Second;


"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";

type SecondProps = {
  images: string[]; // Array of image URLs
};

const Second: React.FC<SecondProps> = ({ images }) => {
  // Map uploaded images to HeroParallax format
  const products = images.map((url, idx) => ({
    title: `Image ${idx + 1}`,
    link: "#",
    thumbnail: url,
  }));

  return <HeroParallax products={products} />;
};

export default Second;
