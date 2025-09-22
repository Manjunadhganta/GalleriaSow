// "use client";
// import React from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   MotionValue,
// } from "motion/react";



// export const HeroParallax = ({
//   products,
// }: {
//   products: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   }[];
// }) => {
//   const firstRow = products.slice(0, 5);
//   const secondRow = products.slice(5, 10);
//   const thirdRow = products.slice(10, 15);
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

//   const translateX = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, 1000]),
//     springConfig
//   );
//   const translateXReverse = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, -1000]),
//     springConfig
//   );
//   const rotateX = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [15, 0]),
//     springConfig
//   );
//   const opacity = useSpring(
//     useTransform(scrollYProgress, [0, 0.5], [0.5, 1]),
//     springConfig
//   );
//   const rotateZ = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
//     springConfig
//   );
//   const translateY = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
//     springConfig
//   );
//   return (
//     <div
//       ref={ref}
//       className="h-[320vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
//     >
//       <Header />
//       <motion.div
//         style={{
//           rotateX,
//           rotateZ,
//           translateY,
//           opacity,
//         }}
//         className=""
//       >
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
//           {firstRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-row  mb-20 space-x-20 ">
//           {secondRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateXReverse}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
//           {thirdRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export const Header = () => {
//   return (
//     <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
//       <h1 className="text-2xl md:text-8xl font-bold dark:text-white">
//         Manjunadh <br /> Universe
//       </h1>
//       <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
//         Dive in by scrolling down — the universe of Sow awaits, filled with moments, memories, and endless wonder
//       </p>
//     </div>
//   );
// };

// export const ProductCard = ({
//   product,
//   translate,
// }: {
//   product: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   };
//   translate: MotionValue<number>;
// }) => {
//   return (
//     <motion.div
//       style={{
//         x: translate,
//       }}
//       whileHover={{
//         y: -20,
//       }}
//       key={product.title}
//       className="group/product h-96 w-[30rem] relative shrink-0"
//     >
//       {/* Render image without link */}
//       <img
//         src={product.thumbnail}
//         height="600"
//         width="600"
//         className="object-cover object-left-top absolute h-full w-full inset-0"
//         alt={product.title}
//       />

//       <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
//       <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
//         {product.title}
//       </h2>
//     </motion.div>
//   );
// };


// "use client";
// import React from "react";
// import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";

// export const HeroParallax = ({
//   products,
// }: {
//   products: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   }[];
// }) => {
//   const firstRow = products.slice(0, 5);
//   const secondRow = products.slice(5, 10);
//   const thirdRow = products.slice(10, 15);

//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

//   const translateXScroll = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, 500]),
//     springConfig
//   );
//   const translateXScrollReverse = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, -500]),
//     springConfig
//   );

//   // Continuous marquee animation
//   const marqueeSpeed = 1000; // px per scroll
//   const marqueeLoop = {
//     animate: { x: ["0%", "30%"] },
//     transition: { repeat: Infinity, duration: 30, ease: "linear" },
//   };

//   const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
//   const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
//   const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
//   const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [0.5, 1]), springConfig);

//   return (
//     <div
//       ref={ref}
//       className="h-[370vh] md:h-[320vh] py-40  overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
//     >
//       <Header />
//       <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
//         {/* First Row */}
//         <motion.div
//           className="flex flex-row-reverse space-x-reverse space-x-20 mb-20"
//           {...marqueeLoop}
//         >
//           {[...firstRow, ...firstRow].map((product) => (
//             <ProductCard key={product.title} product={product} translate={translateXScroll} />
//           ))}
//         </motion.div>

//         {/* Second Row */}
//         <motion.div className="flex flex-row mb-20 space-x-20" {...marqueeLoop}>
//           {[...secondRow, ...secondRow].map((product) => (
//             <ProductCard key={product.title} product={product} translate={translateXScrollReverse} />
//           ))}
//         </motion.div>

