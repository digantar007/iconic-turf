'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebook, FaTwitter, FaInstagram, FaBuilding, FaSchool, FaHome, FaRunning } from 'react-icons/fa';

export default function Home() {
  const pathname = usePathname();

  return (
    <>
    <div className="min-h-screen bg-green-100 text-green-900">
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
      <div className="hero h-96 bg-[url('/bg.jpg')] bg-cover bg-center text-center flex flex-col justify-center items-center bg-black bg-opacity-60">
        <h1 className="text-6xl font-extrabold text-white">Welcome to Iconic Turf</h1>
        <p className="text-lg mt-4 max-w-xl text-gray-200">Empowering champions through sportsmanship, dedication, and excellence.</p>
      </div>

      {/* Who We Are & Metrics Section Combined */}
      <div className="container mx-auto py-12 px-6 text-center">
        <h4 className="text-4xl font-bold mb-4">The last sports partner you will need</h4>
        <p className="text-lg max-w-3xl mx-auto mb-8">We are a passionate sports organization dedicated to promoting athletic excellence, teamwork, and community engagement. Our mission is to provide world-class training, host thrilling events, and inspire future champions.</p>
        {/* Metrics Section */}
<div className="container mx-auto py-12 px-6 text-center">
  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      { value: '3+', label: 'Years of Experience' },
      { value: 'Unique', label: 'Technologies & Approach' },
      { value: '100+', label: 'Happy Customers' },
      { value: 'Priority', label: 'Customer Satisfaction' }
    ].map((metric, index) => (
      <div 
        key={index} 
        className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
      >
        <h3 className="text-4xl font-extrabold text-white">{metric.value}</h3>
        <p className="text-sm text-white mt-2">{metric.label}</p>
      </div>
    ))}
  </div>
</div>
      </div>

      {/* Our Expertise Section */}
<div className="container mx-auto py-12 px-6 text-center">
  <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Link href="/expertise/turf-infrastructure" className="p-4 bg-gray-800 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform">
      <img src="/bg1.jpg" alt="Turf" className="rounded-md mb-4" />
      <h3 className="text-xl font-bold text-white">Building Turf Infrastructure</h3>
      <p className="text-sm text-gray-400">Crafting world-class turfs for unmatched sports experiences.</p>
    </Link>

    <Link href="/expertise/coaching-students" className="p-4 bg-gray-800 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform">
      <img src="/ballbg.jpg" alt="Coaching" className="rounded-md mb-4" />
      <h3 className="text-xl font-bold text-white">Coaching Students</h3>
      <p className="text-sm text-gray-400">Empowering athletes with expert guidance and mentorship.</p>
    </Link>

    <Link href="/expertise/building-community" className="p-4 bg-gray-800 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform">
      <img src="/hero-bg.jpg" alt="Community" className="rounded-md mb-4" />
      <h3 className="text-xl font-bold text-white">Building Community</h3>
      <p className="text-sm text-gray-400">Creating a thriving sports culture through engagement.</p>
    </Link>
  </div>
</div>




      {/* Customer Segments */}
      <div className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Customer Segments</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center gap-2 text-white">
            <FaBuilding className="text-xl" /> Corporate
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center gap-2 text-white">
            <FaSchool className="text-xl" /> Schools & Colleges
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center gap-2 text-white">
            <FaHome className="text-xl" /> Housing Societies
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center gap-2 text-white">
            <FaRunning className="text-xl" /> Sports Academy
          </div>
        </div>
      </div>

      {/* We are Proud to Work With */}
<div className="container mx-auto py-12 px-6 text-center">
  <h2 className="text-3xl font-bold mb-8">We Are Proud to Work With These Companies</h2>
  <div className="flex flex-wrap justify-center gap-8">
    <img src="/p1.jpg" alt="Company 1" className="h-16 w-auto" />
    <img src="/p2.jpg" alt="Company 2" className="h-16 w-auto" />
    <img src="/p1.jpg" alt="Company 3" className="h-16 w-auto" />
    <img src="/p2.jpg" alt="Company 3" className="h-16 w-auto" />
  </div>
</div>


{/* Latest News & Upcoming Events */}
<div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* Latest News Section */}
  <div className="p-4 bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-3xl font-bold mb-4 text-center text-white">Latest News</h2>
    <div className="space-y-4">
      <div className="p-4 bg-gray-700 rounded-md">
        <h3 className="text-lg font-bold text-white">New Cricket Academy Opening</h3>
        <p className="text-sm text-gray-400">Our brand-new cricket academy opens this summer!</p>
        <Link href="/news1" className="text-blue-400 inline-block mt-2">Read More →</Link>
      </div>
      <div className="p-4 bg-gray-700 rounded-md">
        <h3 className="text-lg font-bold text-white">Football Championship Highlights</h3>
        <p className="text-sm text-gray-400">Catch the thrilling moments from our recent tournament.</p>
        <Link href="/news2" className="text-blue-400 inline-block mt-2">View Highlights →</Link> 
      </div>
      
    </div>
    
  </div>

 {/* Upcoming Events Section */}
<div className="p-4 bg-gray-800 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold mb-4 text-center text-white">Upcoming Events</h2>

  <div
    className="carousel carousel-center w-full space-x-4 overflow-x-auto scrollbar-hide relative"
    style={{ animation: 'scroll 15s linear infinite' }} // Auto-scroll effect
    onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
    onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
  >
    {/* Event 1 */}
    <div className="carousel-item w-64 min-w-[280px] p-4 bg-blue-700 rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
      <img 
        src="/event1.jpg" 
        alt="Event 1" 
        className="w-full h-36 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-2 text-white">🏅 Turf Championship 2025</h3>
      <p className="text-sm  text-white">📅 March 15, 2025</p>
      <Link href="/event1" className="text-blue-400 inline-block mt-2">View Details →</Link> 
    </div>

    {/* Event 2 */}
    <div className="carousel-item w-64 min-w-[280px] p-4 bg-green-700 rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
      <img 
        src="/event2.jpg" 
        alt="Event 2" 
        className="w-full h-36 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-2 text-white">⚽ Football Fiesta 2025</h3>
      <p className="text-sm  text-white">📅 April 20, 2025</p>
      <Link href="/event2" className="text-blue-400 inline-block mt-2">View Details →</Link> 
    </div>

    {/* Event 3 */}
    <div className="carousel-item w-64 min-w-[280px] p-4 bg-red-700 rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
      <img 
        src="/event3.jpg" 
        alt="Event 3" 
        className="w-full h-36 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-2 text-white">🎯 Archery Showdown 2025</h3>
      <p className="text-sm  text-white">📅 May 10, 2025</p>
      <Link href="/event3" className="text-blue-400 inline-block mt-2">View Details →</Link> 
    </div>
  </div>

  {/* Indicators */}
  <div className="flex justify-center gap-2 mt-4">
    <div className="w-3 h-3 bg-white rounded-full cursor-pointer"></div>
    <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer"></div>
    <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer"></div>
  </div>
</div>

</div>


      {/* Footer Section */}
<footer className="footer w-full p-6 bg-green-700 text-white text-center">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

    {/* About Section */}
    <div>
      <h2 className="text-xl font-bold mb-4">About Iconic Turf</h2>
      <p className="text-sm text-white-400">
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
      <p className="text-sm text-white-400 mb-4">
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
  <div className="text-center text-white-500 text-sm mt-8 border-t border-gray-700 pt-4">
    &copy; {new Date().getFullYear()} Iconic Turf. All rights reserved.
  </div>
</footer>

    </div>
    </>
  );
}
