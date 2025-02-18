import { Button } from "@heroui/button";

import "animate.css";
import Link from "next/link";

export default function Home() {
  const cardData = [
    {
      // icon: IconChartHistogram,
      title: "See Your Progress In Motion",
      body: "Stay connected to your fitness progress through specialized tracking and customizable visualization tools.",
    },
    {
      // icon: IconBarbell,
      title: "Find Your Ideal Workout",
      body: "Explore a wide library of workouts complete with instructions, videos, and useful tips on how to perform all kinds of exercises.",
      className: "",
    },
    {
      // icon: IconUserScan,
      title: "Personalized Fitness Programs",
      body: "Choose from our extensive collection of exercises to make personalized plans for your goals, timetable, and ability.",
    },
    {
      // icon: IconClipboardData,
      title: "Record & Track Your Workouts",
      body: "Stay motivated and keep your pace by tracking workouts in real time.",
    },
  ];

  return (
    <main>
      <section className="relative px-3 max-md:px-[30px] max-md:mt-[-30px] mx-auto flex justify-center hero-section max-[767px]:items-center h-screen bg-black">
        <div className="flex items-center justify-center max-[767px]:pt-[100px] max-[767px]:pb-[100px] max-[767px]:flex-col gap-5 page-width  animate__animated animate__fadeInLeft max-[768]:animate__animated animate__fadeInUp duration-1000">
          <div className="flex flex-col justify-center items-center text-left max-[767px]:items-center max-[767px]:pt-[100px] max-[580px]:pt-[50px]">
            <div className="flex justify-center mb-5">
              <span className="section-label">FITFORMOTION</span>
            </div>
            <h1 className="hero-headline uppercase text-white leading-[60px] text-center">
              Where <span className="red">Fitness</span>
              <br />
              Finds Its <span className="red">Form</span>
              <br />
              In Every <span className="red">Motion!</span>
            </h1>
            <p className="text-zinc-500 mt-6 mb-6 text-center description">
              Easily find exercises, customize your routine, and stay motivated
              as you achieve your fitness goals.
            </p>
            <div className="flex gap-2 justify-center max-[768px]:flex-col max-[768px]:items-center mt-6 w-[90%]">
              <Button
                className="bg-primary-800 text-white w-[150px] max-[768px]:w-full border-1 border-primary-800"
                as={Link}
                prefetch={false}
                href="/dashboard"
                size="lg"
              >
                Login
              </Button>
              <Button
                className="bg-transparent text-white w-[150px] max-[768px]:w-full border-1 border-white max-[768px]:mt-3"
                as={Link}
                prefetch={false}
                href="/features"
                size="lg"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
