'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaBuilding, FaSchool, FaHome, FaRunning } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const pathname = usePathname();

  return (
    <>
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

        {/* Hero Section */}
        <div className="hero h-96 bg-[url('/bg.jpg')] bg-cover bg-center text-center flex flex-col justify-center items-center bg-black bg-opacity-60">
          <h1 className="text-6xl font-extrabold text-white">Welcome to Iconic Turf</h1>
          <p className="text-lg mt-4 max-w-2xl text-white">Empowering champions through sportsmanship, dedication, and excellence.</p>
        </div>

        {/* Who We Are & Metrics Section Combined */}
        <div className="container mx-auto py-12 px-6 text-center" data-aos="fade-in">
          <h4 className="text-3xl font-bold mb-4">The last sports partner you will need</h4>
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
                  className="bg-gradient-to-r from-info to-accent p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
                >
                  <h3 className="text-2xl font-extrabold ">{metric.value}</h3>
                  <p className="text-sm  mt-2">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Expertise Section */}
        <div className="container mx-auto py-12 px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/building-turf" className="p-4 bg-accent rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform">
              <img src="/bg1.jpg" alt="Turf" className="rounded-md mb-4" />
              <h3 className="text-2xl font-bold ">Building Turf Infrastructure</h3>
              <p className="text-sm ">Crafting world-class turfs for unmatched sports experiences.</p>
            </Link>
            <Link href="/expertise/coaching-students" className="p-4 bg-accent rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform">
              <img src="/ballbg.jpg" alt="Coaching" className="rounded-md mb-4" />
              <h3 className="text-2xl font-bold ">Coaching Students</h3>
              <p className="text-sm ">Empowering athletes with expert guidance and mentorship.</p>
            </Link>

            <Link href="/expertise/building-community" className="p-4 bg-accent rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform">
              <img src="/hero-bg.jpg" alt="Community" className="rounded-md mb-4" />
              <h3 className="text-2xl font-bold ">Building Community</h3>
              <p className="text-sm ">Creating a thriving sports culture through engagement.</p>
            </Link>
          </div>
        </div>
        {/* Customer Segments */}
        <div className="container mx-auto py-12 px-6 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-8">Our Customer Segments</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 bg-accent rounded-lg shadow-md flex items-center gap-2 ">
              <FaBuilding className="text-xl" /> Corporate
            </div>
            <div className="p-4 bg-accent rounded-lg shadow-md flex items-center gap-2 ">
              <FaSchool className="text-xl" /> Schools & Colleges
            </div>
            <div className="p-4 bg-accent rounded-lg shadow-md flex items-center gap-2 ">
              <FaHome className="text-xl" /> Housing Societies
            </div>
            <div className="p-4 bg-accent rounded-lg shadow-md flex items-center gap-2 ">
              <FaRunning className="text-xl" /> Sports Academy
            </div>
          </div>
        </div>

        {/* We are Proud to Work With */}
        <div className="container mx-auto py-12 px-6 text-center" data-aos="zoom-out">
          <h2 className="text-3xl font-bold mb-8">We Are Proud to Work With These Companies</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="/p1.jpg" alt="Company 1" className="h-16 w-auto" />
            <img src="/p2.jpg" alt="Company 2" className="h-16 w-auto" />
            <img src="/p1.jpg" alt="Company 3" className="h-16 w-auto" />
            <img src="/p2.jpg" alt="Company 3" className="h-16 w-auto" />
          </div>
        </div>

        {/* Latest News & Upcoming Events */}
        <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="slide-up">
          {/* Latest News Section */}
          <div className="p-4 bg-accent rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-center ">Latest News</h2>
            <div className="space-y-4">
              <div className="p-4 bg-base-100 rounded-md">
                <h3 className="text-lg font-bold ">New Cricket Academy Opening</h3>
                <p className="text-sm ">Our brand-new cricket academy opens this summer!</p>
                <Link href="/news1" className="text-blue-400 inline-block mt-2">Read More →</Link>
              </div>
              <div className="p-4 bg-base-100 rounded-md">
                <h3 className="text-lg font-bold ">Football Championship Highlights</h3>
                <p className="text-sm ">Catch the thrilling moments from our recent tournament.</p>
                <Link href="/news2" className="text-blue-400 inline-block mt-2">View Highlights →</Link>
              </div>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="p-4 bg-accent rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-center ">Upcoming Events</h2>
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {[
                  { image: '/E1.jpg', title: 'Football Tournament', desc: 'Experience the ultimate cricket showdown.' },
                  { image: '/E1.jpg', title: 'Cricket League', desc: 'Experience the ultimate cricket showdown.' },
                  { image: '/E1.jpg', title: 'Marathon Run', desc: 'Run for a cause and challenge yourself.' },
                  { image: '/E1.jpg', title: 'Marathon Run', desc: 'Run for a cause and challenge yourself.' },
                  { image: '/E1.jpg', title: 'Marathon Run', desc: 'Run for a cause and challenge yourself.' }
                ].map((event, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/1 lg:basis-1/2 max-h-80 min-w-1/2">
                    <div className="p-1">
                      <Card className="w-full md:w-80 shadow-lg hover:shadow-xl transition-all">
                        <CardHeader className="p-0">
                          <img src={event.image} alt={event.title} className="w-200 h-100 object-cover rounded-t-lg" />
                          {/* <CardTitle>{event.title}</CardTitle>
                          <CardDescription>Event Date: 20th April 2025</CardDescription> */}
                        </CardHeader>
                        <CardContent className="items-center justify-center p-1">
                            <CardTitle className="text-lg font-bold">{event.title}</CardTitle>
                            <p className="text-sm mt-1">{event.desc}</p>
                            <p className="text-sm font-semibold mt-2">📅 20th April 2025</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0"/>
              <CarouselNext className="right-0"/>
            </Carousel>
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
    </>
  );
}
