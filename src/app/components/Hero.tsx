// const Hero = () => {
//   const images = [
//     "1.png", "2.png", "3.png", "8.png", "7.png"
//   ];

//   return (
//     <>
//       <style>{`
//         .marquee-inner {
//           animation: marqueeScroll linear infinite;
//         }

//         @keyframes marqueeScroll {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-40%);
//           }
//         }
//       `}</style>

//       <div className="relative w-full h-screen flex items-center justify-center">

//         <div className="absolute inset-0 -z-100 w-full h-full object-cover">
//             <img src="bg.jpg" alt="bg" />
//         </div>

//         {/* Centered Text */}
//         <h1 className="boldonse absolute z-10 text-[105px] text-center text-white">
//           MANJUNADH GANTA
//         </h1>

//         {/* Marquee */}
//         <div className="overflow-hidden w-full h-full flex items-center justify-center relative max-w-8xl mx-auto select-none opacity-75">
//           <div
//             className="marquee-inner flex will-change-transform min-w-[200%]"
//             style={{ animationDuration: "15s" }}
//           >
//             <div className="flex">
//               {[...images, ...images, ...images].map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={`/${img}`} // place your images inside public/
//                   alt={img}
//                   className="h-120 w-70 border-2 border-purple-600 object-cover mx-6 rounded-lg"
//                   draggable={false}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

// const Hero = () => {
//   const images = ["1.png", "2.png", "3.png", "8.png", "7.png"];

//   return (
//     <>
//       <style>{`
//         .marquee-inner {
//           animation: marqueeScroll linear infinite;
//         }

//         @keyframes marqueeScroll {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-40%);
//           }
//         }
//       `}</style>

//       <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//         {/* ✅ Fullscreen Background Image */}
//         <img
//           src="/bg.png"
//           alt="Background"
//           className="absolute inset-0 w-full h-full object-cover -z-10 opacity-65"
//         />

//         {/* Centered Text */}
//         <h1 className="boldonse absolute z-10 text-[80px] text-center text-white">
//           MANJUNADH GANTA
//         </h1>

//         {/* Marquee */}
//         <div className="overflow-hidden w-full h-full flex items-center justify-center relative max-w-8xl mx-auto select-none opacity-100">
//           <div
//             className="marquee-inner flex will-change-transform min-w-[200%]"
//             style={{ animationDuration: "15s" }}
//           >
//             <div className="flex">
//               {[...images, ...images, ...images].map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={`/${img}`} // images inside /public/
//                   alt={img}
//                   className="h-60 w-44 md:h-100 md:w-60 border-2 border-purple-600 object-cover mx-6 rounded-lg"
//                   draggable={false}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;



// const Hero = ({ images }) => {
//   return (
//     <>
//       <style>{`
//         .marquee-inner {
//           animation: marqueeScroll linear infinite;
//         }

//         @keyframes marqueeScroll {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-40%);
//           }
//         }
//       `}</style>

//       <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//         {/* ✅ Fullscreen Background Image */}
//         <img
//           src="/bg.png"
//           alt="Background"
//           className="absolute inset-0 w-full h-full object-cover -z-10 opacity-65"
//         />

//         {/* Centered Text */}
//         <h1 className="boldonse absolute z-10 text-[80px] text-center text-white">
//           MANJUNADH GANTA
//         </h1>

//         {/* Marquee */}
//         <div className="overflow-hidden w-full h-full flex items-center justify-center relative max-w-8xl mx-auto select-none opacity-100">
//           <div
//             className="marquee-inner flex will-change-transform min-w-[200%]"
//             style={{ animationDuration: "15s" }}
//           >
//             <div className="flex">
//               {[...images, ...images, ...images].map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   alt={`uploaded-${idx}`}
//                   className="h-60 w-44 md:h-[400px] md:w-60 border-2 border-purple-600 object-cover mx-6 rounded-lg"
//                   draggable={false}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

import React from "react";

interface HeroProps {
  images: string[];
}

const Hero: React.FC<HeroProps> = ({ images }) => {
    return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-40%);
          }
        }
      `}</style>

      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* ✅ Fullscreen Background Image */}
        <img
          src="/bg.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-65"
        />

        {/* Centered Text */}
        <h1 className="boldonse absolute z-10 text-[80px] text-center outline-text tracking-tighter outline-2 text-white">
           SOWMYA's GALLERIA
        </h1>

        {/* Marquee */}
        <div className="overflow-hidden w-full h-full flex items-center justify-center relative max-w-8xl mx-auto select-none opacity-100">
          <div
            className="marquee-inner flex will-change-transform min-w-[200%]"
            style={{ animationDuration: "15s" }}
          >
            <div className="flex">
              {[...images, ...images].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`uploaded-${idx}`}
                  className="h-60 w-44 md:h-130 md:w-80 border-5 border-pink-400 object-cover mx-6 rounded-lg"
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
