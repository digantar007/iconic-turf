// app/layout.tsx
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Analytics } from "@vercel/analytics/next"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <html lang="en">
      <body className="bg-white text-green-800 dark:bg-gray-900 dark:text-white font-oswald transition-colors duration-300">
        {/* Navbar */}
        <nav className="px-4 py-3 bg-white/90 dark:bg-gray-800/90 shadow-md flex items-center">
          <div className="flex items-center gap-2 justify-start">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            {/* Site Name + Tagline */}
            <div className="flex flex-col leading-tight">
              <Link
                href="/"
                className="text-xl font-bold text-green-800 dark:text-white"
              >
                ICONIC TURF CLUB
              </Link>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Your Game, Our Ground
              </span>
            </div>
          </div>
          {/* Desktop Menu - Hidden on Mobile */}
          <div className="ml-auto flex items-center gap-4">
            {!menuOpen && (
              <ul className="hidden md:flex space-x-6 text-md font-bold justify-end">
                {["/", "/about", "/sports", "/gallery", "/contactus"].map(
                  (path, i) => (
                    <li key={i}>
                      <Link
                        href={
                          path === "/contactus"
                            ? "/contact"
                            : path
                        }
                        className={
                          pathname === path
                            ? "text-emerald-700 font-extrabold"
                            : "hover:text-emerald-600"
                        }
                      >
                        {path === "/"
                          ? "HOME"
                          : path.slice(1).toUpperCase() === "CONTACTUS"
                          ? "CONTACT"
                          : path.slice(1).toUpperCase()}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}
            <div className="flex items-center gap-4">
              {/* Dark Mode */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-emerald-200 hover:bg-emerald-300 dark:bg-white dark:hover:bg-gray-300 text-black dark:text-black transition"
                title="Toggle Dark Mode"
              >
                {isDark ? "☀️" : "🌙"}
              </button>
              {/* Hamburger */}
              <button
                className="md:hidden text-2xl text-gray-800 dark:text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg flex flex-col items-start p-6 space-y-4 md:hidden z-50">
              {["/", "/about", "/sports", "/gallery", "/contactus"].map(
                (path, i) => (
                  <li key={i}>
                    <Link
                      href={path}
                      className={`text-lg block ${
                        pathname === path
                          ? "text-emerald-700 font-extrabold"
                          : "hover:text-emerald-600"
                      }`}
                    >
                      {path === "/"
                        ? "HOME"
                        : path.slice(1).toUpperCase() === "CONTACTUS"
                        ? "CONTACT"
                        : path.slice(1).toUpperCase()}
                    </Link>
                  </li>
                )
              )}
            </ul>
          )}
        </nav>
        {/* Main Content */}
        <main className="min-h-[calc(100vh-100px)]">{children}</main>
        {/* Footer */}
        <footer className="p-6 bg-accent dark:bg-gray-800 shadow-md">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {/* About */}
            <div>
              <h2 className="text-lg font-semibold mb-3">
                About Iconic Turf Club
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Empowering your sports through sportsmanship and top-quality
                sports infrastructure.
              </p>
            </div>

            {/* Links */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <Link href="/" className="hover:text-green-800">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-green-800">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-green-800">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:iconicturfclub@gmail.com"
                    className="hover:text-green-800"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://search.google.com/local/writereview?placeid=ChIJx9BKCVcZIDoRe5vCI_xlejU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    Review us on Google ⭐ 
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                📧{" "}
                <Link
                  href="mailto:iconicturfclub@gmail.com"
                  className="hover:text-green-800 font-semibold"
                >
                  iconicturfclub@gmail.com
                </Link>
                <br />
                <span className="mt-3">
                  <a
                    href="tel:+918908352996"
                    className="inline-block text-sm font-semibold hover:bg-green-300 transition"
                  >
                    📱 +91 89083 52996
                  </a><br/>
                  <a
                    href="tel:+919437579020"
                    className="inline-block text-sm font-semibold hover:bg-green-300 transition"
                  >
                    📱 +91 94375 79020
                  </a>
                </span>
              </p>
              <div className="">
                <a
                  href="https://maps.app.goo.gl/w16yccMgHG2bZQWd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm"
                >
                  📍 ICONIC TURF CLUB, Sector 9, Rourkela, Odisha, India – View
                  on Google Maps
                </a>
              </div>

              <div className="flex gap-4 text-2xl">
                <Link href="https://www.facebook.com/share/1a2Um75MqR/?mibextid=wwXIfr">
                  <FaFacebook />
                </Link>
                {/* <Link href="#">
                  <FaTwitter />
                </Link> */}
                <Link href="https://www.instagram.com/iconicturfclub?igsh=MXB0dDMzbWM4eXhyMA%3D%3D&utm_source=qr">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6 border-t pt-4">
            &copy; {new Date().getFullYear()} Iconic Turf Club. All rights
            reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
