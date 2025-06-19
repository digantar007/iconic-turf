import React from "react";
import Image from "next/image";
const page = () => {
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
          <h1 className="text-6xl font-extrabold">Contact Us</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Empowering champions through sportsmanship, dedication, and
            excellence.
          </p>
        </div>
      </div>
      <h1>Contact US</h1>
    </>
  );
};

export default page;
