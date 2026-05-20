import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/userData";
import Reveal from "./Reveal";

const ProjectSection = () => {
  return (
    <section id="projects" className="section-shell">
      <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title mt-4">A few products I have helped move from idea to shipped software.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-zinc-600">
          More project case studies can be dropped into the same data model later without changing
          the page structure.
        </p>
      </Reveal>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 120}>
            <article className="project-card">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  width={900}
                  height={640}
                  className="aspect-[16/10] h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-emerald-700">
                    <span>0{index + 1}</span>
                    <span>{project.role}</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold text-zinc-950">{project.name}</h3>
                  <p className="mt-5 leading-7 text-zinc-600">{project.description}</p>
                  <p className="mt-4 leading-7 text-zinc-800">{project.impact}</p>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="skill-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-4">
                    {(project.links ?? [{ label: "Visit project", href: project.href }]).map((link) => (
                      <Link key={link.href} className="project-link" href={link.href} target="_blank">
                        {link.label}
                        <FiArrowUpRight aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
