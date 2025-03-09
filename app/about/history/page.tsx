'use client';

import Link from 'next/link';
import { FaFacebook, FaFootballBall, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function OurLegacy() {
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
        <h1 className="text-5xl font-extrabold mb-4">Our Legacy</h1>
        <p className="text-lg max-w-2xl">A journey of dedication, passion, and excellence in sports.</p>
      </div>

      {/* Legacy Content */}
      <div className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Our History & Achievements</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          From humble beginnings to a well-renowned sports organization, our legacy is built on hard work, perseverance, and a love for the game. Over the years, we have nurtured talents, won championships, and inspired countless individuals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white shadow-xl p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">Founded</h3>
            <p className="text-gray-600">Established in 2000 with a vision to revolutionize sports training and competition.</p>
          </div>
          <div className="card bg-white shadow-xl p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">Milestones</h3>
            <p className="text-gray-600">Won multiple national and international tournaments, fostering top-tier talent.</p>
          </div>
          <div className="card bg-white shadow-xl p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">Future Goals</h3>
            <p className="text-gray-600">Continuing to innovate and expand our reach, inspiring future champions.</p>
          </div>
        </div>
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
