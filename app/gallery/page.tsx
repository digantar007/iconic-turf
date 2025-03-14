"use client";

import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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
  const pathname = usePathname();
  const [selectedSport, setSelectedSport] = useState("all");

  const filteredImages = selectedSport === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedSport);

  return (
    <div className="min-h-screen bg-green-100 text-green-800 font-oswald">
      {/* Navbar */}
      <nav className="navbar px-4 py-2 bg-white bg-opacity-80 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo" className="h-6 w-6" />
          <Link href="/" className="text-lg font-bold">Iconic Turf</Link>
        </div>
        <ul className="flex space-x-6 text-md font-bold">
          {['/', '/about', '/sports', '/gallery', '/contact'].map((path, index) => (
            <li key={index}>
              <Link href={path} className={pathname === path ? 'text-blue-400 font-bold' : ''}>
                {path === '/' ? 'HOME' : path.slice(1).replace(/-/g, ' ').toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="container mx-auto py-12 px-6">
        <div className="hero h-96 bg-[url('/bg.jpg')] bg-cover bg-center text-center flex flex-col justify-center items-center bg-black bg-opacity-60">
          <h1 className="text-6xl font-extrabold text-white">Sports Gallery</h1>
          <p className="text-lg mt-4 max-w-2xl text-white">Empowering champions through sportsmanship, dedication, and excellence.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 pt-10">
          {sportsCategories.map((sport) => (
            <button
              key={sport.value}
              className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${selectedSport === sport.value
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
              <img src={image.src} alt="Gallery Image" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
      {/* Footer Section */}
      <footer className="footer w-full p-6 bg-white bg-opacity-80 shadow-md" data-aos="fade-in" data-aos-duration="300">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Iconic Turf</h2>
            <p className="text-sm -400">
              Empowering champions through sportsmanship, dedication, and excellence. We are committed to delivering quality infrastructure, coaching, and building thriving communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link> </li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link> </li>
              <li><Link href="/gallery" className="hover:text-blue-400 transition">Gallery</Link> </li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link> </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm mb-4">
              📧 <Link href="mailto:info@iconicturf.com" className="hover:text-blue-400 transition">info@iconicturf.com</Link> <br />
              📞 <Link href="tel:+1234567890" className="hover:text-blue-400 transition">+1 234 567 890</Link>
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-2xl">
              <Link href="#" className="hover:text-blue-400 transition"><FaFacebook /></Link>
              <Link href="#" className="hover:text-blue-400 transition"><FaTwitter /></Link>
              <Link href="#" className="hover:text-blue-400 transition"><FaInstagram /></Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Iconic Turf. All rights reserved.
        </div>
      </footer>
    </div>
  );
}