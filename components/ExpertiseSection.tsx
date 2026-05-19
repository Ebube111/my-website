import { expertise } from "@/data/userData";
import Reveal from "./Reveal";

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="section-shell">
      <Reveal className="mb-10 max-w-3xl">
        <p className="eyebrow">What I bring</p>
        <h2 className="section-title mt-4">Software engineering depth, with enough backend context to ship complete products.</h2>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {expertise.map((item, index) => (
          <Reveal key={item.title} delay={index * 110}>
            <article className="expertise-card">
              <h3 className="text-xl font-semibold text-zinc-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-zinc-600">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
