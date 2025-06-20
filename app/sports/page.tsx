"use client";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";
import {
  FaFutbol,
  FaHockeyPuck,
  FaTableTennis,
  FaBasketballBall,
  FaVolleyballBall,
} from "react-icons/fa";

const sportsData = [
  {
    name: "Cricket",
    icon: <FaHockeyPuck />,
    description: "Cricket is a bat-and-ball game played between two teams.",
  },
  {
    name: "Football",
    icon: <FaFutbol />,
    description:
      "Football is a team sport played with a spherical ball between two teams of 11 players.",
  },
  {
    name: "Hockey",
    icon: <FaHockeyPuck />,
    description:
      "Hockey is a fast-paced game played on ice or field with sticks and a puck or ball.",
  },
  {
    name: "Badminton",
    icon: <FaTableTennis />,
    description:
      "Badminton is a racquet sport played using a shuttlecock across a net.",
  },
  {
    name: "Tennis",
    icon: <FaTableTennis />,
    description:
      "Tennis is a sport where players use rackets to hit a ball over a net on a rectangular court.",
  },
  {
    name: "Basketball",
    icon: <FaBasketballBall />,
    description:
      "Basketball is played between two teams of five players each on a rectangular court.",
  },
  {
    name: "Volleyball",
    icon: <FaVolleyballBall />,
    description:
      "Volleyball is a sport where two teams try to score points by hitting a ball over a net.",
  },
];
export default function SportsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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
      <div className="pt-10">
        {/* Accordion Section */}
        <div className="w-full max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {sportsData.map((sport, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-semibold text-green-800 hover:bg-green-100 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sport.icon}</span>
                    {sport.name}
                  </div>
                  <span>{activeIndex === index ? "▲" : "▼"}</span>
                </button>
                {activeIndex === index && (
                  <div className="px-4 py-2 text-gray-700 bg-gray-50">
                    {sport.description}
                  </div>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
