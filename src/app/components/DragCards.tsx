import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../../components/ui/draggable-card";


type DraggableCardsProps = {
  images: string[]; // array of user-uploaded image URLs
};

export function DraggableCardDemo({ images }: DraggableCardsProps) {
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        you're amazing,
        Just the way you are,
      </p>
      {images.map((image, index) => {
        // generate some random positioning and rotation for fun
        const top = Math.floor(Math.random() * 60);
        const left = Math.floor(Math.random() * 60);
        const rotate = Math.floor(Math.random() * 20 - 10); // -10 to 10 degrees
        const className = `absolute top-[${top}%] left-[${left}%] rotate-[${rotate}deg]]`;

        return (
          <DraggableCardBody key={index} className={className}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="pointer-events-none relative z-10 h-100 w-80 object-cover"
            />
          </DraggableCardBody>
        );
      })}
    </DraggableCardContainer>
  );
}
