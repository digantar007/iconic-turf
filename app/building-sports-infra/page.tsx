"use client";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function BuildingTurfAPS() {
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

      <div className="max-w-3xl mx-auto pt-10">
        <Accordion type="single" collapsible>
          {/* Turnkey Projects */}
          <AccordionItem value="turnkey">
            <AccordionTrigger className="text-3xl font-bold mb-8">
              Turnkey Projects
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">
                We provide end-to-end solutions for building sports turfs,
                covering **planning, design, material selection, and
                installation**.
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Complete project management</li>
                <li>High-quality turf solutions</li>
                <li>Lighting, fencing & drainage systems</li>
                <li>Maintenance & after-sales support</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Modular Projects */}
          <AccordionItem value="modular">
            <AccordionTrigger className="text-3xl font-bold mb-8">
              Modular Projects
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">
                Our modular solutions allow quick and flexible installations
                with **customizable features**.
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Portable & scalable turf solutions</li>
                <li>Faster installation</li>
                <li>Budget-friendly options</li>
                <li>Ideal for temporary setups & training grounds</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
