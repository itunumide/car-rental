import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import CurvyEdgeTop from "./CurvyEdgeTop";
import CurvyEdgeButtom from "./CurvyEdgeButtom";

const ExpertTeam = () => {
  return (
    <>
      <CurvyEdgeTop />
      <section className="relative bg-[#1c1601] text-white py-20">
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Heading */}
          <div className="w-full flex justify-center items-center">
            <div className="mb-4 text-[#525252] text-lg lg:text-2xl font-[Roboto] uppercase tracking-wide font-light bg-[#f1f1f1] w-max px-5 py-3 rounded-[50px]">
              Car rental expert stats
            </div>
          </div>
          <h1 className="font-bold mb-6 font-[Roboto] text-5xl italic leading-[1.5] ">
            We are an expert team
            <br />
            Our stats also are{" "}
            <span className="text-yellow-400 underline underline-offset-[12px]">
              expert
            </span>
          </h1>
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
            <StatItem count={99} label="Happy Clients" />
            <StatItem count={28} label="Years of Experience" />
            <StatItem count={96} label="Expert Members" />
            <StatItem count={78} label="Awards Winner" />
          </div>
        </div>
      </section>
      <div className="relative w-full">
        <div
          className="absolute w-full -z-20 -top-1 sm:-top-2 lg:-top-5 "
          style={{ transform: "rotateX(180deg) rotateY(180deg)" }}
        >
          <CurvyEdgeButtom />
        </div>
      </div>
    </>
  );
};

const StatItem = ({ count, label }) => {
  const [inView, setInView] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Stop observing once the element is in view
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed (e.g., 0.5 means half of the element should be in view)
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);
  return (
    <>
      <div
        ref={statRef}
        className="relative -bg--clr-primary hover:bg-white px-4 py-2 rounded-full mt-32 flex items-center justify-center group  transition-all duration-300 hover:-translate-y-3"
      >
        <p className="font-semibold font-[Roboto] text-black text-base sm:text-lg lg:text-xl leading-none">
          {label}
        </p>
        <div className="absolute -top-32 h-32 w-[70%] flex flex-col items-center justify-center text-white  rounded-t-3xl group-hover:-bg--clr-primary group-hover:text-black">
          <h2 className="text-5xl lg:text-8xl font-extralight font-[Roboto]">
            {/* <CountUp end={count} duration={3} separator="," />
            {count >= 1000 ? "k" : "+"} */}
            {inView ? <CountUp end={count} duration={3} separator="," /> : null}
            {count >= 1000 ? "k" : "+"}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ExpertTeam;
