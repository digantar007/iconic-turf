"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import CountUp from "react-countup";
import Image from "next/image";
import { FaBuilding, FaSchool, FaHome, FaRunning } from "react-icons/fa";
//import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  // 👇 Type assertion via `as any` to fix type mismatch
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const autoplayPlugin = useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const autoplayPlugin1 = useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false})
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const autoplayPlugin2 = useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false})
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const autoplayPlugin3 = useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false})
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const autoplayPlugin4 = useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false})
  );
  const testimonials = [
    {
      quote:
        "Iconic Turf Club transformed our local playground into a world-class facility.",
      name: "Ravi Sharma",
      title: "Odisha Football CEO",
    },
    {
      quote: "Excellent mentoring by certified coaches. My son loves it here!",
      name: "Sunita Patel",
      title: "Parent",
    },
    {
      quote:
        "As an event planner, their turf is perfect for sports and corporate matches.",
      name: "Amit Rao",
      title: "Sports Infra CEO",
    },
  ];

  const founders = [
    {
      name: "Kunal",
      image: "/founder1.jpg",
      bio: "An Ultra runner, Iron Man 70.3, endurance cyclist & many more for whom fitness is his way of life. He has inspired an entire generation to believe that staying fit at any age is possible. Kunal brings years of expertise in sports infrastructure development, project management, and youth outreach programs. His mission is to create accessible, high-quality sports spaces for all.",
    },
    {
      name: "Abhijeet",
      image: "/founder2.jpeg",
      bio: "An engineer by qualification & a sports enthusiast with a resolve to improve the lifestyle of the current and upcoming generations. The vision is to create or maintain open spaces in cities/towns where kids and adults irrespective of their age can enjoy it. Dedicated to blending technology and community engagement to elevate grassroot sports in India.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center text-center text-white bg-white">
        <Image
          src="/bg.jpeg"
          alt="Hero Background"
          fill
          loading="eager"
          priority
          className="object-cover z-0"
        />
      </div>
      {/* Who We Are & Metrics Section Combined */}
      <div
        className="container mx-auto py-10 px-6 text-center"
        data-aos="fade-in"
      >
        <h4 className="text-3xl font-bold mb-4">
          Your Multi-Sports Destination
        </h4>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          A professional sports organization dedicated to building world-class
          sports infrastructure, mentoring community youth under certified
          coaches, and organizing sports and corporate events.
        </p>
        {/* Metrics Section */}
        <div className="container mx-auto py-10 px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 3, label: "Years of Experience"},
              { value: 30, label: "Projects Executed"},
              { value: 50, label: "Customers Delight"},
              { value: 300, label: "Students Benifitted"},
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-200 to-green-100 text-green-900 
             dark:from-gray-800 dark:to-gray-700 dark:text-white 
             p-6 rounded-xl shadow-lg hover:scale-105 transition-colors duration-300"
              >
                <h3 className="text-2xl font-extrabold ">
                  <CountUp end={metric.value} suffix="+" duration={2} />
                </h3>
                <p className="text-sm  mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Expertise Section */}
      <div
        className="container mx-auto py-10 px-6 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white cursor-pointer hover:scale-105 transition-transform">
            <Carousel
              plugins={autoplayPlugin1.current ? [autoplayPlugin1.current] : []}
              className="w-full"
              onMouseEnter={() => autoplayPlugin1.current?.stop()}
              onMouseLeave={() => autoplayPlugin1.current?.play()}
            >
              <CarouselContent>
                {["/bg1.1.jpeg", "/bg1.2.jpeg", "/Basketball Court- Acrylic.png","/Pickleball Court-Acrylic-1.jpg", "/bg1.5.jpeg", "/Skating Rink.jpeg", "/bg1.7.jpeg"].map((img, index) => (
                  <CarouselItem key={index} className="relative w-full aspect-[4/3]">
                      <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover rounded-md"
                        loading="lazy"
                      />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="right-2 top-1/2 transform -translate-y-1/2" />
            </Carousel>
            <Link href="/building-sports-infra">
              <h3 className="text-lg font-bold mb-1">
                Build Sports Infrastructure
              </h3>
              <p className="text-sm">
                Crafting world-class infrastructure for unmatched experiences.
              </p>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white cursor-pointer hover:scale-105 transition-transform">
            <Carousel
              plugins={autoplayPlugin2.current ? [autoplayPlugin2.current] : []}
              className="w-full"
              onMouseEnter={() => autoplayPlugin2.current?.stop()}
              onMouseLeave={() => autoplayPlugin2.current?.play()}
            >
              <CarouselContent>
                {["/bg2.1.jpeg", "/bg2.2.jpeg", "/bg2.3.jpeg","/bg2.5.jpeg"].map((img, index) => (
                  <CarouselItem key={index} className="relative w-full aspect-[4/3]">
                      <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover rounded-md"
                        loading="lazy"
                      />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="right-2 top-1/2 transform -translate-y-1/2" />
            </Carousel>
            <Link href="mentor-community-kids">
              <h3 className="text-lg font-bold mb-1">
                Mentor Community Kids
              </h3>
              <p className="text-sm">
                Empowering kids with expert guidance and mentorship.
              </p>
            </Link>
          </div>
          {/* Card 3 */}
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white cursor-pointer hover:scale-105 transition-transform">
            <Carousel
              plugins={autoplayPlugin3.current ? [autoplayPlugin3.current] : []}
              className="w-full"
              onMouseEnter={() => autoplayPlugin3.current?.stop()}
              onMouseLeave={() => autoplayPlugin3.current?.play()}
            >
              <CarouselContent>
                {["/bg3.1.jpeg", "/bg3.2.jpeg", "/bg3.3.jpeg","/bg3.4.jpeg", "/bg3.5.jpeg", "/bg3.6.jpeg", "/bg3.7.jpeg", "/bg3.9.jpeg"].map((img, index) => (
                  <CarouselItem key={index} className="relative w-full aspect-[4/3]">
                      <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover rounded-md"
                        loading="lazy"
                      />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="right-2 top-1/2 transform -translate-y-1/2" />
            </Carousel>
            <Link href="#">
              <h3 className="text-lg font-bold mb-1">
                Organize Sports & Corporate Events
              </h3>
              <p className="text-sm">
                Creating a thriving sports culture through engagement.
              </p>
            </Link>
          </div>
          {/* Card 4 */}
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white cursor-pointer hover:scale-105 transition-transform">
            <Carousel
              plugins={autoplayPlugin4.current ? [autoplayPlugin4.current] : []}
              className="w-full"
              onMouseEnter={() => autoplayPlugin4.current?.stop()}
              onMouseLeave={() => autoplayPlugin4.current?.play()}
            >
              <CarouselContent>
                {["/bg4.1.jpeg", "/bg4.2.jpeg"].map((img, index) => (
                  <CarouselItem key={index} className="relative w-full aspect-[4/3]">
                      <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover rounded-md"
                        loading="lazy"
                      />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="right-2 top-1/2 transform -translate-y-1/2" />
            </Carousel>
            <Link href="#">
              <h3 className="text-lg font-bold mb-1">
                Leisure Play
              </h3>
              <p className="text-sm">
                Book a slot for a relaxed game with friends, family, or
              colleagues.
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/* Customer Segments */}
      <div
        className="container mx-auto py-10 px-6 text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold mb-8">Our Customer Segments</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white flex items-center gap-2 transition-colors">
            <FaBuilding className="text-xl" /> Corporate
          </div>
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white flex items-center gap-2 transition-colors">
            <FaSchool className="text-xl" /> Schools & Colleges
          </div>
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white flex items-center gap-2 transition-colors">
            <FaHome className="text-xl" /> Housing Societies
          </div>
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white flex items-center gap-2 transition-colors">
            <FaRunning className="text-xl" /> Sports Academy
          </div>
        </div>
      </div>

      {/* We are Proud to Work With */}
      <div
        className="container mx-auto py-10 px-6 text-center"
        data-aos="zoom-out"
      >
        <h2 className="text-3xl font-bold mb-8">
          We Are Proud to Work With These Companies
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Image
            src="/cust1.jpeg"
            alt="Company 1"
            width={100}
            height={64}
            loading="lazy"
            className="h-13 w-auto"
          />
          <Image
            src="/VRS_Bargarh.jpeg"
            alt="Company 2"
            width={100}
            height={64}
            loading="lazy"
            className="h-13 w-auto"
          />
          {/* <Image
            src="/p1.jpg"
            alt="Company 3"
            width={100}
            height={64}
            loading="lazy"
            className="h-16 w-auto"
          />
          <Image
            src="/p2.jpg"
            alt="Company 3"
            width={100}
            height={64}
            loading="lazy"
            className="h-16 w-auto"
          /> */}
        </div>
      </div>

      {/* Latest News & Upcoming Events 
      <div
        className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        data-aos="slide-up"
      >
        {/* Latest News Section 
        <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white transition-colors">
          <h2 className="text-3xl font-bold mb-4 text-center ">Latest News</h2>
          <div className="space-y-4">
            <div className="p-4 bg-base-100 dark:bg-gray-700 dark:text-white rounded-md">
              <h3 className="text-lg font-bold ">
                New Cricket Academy Opening
              </h3>
              <p className="text-sm ">
                Our brand-new cricket academy opens this summer!
              </p>
              <Link href="/news1" className="text-green-700 inline-block mt-2">
                Read More →
              </Link>
            </div>
            <div className="p-4 bg-base-100 dark:bg-gray-700 dark:text-white rounded-md">
              <h3 className="text-lg font-bold ">
                Football Championship Highlights
              </h3>
              <p className="text-sm ">
                Catch the thrilling moments from our recent tournament.
              </p>
              <Link href="/news2" className="text-green-700 inline-block mt-2">
                View Highlights →
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section 
        <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white transition-colors">
          <h2 className="text-3xl font-bold mb-4 text-center ">
            Upcoming Events
          </h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {[
                {
                  image: "/E1.jpeg",
                  title: "Football Tournament",
                  desc: "Experience the ultimate cricket showdown.",
                },
                {
                  image: "/E2.jpeg",
                  title: "Cricket League",
                  desc: "Experience the ultimate cricket showdown.",
                },
                {
                  image: "/E3.jpeg",
                  title: "Marathon Run",
                  desc: "Run for a cause and challenge yourself.",
                },
                {
                  image: "/E4.jpeg",
                  title: "Marathon Run",
                  desc: "Run for a cause and challenge yourself.",
                },
                {
                  image: "/E1.jpg",
                  title: "Marathon Run",
                  desc: "Run for a cause and challenge yourself.",
                },
              ].map((event, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/1 lg:basis-1/2 max-h-80 min-w-1/2"
                >
                  <div className="p-1">
                    <Card className="w-full md:w-80 shadow-lg hover:shadow-xl transition-all">
                      <CardHeader className="p-0">
                        <div className="relative w-full aspect-[16/9]">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            loading="lazy"
                            className="object-cover rounded-t-lg"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        </div>
                        
                      </CardHeader>
                      <CardContent className="items-center justify-center p-1 dark:bg-gray-700 dark:text-white">
                        <CardTitle className="text-lg font-bold">
                          {event.title}
                        </CardTitle>
                        <p className="text-sm mt-1">{event.desc}</p>
                        <p className="text-sm font-semibold mt-2">
                          📅 20th April 2025
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
      */}
      
      {/* Founders Section */}
      <div className="bg-green-50 dark:bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-green-700 mb-14 dark:text-white"
          >
            Meet the Founders
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {founders.map((founder, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg"
              >
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-green-600 shadow-md dark:border-white">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xl font-semibold text-green-700 mb-2 dark:text-gray-300">
                  {founder.name}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 max-w-sm">
                  {founder.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Quote */}
      <div className="bg-green-100 dark:bg-gray-900 py-16 px-6 text-center">
        <blockquote className="text-xl italic text-gray-800 dark:text-white max-w-3xl mx-auto">
          “Iconic Turf Club was born out of a passion to make world-class sports
          infrastructure accessible to every youth in India.”
        </blockquote>
      </div>

      {/* Testimonials Carousel */}
      <div className="container mx-auto py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-green-700 mb-10 dark:text-white "
        >
          What Our Customers Say
        </motion.h2>
        <Carousel
          plugins={[autoplayPlugin.current]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-gray-800 dark:text-gray-200"
                >
                  <p className="text-lg italic">“{testimonial.quote}”</p>
                  <p className="mt-4 font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </>
  );
}
