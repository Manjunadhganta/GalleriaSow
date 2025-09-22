"use client";
import { useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "../../lib/utils";

export const ParallaxScrollSecond = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use window scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // trigger parallax as container enters viewport
  });

  const springConfig = { stiffness: 200, damping: 40 };

  // Parallax transforms
  const translateYFirst = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), springConfig);
  const translateXFirst = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const rotateZFirst = useSpring(useTransform(scrollYProgress, [0, 1], [0, -10]), springConfig);

  const translateYThird = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), springConfig);
  const translateXThird = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), springConfig);
  const rotateZThird = useSpring(useTransform(scrollYProgress, [0, 1], [0, 10]), springConfig);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div ref={containerRef} className={cn("w-full py-28 px-4 md:px-10", className)}>
        <div className="space text-center">
          <h1 className="text-white text-3xl">Look Who's <span className="text-5xl cursive font-bold text-pink-600">Slaying😍</span></h1>
        </div> 
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 max-w-4xl mx-auto gap-10 mt-22">
        {/* First Column */}
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              key={"col1-" + idx}
              style={{ y: translateYFirst, x: translateXFirst, rotateZ: rotateZFirst }}
            >
              <img
                src={el}
                className="h-64 w-full md:h-80 object-cover rounded-lg"
                alt={`image-${idx}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Second Column */}
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"col2-" + idx}>
              <img
                src={el}
                className="h-64 w-full md:h-80 object-cover rounded-lg"
                alt={`image-${idx}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Third Column */}
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              key={"col3-" + idx}
              style={{ y: translateYThird, x: translateXThird, rotateZ: rotateZThird }}
            >
              <img
                src={el}
                className="h-64 w-full md:h-80 object-cover rounded-lg"
                alt={`image-${idx}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
