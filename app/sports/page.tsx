"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GiCricketBat,
  GiSoccerBall,
  GiHockey,
  GiTennisCourt,
  GiBasketballBall,
  GiVolleyballBall,
  GiPingPongBat,
  GiRunningNinja,
  GiRollerSkate,
} from "react-icons/gi";

const sports = [
  {
    name: "Cricket",
    icon: <GiCricketBat />,
    stats: { players: 120, coaches: 4 },
    image: "/bg3.8.jpeg",
    description:
      "Train on a full-length pitch with high-quality turf. Perfect your technique with experienced coaches.",
  },
  {
    name: "Football",
    icon: <GiSoccerBall />,
    stats: { players: 95, coaches: 3 },
    image: "/bg2.1.jpeg",
    description:
      "Dribble, pass, and score on our regulation-size football turf. Great for kids, pros, and weekend warriors.",
  },
  {
    name: "Hockey",
    icon: <GiHockey />,
    stats: { players: 40, coaches: 2 },
    image: "/bg3.4.jpeg",
    description:
      "Improve your stick-handling, speed, and strategy on our state-of-the-art hockey surface.",
  },
  {
    name: "Tennis",
    icon: <GiTennisCourt />,
    stats: { players: 40, coaches: 2 },
    image: "/bg1.1.jpeg",
    description:
      "Play on professional-grade courts with guidance from skilled tennis instructors.",
  },
  {
    name: "Basketball",
    icon: <GiBasketballBall />,
    stats: { players: 40, coaches: 2 },
    image: "/Basketball Court-Acrylic.jpg",
    description:
      "Shoot hoops, run drills, and build team dynamics on our well-maintained basketball court.",
  },
  {
    name: "Volleyball",
    icon: <GiVolleyballBall />,
    stats: { players: 40, coaches: 2 },
    image: "/bg1.1.jpeg",
    description:
      "Serve, spike, and rally with friends or in tournaments on our cushioned volleyball turf.",
  },
  {
    name: "Pickleball",
    icon: <GiPingPongBat />,
    stats: { players: 40, coaches: 2 },
    image: "/Pickleball Court-Acrylic-1.jpg",
    description:
      "Enjoy one of the fastest-growing sports with our indoor and outdoor pickleball setups.",
  },
  {
    name: "Athletic Track",
    icon: <GiRunningNinja />,
    stats: { players: 40, coaches: 2 },
    image: "/infra1.jpeg",
    description:
      "Run sprints or long-distance with precise measurements on our synthetic athletic track.",
  },
  {
    name: "Skating Rink",
    icon: <GiRollerSkate />,
    stats: { players: 40, coaches: 2 },
    image: "/Skating Rink.jpeg",
    description:
      "Glide and groove in our smooth skating rink, perfect for beginners and advanced skaters alike.",
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

      {/* Sports Grid Section */}
      <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Featured Sports
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={sport.image}
                  alt={sport.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-green-600 dark:text-white text-xl mb-1">
                  {sport.icon}
                  <h3 className="font-bold text-lg">{sport.name}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {sport.stats.players}+ Players · {sport.stats.coaches} Coaches
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  {sport.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
