'use client';

import Link from 'next/link';
import { FaFacebook, FaFootballBall, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function OurMission() {
  return (
    <div className="min-h-screen bg-base-200" data-theme="luxury">
      {/* Navbar */}
      <nav className="navbar px-4 flex items-center">
        <div className="flex-1 flex items-center gap-2">
          <FaFootballBall className="text-2xl" />
          <Link href="/" className="text-lg font-bold">Iconic Turf</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li className="relative">
              <details className="dropdown">
                <summary className="cursor-pointer">About Us</summary>
                <ul className="dropdown-content menu p-2 bg-base-100 rounded-box shadow-lg absolute z-10 mt-2 w-48">
                  <li><Link href="/about/mission">Our Mission</Link></li>
                  <li><Link href="/about/team">Our Team</Link></li>
                  <li><Link href="/about/history">Our Legacy</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href="/deals">Deals With</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="mailto:info@iconicturf.com">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="hero bg-gray-800 text-white py-16 px-4 text-center flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Our Mission</h1>
        <p className="text-lg max-w-2xl">Dedicated to fostering athletic excellence, teamwork, and community engagement.</p>
      </div>

      {/* Mission Content */}
      <div className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">What Drives Us</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">At Iconic Turf, our mission is to provide world-class training facilities, organize competitive sporting events, and cultivate a spirit of sportsmanship. We believe in empowering athletes, fostering inclusivity, and inspiring the next generation of champions.</p>
      </div>

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
