"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import { FaFutbol, FaHockeyPuck } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

const sportsData = [
  {
    name: "Cricket",
    icon: <GiCricketBat />,
    description:
      "Cricket is a bat-and-ball game played between two teams of eleven players. It's highly popular in India, England, Australia, and other parts of the world.",
    id: "cricket",
  },
  {
    name: "Football",
    icon: <FaFutbol />,
    description:
      "Football is a team sport played with a spherical ball between two teams of 11 players. It's the world’s most popular sport.",
    id: "football",
  },
  {
    name: "Hockey",
    icon: <FaHockeyPuck />,
    description:
      "Hockey is a fast-paced game played on ice or field with sticks and a puck or ball. It requires speed, strategy, and precision.",
    id: "hockey",
  },
];

export default function SportsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center text-white">
        <Image
          src="/bg.jpeg"
          alt="Hero Background"
          fill
          loading="eager"
          priority
          className="object-cover z-0"
        />
      </div>

      {/* Accordion Section */}
      <div className="pt-12 px-4 pb-20">
        <div className="w-full max-w-3xl mx-auto">
          <Accordion
            type="multiple"
            defaultValue={["cricket"]}
            className="space-y-3"
          >
            {sportsData.map((sport) => (
              <AccordionItem
                key={sport.id}
                value={sport.id}
                className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-md"
              >
                <AccordionTrigger className="flex items-center justify-between gap-4 px-6 py-4 text-left text-green-900 dark:text-white font-semibold bg-green-50 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-gray-700 rounded-t-xl transition-all">
                  <div className="flex items-center gap-3 text-lg">
                    <span className="text-2xl">{sport.icon}</span>
                    {sport.name}
                  </div>
                </AccordionTrigger>
                <AccordionContent
                  className="px-6 py-4 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 rounded-b-xl border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
                >
                  {sport.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}