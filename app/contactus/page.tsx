import React from "react";
import Image from "next/image";
const page = () => {
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
      <h1>Contact US</h1>
    </>
  );
};

export default page;
