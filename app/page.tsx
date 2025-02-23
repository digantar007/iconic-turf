'use client';

import Link from 'next/link';
import { FaFootballBall } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Home() {
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

      {/* Daisy UI Carousel */}
      <div className="carousel w-full h-64">
        <div className="carousel-item w-full">
          <img src="/carousel1.jpg" className="w-full h-64 object-cover" />
        </div>
        <div className="carousel-item w-full">
          <img src="/carousel2.jpg" className="w-full h-64 object-cover" />
        </div>
        <div className="carousel-item w-full">
          <img src="/carousel3.jpg" className="w-full h-64 object-cover" />
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="container mx-auto py-8 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg text-white-300">We are a passionate sports organization dedicated to promoting athletic excellence, teamwork, and community engagement. Our mission is to provide world-class training, host thrilling events, and inspire future champions.</p>
      </div>

      {/* What We Offer Section */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card bg-base-100 shadow-xl">
              <figure><img src={`/ballbg.jpg`} alt="What We Offer" /></figure>
              <div className="card-body">
                <h3 className="card-title">Our Services</h3>
                <p>Providing top-tier training, events, and community engagement.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Wins Section */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Wins</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <figure><img src="cricket.jpg" alt="Cricket Win" /></figure>
            <div className="card-body">
              <h3 className="card-title">Cricket Championship</h3>
              <p>Celebrating our remarkable victory in the national cricket league.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure><img src="football.jpg" alt="Football Win" /></figure>
            <div className="card-body">
              <h3 className="card-title">Football Tournament</h3>
              <p>Our team emerged victorious in the regional football championship.</p>
            </div>
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
