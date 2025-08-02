"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCogs, FaDraftingCompass, FaCubes } from "react-icons/fa";

const surfaceOptions = [
  {
    title: "PCC Base",
    image: "/infra/pcc.jpg",
    features: [
      "4 inch thickness with smooth finish on top",
      "Prone to cracks due to temperature variations",
      "Affects playing surface causing variable bounce",
      "May cause injury to players",
    ],
  },
  {
    title: "Asphalt Base",
    image: "/infra/asphalt.jpg",
    features: [
      "4 inch WBM base + 2 inch Asphalt layer",
      "Crack resistant — improves longevity",
      "Smooth, uniform surface",
      "2 years guarantee* (*conditions apply)",
    ],
  },
  {
    title: "Dynamic Base",
    image: "/infra/dynamic.jpg",
    features: [
      "4 inch drainage pipes laid across the ground",
      "6 inch macadam surface with graded aggregates",
      "Water percolates through gaps into the drainage system",
      "Ideal for long-term play & weather-resistance",
    ],
  },
];

const buildingBlocks = [
  {
    title: "Step 1: Identify Land & Survey",
    image: "/infra/identify.jpg",
    description:
      "Initial evaluation including soil analysis, topographic survey, and site readiness.",
  },
  {
    title: "Step 2: Foundation & Structure",
    image: "/infra/foundation.jpg",
    description:
      "Foundation design and preparation followed by steel structure fabrication and assembly.",
  },
  {
    title: "Step 3: Flooring & Lighting",
    image: "/infra/flooring.jpg",
    description:
      "Includes PCC/Dynamic/Asphalt flooring, curing processes, and electrical wiring installation.",
  },
  {
    title: "Step 4: Netting, Turf & Acrylic Court",
    image: "/infra/turf.jpg",
    description:
      "Laying of synthetic turf or acrylic court, followed by netting, line marking, and finishing.",
  },
];

const servicesByITC = [
  {
    model: "DESIGN BUILD TRANSFER (DBT) MODEL",
    icon: <FaCogs className="text-3xl text-green-600 dark:text-white" />,
    points: [
      "Understanding client requirements - area available, type of sports, target audience, services offering, etc.",
      "Site visit",
      "Preliminary Analysis: Soil analysis and land topography",
      "Civil Work: Foundation Design and type of surface for turf laying",
      "Fabrication: Structure design and fabrication",
      "Netting: Types of Nets and fixing them",
      "Turf Laying",
    ],
  },
  {
    model: "DESIGN MODEL",
    icon: <FaDraftingCompass className="text-3xl text-green-600 dark:text-white" />,
    points: [
      "Understanding client requirements - area available, type of sports, target audience, services offering, etc.",
      "Site visit",
      "Design for civil work & structure",
      "Netting & Turf Laying",
    ],
  },
  {
    model: "MODULAR MODEL",
    icon: <FaCubes className="text-3xl text-green-600 dark:text-white" />,
    points: [
      "Understanding client requirements - area available, type of sports, target audience, services offering, etc.",
      "Site visit",
      "Netting & Turf Laying",
    ],
  },
];

export default function BuildInfraPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/bg.jpeg"
          alt="Build Infra Hero"
          fill
          className="object-cover z-0"
        />
      </div>

      {/* Transformation Section */}
      <div className="bg-white dark:bg-gray-900 py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 dark:text-white mb-8">
          Transformation
        </h2>
        <div className="relative max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-full sm:w-1/2 h-64 rounded-lg overflow-hidden">
            <Image
              src="/infra/raw.jpg"
              alt="Raw Ground"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-4xl text-green-700">→</div>
          <div className="relative w-full sm:w-1/2 h-64 rounded-lg overflow-hidden">
            <Image
              src="/infra/final.jpg"
              alt="Completed Turf"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Building Blocks Section (Row Style) */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10 dark:text-white">
          Development Stages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {buildingBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-700 dark:text-white mb-2">
                  {block.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Surface Options Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10 dark:text-white">
          Our Surface Building Blocks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {surfaceOptions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-green-700 dark:text-white">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {item.features.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✔</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services by ITC Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10 dark:text-white">
          Services by ITC
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesByITC.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-bold text-green-700 dark:text-white">
                  {service.model}
                </h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 italic">
          *Conditions apply. Surface choice depends on ground layout & client requirement.
        </div>
      </section>

      {/* CTA */}
      <div className="bg-green-700 text-white py-10 text-center">
        <h2 className="text-2xl font-semibold">
          If you want it, we can help you create it.
        </h2>
        <p className="mt-2">
          Reach out to us for detailed consultation & site planning.
        </p>
      </div>
    </div>
  );
}