//         {/* Third Row */}
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-20" {...marqueeLoop}>
//           {[...thirdRow, ...thirdRow].map((product) => (
//             <ProductCard key={product.title} product={product} translate={translateXScroll} />
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export const Header = () => (
//   <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
//     <h1 className="text-2xl md:text-8xl font-bold dark:text-white">Manjunadh <br /> Universe</h1>
//     <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
//       Dive in by scrolling down — the universe of Sow awaits, filled with moments, memories, and endless wonder
//     </p>
//   </div>
// );

// export const ProductCard = ({
//   product,
//   translate,
// }: {
//   product: { title: string; link: string; thumbnail: string };
//   translate: MotionValue<number>;
// }) => (
//   <motion.div
//     style={{ x: translate }}
//     whileHover={{ y: -20 }}
//     className="group/product h-96 w-[30rem] relative shrink-0"
//   >
//     <img
//       src={product.thumbnail}
//       height="600"
//       width="600"
//       className="object-cover object-left-top absolute h-full w-full inset-0"
//       alt={product.title}
//     />
//     <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" />
//     <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
//       {product.title}
//     </h2>
//   </motion.div>
// );

"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  // Split products into 3 rows
  const rowCount = 3;
  const rowSize = Math.ceil(products.length / rowCount);
  const firstRow = products.slice(0, rowSize);
  const secondRow = products.slice(rowSize, rowSize * 2);
  const thirdRow = products.slice(rowSize * 2, rowSize * 3);

  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Scroll-based motion
  const translateXScroll = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXScrollReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );

  // Parallax + opacity for header
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [0.5, 1]), springConfig);

  // Continuous marquee animation
  const marqueeLoop = {
    animate: { x: ["0%", "30%"] },
    transition: { repeat: Infinity, duration: 30, ease: "linear" },
  };

  // Helper to generate unique keys for duplicated arrays
  const getUniqueKey = (productTitle: string, idx: number, offset: number) =>
    `${productTitle}-${idx}-${offset}`;

  return (
    <div
      ref={ref}
      className="h-[370vh] md:h-[320vh] py-40 overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        {/* First Row */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20" {...marqueeLoop}>
          {[...firstRow, ...firstRow].map((product, idx) => (
            <ProductCard
              key={getUniqueKey(product.title, idx, 0)}
              product={product}
              translate={translateXScroll}
            />
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div className="flex flex-row mb-20 space-x-20" {...marqueeLoop}>
          {[...secondRow, ...secondRow].map((product, idx) => (
            <ProductCard
              key={getUniqueKey(product.title, idx, 100)}
              product={product}
              translate={translateXScrollReverse}
            />
          ))}
        </motion.div>

        {/* Third Row */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20" {...marqueeLoop}>
          {[...thirdRow, ...thirdRow].map((product, idx) => (
            <ProductCard
              key={getUniqueKey(product.title, idx, 200)}
              product={product}
              translate={translateXScroll}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => (
  <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full">
    <h1 className="space text-2xl md:text-9xl font-bold text-white tracking-tight">
      Sowmya<span className="text-8xl">'s</span> <br /> Universe🎀 
    </h1>
    <p className="cursive max-w-2xl text-base md:text-2xl mt-8 text-neutral-200 tracking-wider leading-10">
      Scroll down to dive deeper into Sowmya's Universe — a cosmos filled with memories, moments, and magic waiting to unfold
    </p>
  </div>
);

export const ProductCard = ({
  product,
  translate,
}: {
  product: { title: string; link: string; thumbnail: string };
  translate: MotionValue<number>;
}) => (
  <motion.div
    style={{ x: translate }}
    whileHover={{ y: -20 }}
    className="group/product h-96 w-[30rem] relative shrink-0"
  >
    <img
      src={product.thumbnail}
      height="600"
      width="600"
      className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
      alt={product.title}
    />
    <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" />
    <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
      {product.title}
    </h2>
  </motion.div>
);
