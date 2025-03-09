'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  { name: 'John Doe', role: 'Founder & CEO', image: '/avatar.jpg' },
  { name: 'Jane Smith', role: 'Founder & CEO', image: '/avatar.jpg' },
  { name: 'Mike Johnson', role: 'Head Coach', image: '/avatar.jpg' },
  { name: 'Emily Davis', role: 'Physiotherapist', image: '/avatar.jpg' },
];

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-base-200" data-theme="luxury">
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
        <h1 className="text-5xl font-extrabold mb-4">Meet Our Team</h1>
        <p className="text-lg max-w-2xl">Passionate professionals dedicated to excellence in sports, training, and teamwork.</p>
      </div>

      {/* Team Section */}
      <div className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card bg-white shadow-xl p-6 rounded-lg transform hover:scale-105 transition-transform">
              <Image src={member.image} alt={member.name} width={180} height={180} className="rounded-full mx-auto border-4 border-gray-300" />
              <div className="card-body text-center mt-4">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-500 text-md">{member.role}</p>
              </div>
            </div>
          ))}
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
