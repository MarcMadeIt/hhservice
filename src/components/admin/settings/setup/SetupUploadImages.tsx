"use client";

import { useState } from "react";
import Image from "next/image";

const SetupUploadImages = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [selectedType, setSelectedType] = useState("about");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setPreview(objectURL);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", selectedType);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer SECRET_ADMIN_KEY",
      },
    });

    if (res.ok) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div className="p-4 w-full">
      <h3 className="text-lg md:text-xl font-semibold ">Upload billede</h3>
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full gap-10">
        <div className="md:flex-1 flex flex-col gap-3 items-start w-full">
          <select
            className="select select-bordered w-full max-w-xs"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="hero">Intro (startside)</option>
            <option value="about">Om os (startside)</option>
          </select>

          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={handleFileChange}
          />

          <button
            onClick={handleUpload}
            className="btn btn-primary"
            disabled={!file}
          >
            Upload
          </button>
        </div>

        {preview && (
          <div className="relative w-64 h-36 overflow-hidden rounded-md border">
            <Image
              src={preview}
              alt="Preview"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </div>

      {showToast && (
        <div className="toast bottom-20 md:bottom-0 toast-end">
          <div className="alert alert-success text-neutral-content">
            <span>Fil uploadet!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetupUploadImages;
