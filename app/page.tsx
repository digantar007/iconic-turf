"use client";
import Link from "next/link";
import CountUp from "react-countup";
import Image from "next/image";
import { FaBuilding, FaSchool, FaHome, FaRunning } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
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
          <h1 className="text-6xl font-extrabold">Welcome to Iconic Turf</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Empowering sports through sportsmanship, dedication, and
            excellence.
          </p>
        </div>
      </div>
      {/* Who We Are & Metrics Section Combined */}
      <div
        className="container mx-auto py-10 px-6 text-center"
        data-aos="fade-in"
      >
        <h4 className="text-3xl font-bold mb-4">
          Your Multi-Sports Destination
        </h4>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          A professional sports organization dedicated to building world-class sports infrastructure, mentoring community youth under certified coaches, and organizing premier sports and corporate events.
        </p>
        {/* Metrics Section */}
        <div className="container mx-auto py-10 px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 3, label: "Years of Experience" },
              { value: 20, label: "Technologies & Approach" },
              { value: 100, label: "Happy Customers" },
              { value: 1000, label: "Customer Satisfaction" },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-200 to-green-100 text-green-900 
             dark:from-gray-800 dark:to-gray-700 dark:text-white 
             p-6 rounded-xl shadow-lg hover:scale-105 transition-colors duration-300"
              >
                <h3 className="text-2xl font-extrabold ">
                  <CountUp end={metric.value} suffix="+" duration={2} />
                </h3>
                <p className="text-sm  mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Expertise Section */}
      <div
        className="container mx-auto py-10 px-6 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link
            href="/building-sports-infra"
            className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white cursor-pointer hover:scale-105 transition-colors"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/bg1.jpeg"
                alt="Building Sports Infrastructure"
                fill
                className="rounded-md mb-4"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-bold ">
              Building Sports Infrastructure
            </h3>
            <p className="text-sm ">
              Crafting world-class infrastructure for unmatched sports experiences.
            </p>
          </Link>
          <Link
            href="/expertise/coaching-students"
            className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white cursor-pointer hover:scale-105 transition-colors"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/bg2.jpeg"
                alt="Coaching"
                fill
                loading="lazy"
                className="rounded-md mb-4"
              />
            </div>
            <h3 className="text-lg font-bold ">Mentoring Community Kids</h3>
            <p className="text-sm ">
              Empowering athletes with expert guidance and mentorship.
            </p>
          </Link>

          <Link
            href="/expertise/building-community"
            className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white cursor-pointer hover:scale-105 transition-colors"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/bg3.jpeg"
                alt="Community"
                fill
                loading="lazy"
                className="rounded-md mb-4"
              />
            </div>
            <h3 className="text-lg font-bold "> Organize Sports & Corporate Events</h3>
            <p className="text-sm ">
              Creating a thriving sports culture through engagement.
            </p>
          </Link>
          <Link
            href="/expertise/building-community"
            className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white cursor-pointer hover:scale-105 transition-colors"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/bg4.jpeg"
                alt="Community"
                fill
                loading="lazy"
                className="rounded-md mb-4"
              />
            </div>
            <h3 className="text-lg font-bold "> Leisure Play</h3>
            <p className="text-sm ">
              Book a slot for a relaxed, recreational game with friends or family. 
            </p>
          </Link>
        </div>
      </div>
      {/* Customer Segments */}
      <div
        className="container mx-auto py-10 px-6 text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold mb-8">Our Customer Segments</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white flex items-center gap-2 transition-colors">
            <FaBuilding className="text-xl" /> Corporate
          </div>
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white flex items-center gap-2 transition-colors">
            <FaSchool className="text-xl" /> Schools & Colleges
          </div>
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white flex items-center gap-2 transition-colors">
            <FaHome className="text-xl" /> Housing Societies
          </div>
          <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white flex items-center gap-2 transition-colors">
            <FaRunning className="text-xl" /> Sports Academy
          </div>
        </div>
      </div>

      {/* We are Proud to Work With */}
      <div
        className="container mx-auto py-10 px-6 text-center"
        data-aos="zoom-out"
      >
        <h2 className="text-3xl font-bold mb-8">
          We Are Proud to Work With These Companies
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Image
            src="/p1.jpg"
            alt="Company 1"
            width={100}
            height={64}
            loading="lazy"
            className="h-16 w-auto"
          />
          <Image
            src="/p2.jpg"
            alt="Company 2"
            width={100}
            height={64}
            loading="lazy"
            className="h-16 w-auto"
          />
          <Image
            src="/p1.jpg"
            alt="Company 3"
            width={100}
            height={64}
            loading="lazy"
            className="h-16 w-auto"
          />
          <Image
            src="/p2.jpg"
            alt="Company 3"
            width={100}
            height={64}
            loading="lazy"
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Latest News & Upcoming Events */}
      <div
        className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        data-aos="slide-up"
      >
        {/* Latest News Section */}
        <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white transition-colors">
          <h2 className="text-3xl font-bold mb-4 text-center ">Latest News</h2>
          <div className="space-y-4">
            <div className="p-4 bg-base-100 dark:bg-gray-700 dark:text-white rounded-md">
              <h3 className="text-lg font-bold ">
                New Cricket Academy Opening
              </h3>
              <p className="text-sm ">
                Our brand-new cricket academy opens this summer!
              </p>
              <Link href="/news1" className="text-green-700 inline-block mt-2">
                Read More →
              </Link>
            </div>
            <div className="p-4 bg-base-100 dark:bg-gray-700 dark:text-white rounded-md">
              <h3 className="text-lg font-bold ">
                Football Championship Highlights
              </h3>
              <p className="text-sm ">
                Catch the thrilling moments from our recent tournament.
              </p>
              <Link href="/news2" className="text-green-700 inline-block mt-2">
                View Highlights →
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="p-4 bg-accent rounded-lg shadow-md dark:bg-gray-800 dark:text-white transition-colors">
          <h2 className="text-3xl font-bold mb-4 text-center ">
            Upcoming Events
          </h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {[
                {
                  image: "/E1.jpeg",
                  title: "Football Tournament",
                  desc: "Experience the ultimate cricket showdown.",
                },
                {
                  image: "/E2.jpeg",
                  title: "Cricket League",
                  desc: "Experience the ultimate cricket showdown.",
                },
                {
                  image: "/E3.jpeg",
                  title: "Marathon Run",
                  desc: "Run for a cause and challenge yourself.",
                },
                {
                  image: "/E4.jpeg",
                  title: "Marathon Run",
                  desc: "Run for a cause and challenge yourself.",
                },
                {
                  image: "/E1.jpg",
                  title: "Marathon Run",
                  desc: "Run for a cause and challenge yourself.",
                },
              ].map((event, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/1 lg:basis-1/2 max-h-80 min-w-1/2"
                >
                  <div className="p-1">
                    <Card className="w-full md:w-80 shadow-lg hover:shadow-xl transition-all">
                      <CardHeader className="p-0">
                        <div className="relative w-full aspect-[16/9]">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            loading="lazy"
                            className="object-cover rounded-t-lg"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        </div>
                        {/* <CardTitle>{event.title}</CardTitle>
                          <CardDescription>Event Date: 20th April 2025</CardDescription> */}
                      </CardHeader>
                      <CardContent className="items-center justify-center p-1 dark:bg-gray-700 dark:text-white">
                        <CardTitle className="text-lg font-bold">
                          {event.title}
                        </CardTitle>
                        <p className="text-sm mt-1">{event.desc}</p>
                        <p className="text-sm font-semibold mt-2">
                          📅 20th April 2025
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </>
  );
}
