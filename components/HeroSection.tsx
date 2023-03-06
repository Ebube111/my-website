"use client";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col md:mb-44 text-center items-center justify-center animate-fadeIn animation-delay-2 px-6 my-10 py-16 sm:py-18 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:ml-60 md:w-1/3">
          <Image
            className="rounded-full bg-black shadow-2xl"
            src="/thisme.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-2/3 ">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi I&#39;m Ebube!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-xl md:w-2/3">
            I&#39;m a{" "}
            <span className="font-semibold text-purple-600">
              Software Engineer{" "}
            </span>
            based in Nigeria. Building products in Web2 and Web3 that makes life
            easier and more meaningful
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-purple-600 rounded shadow hover:bg-purple-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="md:hidden flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
