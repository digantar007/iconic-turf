"use client";

import { useState } from "react";
import Image from "next/image";

const sportsCategories = [
  { name: "All", value: "all" },
  { name: "Cricket", value: "cricket" },
  { name: "Football", value: "football" },
  { name: "Hockey", value: "hockey" },
  { name: "Badminton", value: "badminton" },
  { name: "Tennis", value: "tennis" },
  { name: "Basketball", value: "basketball" },
  { name: "Volleyball", value: "volleyball" },
];

const galleryImages = [
  { src: "/gallery/cricket1.jpg", category: "cricket" },
  { src: "/gallery/football1.jpg", category: "football" },
  { src: "/gallery/hockey1.jpg", category: "hockey" },
  { src: "/gallery/badminton1.jpg", category: "badminton" },
  { src: "/gallery/tennis1.jpg", category: "tennis" },
  { src: "/gallery/basketball1.jpg", category: "basketball" },
  { src: "/gallery/volleyball1.jpg", category: "volleyball" },
  { src: "/gallery/football2.jpg", category: "football" },
  { src: "/gallery/cricket2.jpg", category: "cricket" },
];

export default function GalleryPage() {
  const [selectedSport, setSelectedSport] = useState("all");

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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.src}
                alt="Gallery Image"
                width={100}
                height={64}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
    </>
  );
}
