"use client";
import React from "react";
import { ParallaxScrollSecond } from "../../components/ui/parallax-scroll-2";

type ThirdProps = {
  images: string[]; // URLs of uploaded images
};

const Third: React.FC<ThirdProps> = ({ images }) => {
  return <ParallaxScrollSecond images={images} />;
};

export default Third;
