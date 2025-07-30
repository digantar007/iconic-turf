"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers } from "react-icons/fa";
const pyramidLevels = [
  {
    title: "Under 10",
    description: "Building foundation skills and passion for the sport.",
    bg: "bg-green-200 dark:bg-gray-200",
  },
  {
    title: "Under 14",
    description: "Skill enhancement and tactical understanding.",
    bg: "bg-green-400 dark:bg-gray-400",
  },
  {
    title: "Under 18",
    description: "Advanced training and competitive development.",
    bg: "bg-green-600 dark:bg-gray-600",
  },
];
export default function MentorWithKidsPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center text-center">
        <Image
          src="/bg.jpeg"
          alt="Mentor With Kids Hero"
          fill
          className="object-cover z-0"
        />
      </div>

      {/* Section 1: Why Football in Schools */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-green-700 dark:text-white mb-6 text-center">
          Why Football in Schools?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Overall Fitness",
            "Team Spirit",
            "Attitude",
            "Discipline",
            "Adaptability",
            "Social Skills",
          ].map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-green-50 dark:bg-gray-800 rounded-lg p-4 shadow"
            >
              <FaCheckCircle className="text-green-600 dark:text-white text-xl" />
              <span className="text-lg font-medium">{point}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: ITC Philosophy Pyramid */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-10 dark:text-white">ITC Philosophy</h2>
      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">
        {pyramidLevels
          .slice()
          .reverse()
          .map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`w-full text-black ${level.bg} rounded-lg py-6 px-4 shadow-lg transform origin-center`}
              style={{
                width: `${90 - index * 20}%`,
              }}
            >
              <h3 className="text-xl font-semibold">{level.title}</h3>
              <p className="text-sm mt-1">{level.description}</p>
            </motion.div>
          ))}
      </div>
    </section>

      {/* Section 3: Why ITC */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-green-700 dark:text-white mb-10 text-center">
          Why ITC?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "1-on-1 Attention",
            "Focus on Overall Physical Conditioning",
            "Structured Training Programs",
            "AIFF Certified Coaches",
            "International Training Modules",
            "Partnerships with State & National Football Associations",
            "Only Academy in Rourkela with Turf Facility",
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-green-50 dark:bg-gray-800 p-4 rounded-lg shadow flex items-start gap-3"
            >
              <FaUsers className="text-green-600 dark:bg-gray-800 dark:text-white text-xl mt-1" />
              <span className="text-base text-gray-700 dark:text-gray-200">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
