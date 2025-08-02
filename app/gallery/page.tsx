"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sportsCategories = [
  { name: "All", value: "all" },
  { name: "Cricket", value: "cricket" },
  { name: "Football", value: "football" },
  { name: "Hockey", value: "hockey" },
];

const galleryImages = [
  { src: "/bg3.8.jpeg", category: "cricket" },
  { src: "/bg3.9.jpeg", category: "cricket" },
  { src: "/bg3.1.jpeg", category: "football" },
  { src: "/bg2.1.jpeg", category: "football" },
  { src: "/bg3.7.jpeg", category: "football" },
  { src: "/bg2.2.jpeg", category: "football" },
  { src: "/bg2.5.jpeg", category: "football" },
  { src: "/bg3.4.jpeg", category: "hockey" },
  { src: "/Hockey1.jpeg", category: "hockey" },
  { src: "/Hockey2.jpeg", category: "hockey" },
  { src: "/bg3.5.jpeg", category: "hockey" },
  { src: "/bg4.2.jpeg", category: "cricket" },
  { src: "/Gal1.jpeg", category: "" },
  { src: "/Gal2.jpeg", category: "" },
  { src: "/Gal3.jpeg", category: "" },
];

export default function GalleryPage() {
  const [selectedSport, setSelectedSport] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedSport === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedSport);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center text-center text-white bg-white">
        <Image
          src="/bg.jpeg"
          alt="Hero Background"
          fill
          loading="eager"
          priority
          className="object-cover z-0"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 pt-10">
        {sportsCategories.map((sport) => (
          <button
            key={sport.value}
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
              selectedSport === sport.value
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white"
            }`}
            onClick={() => setSelectedSport(sport.value)}
          >
            {sport.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid with Motion */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-10"
        layout
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setLightboxImage(image.src)}
            >
              <Image
                src={image.src}
                alt="Gallery Image"
                width={600}
                height={400}
                placeholder="blur"
                blurDataURL="/shimmer-placeholder.png"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <Image
              src={lightboxImage}
              alt="Full View"
              width={1200}
              height={800}
              className="rounded-lg object-contain mx-auto max-h-[90vh]"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setLightboxImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
