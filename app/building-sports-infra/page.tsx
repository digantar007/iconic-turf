"use client";

import Image from "next/image";
import {
  FaTools,
  FaCogs,
  FaRulerCombined,
  FaCheckCircle,
} from "react-icons/fa";

const infraSteps = [
  {
    title: "Site Survey & Planning",
    description:
      "We begin with a thorough land assessment, measuring and analyzing the space for optimal layout and usage.",
    icon: <FaRulerCombined className="text-green-600 text-3xl" />,
    image: "/infra1.jpeg",
  },
  {
    title: "Ground Preparation",
    description:
      "Our team clears, levels, and compacts the ground using modern equipment, ensuring a solid and lasting foundation.",
    icon: <FaTools className="text-green-600 text-3xl" />,
    image: "/infra2.jpeg",
  },
  {
    title: "Base Layer & Drainage",
    description:
      "We install professional-grade sub-base layers with integrated drainage systems to prevent waterlogging.",
    icon: <FaCogs className="text-green-600 text-3xl" />,
    image: "/Pickleball Court-Acrylic-1.jpg",
  },
  {
    title: "Turf Installation",
    description:
      "Using top-quality synthetic turf, we lay and finish the surface for optimal performance and durability.",
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
    image: "/Basketball Court- Acrylic.png",
  },
];

export default function BuildSportsInfra() {
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
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Building World-Class Sports Infrastructure
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
          At Iconic Turf Club, we follow a detailed and professional approach to
          deliver top-quality sports turfs designed for performance, safety, and
          longevity.
        </p>
        <div className="space-y-16">
          {infraSteps.map((step, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-6 items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  {step.icon}
                  <h2 className="text-2xl font-semibold">{step.title}</h2>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
