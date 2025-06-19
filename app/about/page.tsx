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
export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center text-center text-white bg-white">
        <Image
          src="/bg.jpg"
          alt="Hero Background"
          fill
          loading="eager"
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>

        <div className="relative z-20 px-4">
          <h1 className="text-6xl font-extrabold">About</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Delivering complete sports solutions — from building premium
            infrastructure to nurturing future champions.
          </p>
        </div>
      </div>
      {/* Key Points Section */}
      <div className="container mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-10">
          Why Choose Iconic Turf?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: <FaBuilding />,
              label:
                "One-stop solution for designing & building sports infrastructure",
            },
            {
              icon: <FaFootballBall />,
              label: "Odisha's first multi-sport turf for cricket and football",
            },
            {
              icon: <FaCloudSun />,
              label: "All-weather turf for year-round performance",
            },
            {
              icon: <FaThLarge />,
              label: "12,500+ sq. ft. of professionally developed turf area",
            },
            {
              icon: <GiWhistle />,
              label: "Mentoring under certified and experienced coaches",
            },
            {
              icon: <FaLightbulb />,
              label: "Night play enabled with high-power floodlights",
            },
            {
              icon: <FaShower />,
              label: "Washrooms with shower cabinets (men & women)",
            },
            {
              icon: <FaCalendarCheck />,
              label: "Perfect venue for corporate & sports events",
            },
            {
              icon: <FaPeopleCarry />,
              label: "Consulting & execution support from ideation to launch",
            },
          ].map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-green-50 dark:bg-gray-800/50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-green-600 text-2xl">{point.icon}</div>
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
