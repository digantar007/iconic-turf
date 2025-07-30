"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GiCricketBat,
  GiSoccerBall,
  GiTennisCourt,
  GiBasketballBall,
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
      `ITC will help you in setting up of a Cricket Turf Ground, as per your requirements, offering quality products, installation services & maintenance services. Not only do we supply & install but we can also help in design of the Turf Ground as per international standards.\n\nProducts & Services provided by ITC:\n\n• Supplier of Artificial Grass for Cricket\n• Infills for Artificial Cricket\n• Installation of Artificial Grass\n• Supplier of Seam Tapes & Glue\n• Sports Net (Sides & Roof)\n• Installation of Sports Net\n• Fabrication & Errection\n• Ground Markings`,
  },
  {
    name: "Football",
    icon: <GiSoccerBall />,
    stats: { players: 95, coaches: 3 },
    image: "/bg2.1.jpeg",
    description:
      `ITC will help you in setting up of a Football Turf Ground, as per your requirements, offering quality products, installation services & maintenance services. Not only do we supply & install but we can also help in design of the Turf Ground as per international standards.\n\nProducts & Services provided by ITC:\n\n• Supplier of FIFA Accredited Artificial Grass for Football\n• Infills for Artificial Grass\n• Installation of Artificial Grass\n• Supplier of Seam Tapes & Glue\n• Sports Net (Sides & Roof)\n• Installation of Sports Net\n• Fabrication & Errection\n• Ground Markings`,
  },
  {
    name: "Tennis",
    icon: <GiTennisCourt />,
    stats: { players: 40, coaches: 2 },
    image: "/bg1.1.jpeg",
    description:
      `ITC can help you develop & build 8-layer or 5-layer Acrylic based Tennis Courts as per ITA standards. Our team can build Tennis Court on any base- Asphalt or Concrete depending on the client requirement. The court can also be made using P.P. Tiles which is easy to install with very less installation period when compared to Acrylic based Tennis Courts.\n We will also ensure that the same court can be made Multi-Sport, say, for Badminton, Pickleball. \n Before starting the work, the base is checked to ensure that there are no cracks and it should be level.\n\nProducts & Services provided by ITC:\n\n• Supplier of Acrylic Paints/P.P. Tiles\n• Application of Acrylic Paints/P.P. Tiles as per Standard Procedure\n• Supplier of Sports Net (sides)\n• Installation of Sports Net (sides)\n• Fabrication & Errection\n• Court Markings`,
  },
  {
    name: "Basketball",
    icon: <GiBasketballBall />,
    stats: { players: 40, coaches: 2 },
    image: "/Basketball Court-Acrylic.jpg",
    description:
      `ITC can help you develop & design an IBA certified Basketball Court using Acrylic colours, P.P. Tiles, Wooden Flooring or P.U. Flooring as required by the client.\n We will also ensure that the same court can be made Multi-Sport, say, for Badminton or Pickleball or Tennis.\n \n\nProducts & Services provided by ITC:\n\n• Supplier of Acrylic Paints/P.P. Tiles/Wooden Flooring/P.U\n• Application of Acrylic Paints/P.P. Tiles/Wooden Flooring/P.U. as per Standard Procedure\n• Supplier of Sports Net (sides)\n• Installation of Sports Net (sides)\n• Fabrication & Errection\n• Court Markings`,
  },
  {
    name: "Pickleball",
    icon: <GiPingPongBat />,
    stats: { players: 40, coaches: 2 },
    image: "/Pickleball Court-Acrylic-1.jpg",
    description:
      `ITC can help you build state-of-the art Pickleball Court, Acrylic or P.P. Tiles on any base- Asphalt or Concrete, depending on client requirement. P.P. Tiles are easy to install with very less installation period when compared to Acrylic based Tennis Courts.\n Before starting the work, the base is checked to ensure that there are no cracks and it should be level.\n We will also ensure that the same court can be made Multi-Sport, say, for Badminton.\n\nProducts & Services provided by ITC:\n\n• Supplier of Acrylic Paints/P.P. Tiles\n• Application of Acrylic Paints/P.P. Tiles as per Standard Procedure\n• Supplier of Sports Net (sides)\n• Installation of Sports Net (sides)\n• Fabrication & Errection\n• Court Markings`,
  },
  {
    name: "Athletic Track",
    icon: <GiRunningNinja />,
    stats: { players: 40, coaches: 2 },
    image: "/infra1.jpeg",
    description:
      `ITC can help in building  IAAF  -compliant PU/EPDM synthetic tracks of different varieties Full PU, sandwich system, or spray coat . We specialised designed for track and field sports, including running, walking, and various field events. It is a fundamental component of sports complexes and stadiums worldwide and serves athletes of all levels—from school children to Olympians.\n\nProducts & Services provided by ITC:\n\n•  Site Assessment & Consultation\n• Track Design & Planning\n• Synthetic Track Surface Installation\n• Painting & Marking`,
  },
  {
    name: "Skating Rink",
    icon: <GiRollerSkate />,
    stats: { players: 40, coaches: 2 },
    image: "/Skating Rink.jpeg",
    description:
      `ITC can help you develop & build Acrylic based Skating Rink as per the available area at the client’s site. Our team can build as per Standard Dimensions, subject to area availability, on Asphalt or Concrete base.\n\n• Supplier of Acrylic Paints\n• Application of Acrylic Paints as per Standard Procedure\n• Supplier of Sports Net (sides)\n• Installation of Sports Net (sides)\n• Fabrication & Errection\n• Markings`,
  },
];

export default function SportsPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="/bg.jpeg"
          alt="Sports Hero"
          fill
          priority
          className="object-cover"
        />
        
      </div>

      {/* Sports Grid Section */}
      <section className="py-16 px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Our Sports Offerings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={sport.image}
                  alt={sport.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-lg font-semibold mb-2">
                  {sport.icon} {sport.name}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  {sport.stats.players}+ Players · {sport.stats.coaches} Coaches
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                  {sport.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
