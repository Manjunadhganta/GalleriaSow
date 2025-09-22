"use client";
import React, { useState } from "react";
import Uploader from "./app/components/Uploader";
import Hero from "./app/components/Hero";
import Second from "./app/components/Second";
import Third from "./app/components/Third";

export default function App() {
  const [files, setFiles] = useState<File[]>([]);

  // Convert File objects to local URLs for Hero/Second usage
  const imageUrls = files.map((file) => URL.createObjectURL(file));

  return (
    <>
      {/* Show uploader until user uploads at least one file */}
      {files.length === 0 ? (
        <div className="w-full h-screen flex items-center justify-center bg-black">
          <Uploader onChange={setFiles} />
        </div>
      ) : (
        <>
          {/* Pass the uploaded images as URLs */}
          <Hero images={imageUrls} />
          <Second images={imageUrls} />
          <Third images={imageUrls} />
        </>
      )}
    </>
  );
}
