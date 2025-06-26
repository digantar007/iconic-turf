"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFutbol,
  FaHockeyPuck,
} from "react-icons/fa";

const sports = [
  {
    name: "Cricket",
    icon: <FaFutbol />, // Replace with correct cricket icon if needed
    stats: { players: 120, coaches: 4 },
    image: "/E4.jpeg",
    description: "Experience world-class cricket training on professional-grade turf with expert coaches."
  },
  {
    name: "Football",
    icon: <FaFutbol />,
    stats: { players: 95, coaches: 3 },
    image: "/bg2.1.jpeg",
    description: "Join our thriving football program to master skills, teamwork, and fitness."
  },
  {
    name: "Hockey",
    icon: <FaHockeyPuck />,
    stats: { players: 40, coaches: 2 },
    image: "/bg3.4.jpeg",
    description: "Train on high-quality turf and learn from the best in our hockey initiative."
  },
];

export default function SportsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-96 flex items-center justify-center text-center text-white">
        <Image
          src="/bg.jpeg"
          alt="Sports Hero Background"
          fill
          loading="eager"
          priority
          className="object-cover z-0"
        />
      </div>

      {/* Horizontal Scrollable Sports Cards */}
      <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-8">
          Featured Sports
        </h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max px-2">
            {sports.map((sport, index) => (
              <motion.div
                key={sport.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-72 sm:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex-shrink-0 hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-40 rounded-md overflow-hidden mb-3">
                  <Image src={sport.image} alt={sport.name} fill className="object-cover" />
                </div>
                <div className="flex items-center gap-2 text-green-600 text-xl mb-2">
                  {sport.icon}
                  <h3 className="font-bold text-lg">{sport.name}</h3>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {sport.stats.players}+ Players · {sport.stats.coaches} Coaches
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  {sport.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
