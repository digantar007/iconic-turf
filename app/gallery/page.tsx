'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaFootballBall, FaInstagram, FaTwitter } from 'react-icons/fa';

const cricketImages = ['/cricket.jpg', '/cricket.jpg', '/cricket.jpg', '/cricket.jpg'];
const footballImages = ['/football.jpg', '/football.jpg', '/football.jpg', '/football.jpg'];

export default function SportsGallery() {
  return (
    <div className="min-h-screen bg-base-200" data-theme="pastel">
      {/* Navbar */}
      <nav className="navbar px-4 py-2 bg-white bg-opacity-80 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo" className="h-6 w-6" />
          <Link href="/" className="text-lg font-bold">Iconic Turf</Link>
        </div>
        <ul className="flex space-x-6 text-md font-bold">
          {['/', '/about', '/deals', '/gallery', '/contact'].map((path, index) => (
            <li key={index}>
              <Link href={path} className={pathname === path ? 'text-blue-400 font-bold' : ''}>
                {path === '/' ? 'Home' : path.slice(1).replace(/-/g, ' ').toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <div 
        className="hero bg-gray-800 text-white py-16 px-4 text-center flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Sports Gallery</h1>
        <p className="text-lg max-w-2xl">Explore moments from our Cricket and Football games.</p>
      </div>

      {/* Cricket Gallery */}
      <section className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Cricket</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-4 p-4 bg-white shadow-xl rounded-lg overflow-x-auto scrollbar-hide">
            {cricketImages.map((image, index) => (
              <div key={index} className="w-48 h-48 flex-shrink-0">
                <Image src={image} alt={`Cricket ${index + 1}`} width={192} height={192} className="rounded-lg object-cover shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Football Gallery */}
      <section className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Football</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-4 p-4 bg-white shadow-xl rounded-lg overflow-x-auto scrollbar-hide">
            {footballImages.map((image, index) => (
              <div key={index} className="w-48 h-48 flex-shrink-0">
                <Image src={image} alt={`Football ${index + 1}`} width={192} height={192} className="rounded-lg object-cover shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centered Footer with Social Icons */}
      <footer className="footer w-full p-4 text-center flex flex-col items-center bg-base-300 text-base-content rounded">
        <div className="container mx-auto flex flex-col items-center">
          <p>Email: <a href="mailto:info@iconicturf.com" className="underline">info@iconicturf.com</a> | Phone: +123 456 7890 | Address: 123 Sports Ave, City, Country</p>
          <div className="flex gap-4 mt-2">
            <FaFacebook className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
          </div>
          <p className="mt-2 text-sm">&copy; 2025 Iconic Turf. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
