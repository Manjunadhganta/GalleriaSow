"use client";
import React from "react";
import { FileUpload } from "../../components/ui/file-upload";

type UploaderProps = {
  onChange: (files: File[]) => void; // notify parent
};

export default function Uploader({ onChange }: UploaderProps) {
  const handleFileUpload = (files: File[]) => {
    onChange(files); // pass files to parent (App.tsx)
    console.log(files);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <FileUpload onChange={handleFileUpload} />
      </div>
    </div>
  );
}
