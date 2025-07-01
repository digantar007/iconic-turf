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


export default function AboutUs() {

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

    </>
  );
}
