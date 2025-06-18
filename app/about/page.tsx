"use client";
import Image from "next/image";
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
          <p className="text-lg mt-4 max-w-2xl mx-auto"></p>
        </div>
      </div>
      {/* Key Points Section */}
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Key Points About Iconic Turf
        </h2>
        <ul className="text-lg text-gray-700 space-y-4 max-w-3xl mx-auto text-left">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✔</span> 1st Multi-Sport
            Turf in Odisha for Cricket and Football
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✔</span> All-Weather Turf
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✔</span> More than 12,500
            sqft of Turf Area
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✔</span> Mentoring Under
            Certified Coach
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✔</span> Play Anytime
            During the Day and Night Under the Lights
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✔</span> One-Stop Shop
            Destination for Corporate Events
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">✔</span> One-Stop Shop
            Destination for Consulting and Execution
          </li>
        </ul>
      </div>
    </>
  );
}
