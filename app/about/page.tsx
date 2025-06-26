"use client";

import Image from "next/image";
import {
  FaFootballBall,
  FaShower,
  FaLightbulb,
  FaCalendarCheck,
  FaBuilding,
  FaPeopleCarry,
  FaThLarge,
  FaCloudSun,
} from "react-icons/fa";
import { GiWhistle } from "react-icons/gi";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutUs() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const autoplayPlugin1 = useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  const features = [
    {
      icon: <FaBuilding />,
      label: "One-stop solution for designing & building sports infrastructure",
      image: "/features/building.jpeg",
    },
    {
      icon: <FaFootballBall />,
      label: "Odisha's first multi-sport turf for cricket and football",
      image: "/features/football.jpeg",
    },
    {
      icon: <FaCloudSun />,
      label: "All-weather turf for year-round performance",
      image: "/features/allweather.jpeg",
    },
    {
      icon: <FaThLarge />,
      label: "12,500+ sq. ft. of professionally developed turf area",
      image: "/features/turfarea.jpeg",
    },
    {
      icon: <GiWhistle />,
      label: "Mentoring under certified and experienced coaches",
      image: "/features/coaching.jpeg",
    },
    {
      icon: <FaLightbulb />,
      label: "Night play enabled with high-power floodlights for Leisure Play",
      image: "/features/floodlight.jpeg",
    },
    {
      icon: <FaShower />,
      label: "Washrooms with shower cabinets (men & women)",
      image: "/features/shower.jpeg",
    },
    {
      icon: <FaCalendarCheck />,
      label: "Perfect venue for corporate & sports events",
      image: "/features/events.jpeg",
    },
    {
      icon: <FaPeopleCarry />,
      label: "Consulting & execution support from ideation to launch",
      image: "/features/support.jpeg",
    },
  ];

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
      bio: "Kunal brings a decade of expertise in sports infrastructure development, project management, and youth outreach programs. His mission is to create accessible, high-quality sports spaces for all.",
    },
    {
      name: "Abhijeet",
      image: "/founder2.jpg",
      bio: "Abhijeet is a passionate sports enthusiast and visionary entrepreneur, dedicated to blending technology and community engagement to elevate grassroots sports in India.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center text-center text-white">
        <Image
          src="/bg.jpeg"
          alt="Hero Background"
          fill
          loading="eager"
          priority
          className="object-cover z-0"
        />
      </div>

      {/* Counters */}
      <div className="bg-green-50 dark:bg-gray-900 py-16 px-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { value: 5, label: "Years of Experience" },
            { value: 50, label: "Projects Completed" },
            { value: 1200, label: "Students Trained" },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-4xl font-bold text-green-700 dark:text-white">
                <CountUp end={metric.value} duration={2} />+
              </h3>
              <p className="text-lg mt-2 text-gray-700 dark:text-gray-200">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Us */}
      <div className="container mx-auto py-16 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-green-700 mb-10 dark:text-white"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-4 p-5 bg-green-50 dark:bg-gray-800/50 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative w-full h-44 rounded overflow-hidden">
                <Image
                  src={point.image}
                  alt={point.label}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3 text-green-600 dark:text-white text-2xl">
                {point.icon}
                <span className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                  {point.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
          plugins={[autoplayPlugin1.current]}
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
