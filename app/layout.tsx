// app/layout.tsx
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
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
        <nav className="px-4 py-3 bg-white/90 dark:bg-gray-800/90 shadow-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="rounded-full" />
            <Link href="/" className="text-xl font-bold">
              Iconic Turf
            </Link>
          </div>
          <ul className="flex space-x-6 text-md font-bold">
            {["/", "/about", "/sports", "/gallery", "/contactus"].map(
              (path, i) => (
                <li key={i}>
                  <Link
                    href={path}
                    className={
                      pathname === path ? "text-blue-400 font-extrabold" : ""
                    }
                  >
                    {path === "/" ? "HOME" : path.slice(1).toUpperCase()}
                  </Link>
                </li>
              )
            )}
          </ul>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </nav>

        {/* Main Content */}
        <main className="min-h-[calc(100vh-100px)]">{children}</main>

        {/* Footer */}
        <footer className="p-6 bg-accent dark:bg-gray-800 shadow-md">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {/* About */}
            <div>
              <h2 className="text-lg font-semibold mb-3">About Iconic Turf</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Empowering champions through sportsmanship and top-quality turf
                infrastructure.
              </p>
            </div>

            {/* Links */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <Link href="/" className="hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-blue-400">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="mailto:name@email.com" className="hover:text-blue-400">
                    Contact
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
                  href="mailto:info@iconicturf.com"
                  className="hover:text-blue-400"
                >
                  info@iconicturf.com
                </Link>
                <br />
                📞{" "}
                <Link href="tel:+1234567890" className="hover:text-blue-400">
                  +1 234 567 890
                </Link>
              </p>
              <div className="flex gap-4 text-2xl">
                <Link href="#">
                  <FaFacebook />
                </Link>
                <Link href="#">
                  <FaTwitter />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6 border-t pt-4">
            &copy; {new Date().getFullYear()} Iconic Turf. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
