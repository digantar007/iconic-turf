'use client';
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaFutbol, FaHockeyPuck, FaTableTennis, FaBasketballBall, FaVolleyballBall } from 'react-icons/fa';

const sportsData = [
  { name: "Cricket", icon: <FaHockeyPuck />, description: "Cricket is a bat-and-ball game played between two teams." },
  { name: "Football", icon: <FaFutbol />, description: "Football is a team sport played with a spherical ball between two teams of 11 players." },
  { name: "Hockey", icon: <FaHockeyPuck />, description: "Hockey is a fast-paced game played on ice or field with sticks and a puck or ball." },
  { name: "Badminton", icon: <FaTableTennis />, description: "Badminton is a racquet sport played using a shuttlecock across a net." },
  { name: "Tennis", icon: <FaTableTennis />, description: "Tennis is a sport where players use rackets to hit a ball over a net on a rectangular court." },
  { name: "Basketball", icon: <FaBasketballBall />, description: "Basketball is played between two teams of five players each on a rectangular court." },
  { name: "Volleyball", icon: <FaVolleyballBall />, description: "Volleyball is a sport where two teams try to score points by hitting a ball over a net." },
];
export default function SportsPage() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-green-100 text-green-800 font-oswald">
      {/* Navbar */}
      <nav className="navbar px-4 py-2 bg-white bg-opacity-80 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo" className="h-6 w-6" />
          <Link href="/" className="text-lg font-bold">Iconic Turf</Link>
        </div>
        <ul className="flex space-x-6 text-md font-bold">
          {['/', '/about', '/sports', '/gallery', 'mailto:info@iconicturf.com'].map((path, index) => (
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
          <h1 className="text-6xl font-extrabold text-white">Sports We Offer</h1>
          <p className="text-lg mt-4 max-w-2xl text-white">Empowering champions through sportsmanship, dedication, and excellence.</p>
        </div>
        <div className="pt-10">
          {/* Accordion Section */}
          <div className="w-full max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {sportsData.map((sport, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-300">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full px-4 py-3 text-lg font-semibold text-green-800 hover:bg-green-100 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{sport.icon}</span>
                      {sport.name}
                    </div>
                    <span>{activeIndex === index ? "▲" : "▼"}</span>
                  </button>
                  {activeIndex === index && (
                    <div className="px-4 py-2 text-gray-700 bg-gray-50">{sport.description}</div>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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
