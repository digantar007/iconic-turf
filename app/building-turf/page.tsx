'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function BuildingTurfAPS() {
  const pathname = usePathname();
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
      <div className="p-6 md:p-12">
      <div className="hero h-96 bg-[url('/bg.jpg')] bg-cover bg-center text-center flex flex-col justify-center items-center bg-black bg-opacity-60">
          <h1 className="text-6xl font-extrabold text-white">Building Turf APS</h1>
          <p className="text-lg mt-4 max-w-2xl text-white">We specialize in designing and executing high-quality sports turfs with **Turnkey and Modular solutions**.</p>
        </div>
        <div className="max-w-3xl mx-auto pt-10">
          <Accordion type="single" collapsible>
            {/* Turnkey Projects */}
            <AccordionItem value="turnkey">
              <AccordionTrigger className="text-3xl font-bold mb-8">Turnkey Projects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  We provide end-to-end solutions for building sports turfs, covering **planning, design, material selection, and installation**.
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Complete project management</li>
                  <li>High-quality turf solutions</li>
                  <li>Lighting, fencing & drainage systems</li>
                  <li>Maintenance & after-sales support</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Modular Projects */}
            <AccordionItem value="modular">
              <AccordionTrigger className="text-3xl font-bold mb-8">Modular Projects</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Our modular solutions allow quick and flexible installations with **customizable features**.
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Portable & scalable turf solutions</li>
                  <li>Faster installation</li>
                  <li>Budget-friendly options</li>
                  <li>Ideal for temporary setups & training grounds</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
