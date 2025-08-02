"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers } from "react-icons/fa";

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
          {["Overall Fitness", "Team Spirit", "Attitude", "Discipline", "Adaptability", "Social Skills"].map(
            (point, index) => (
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
            )
          )}
        </div>
      </section>

      {/* Section 2: ITC Philosophy Pyramid Image */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 text-center relative">
        <div className="flex justify-center items-center">
          <Image
            src="/MentPyr.png"
            alt="ITC Philosophy Pyramid"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Section 3: Why ITC */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-green-700 dark:text-white mb-10 text-center">
          Why ITC?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["1-on-1 Attention", "Focus on Overall Physical Conditioning", "Structured Training Programs", "AIFF Certified Coaches", "International Training Modules", "Partnerships with State & National Football Associations", "Only Academy in Rourkela with Turf Facility"].map(
            (benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-green-50 dark:bg-gray-800 p-4 rounded-lg shadow flex items-start gap-3"
              >
                <FaUsers className="text-green-600 dark:bg-gray-800 dark:text-white text-xl mt-1" />
                <span className="text-base text-gray-700 dark:text-gray-200">{benefit}</span>
              </motion.div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
