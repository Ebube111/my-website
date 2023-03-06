import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "Genadrop",
    description:
      "GenaDrop is the ultimate multi-chain no code generative NFT minting engine and marketplace. At Genadrop, I worked as a Frontend and blockchain engineer, integrated the NFTs in the marketplace, I built the indexer for the subgraph, Integrated Near contract and wrote some Rust code for Near Minting",
    image: "/genadrop.png",
    link: "https://genadrop.com",
  },
  {
    name: "Daba Finance",
    description:
      "Daba Finance is a Fintech Company that serves as a tool for investing in Africa Startups, IPOs and Stocks. At Daba, I worked as a Frontend Engineer with a team of developers. Majorly, I worked on the Admin App using React and GraphQL",
    image: "/daba.png",
    link: "https://dabafinance.com",
  },
  {
    name: "MPA",
    description:
      "Minority Programmers Association is an international network of developers unifying together to build socially impactful software projects and spread STEM + Web3 education to marginalized communities. I Worked as a Frontend Engineer with a team of developers building the application with Next.js, tailwind and REST",
    image: "/mpa.png",
    link: "https://minorityprogrammers.com",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects / Working Experience
        <hr className="w-12 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-14 md:px-32">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={700}
                        height={700}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {/* <Link href={project?.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
