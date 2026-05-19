import { principles, profile } from "@/data/userData";
import Reveal from "./Reveal";

const AboutSection = () => {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Engineering profile</p>
          <h2 className="section-title mt-4">Software engineer focused on product execution, scalable interfaces, and reliable delivery.</h2>
        </Reveal>

        <Reveal className="space-y-6 text-base leading-8 text-zinc-600 sm:text-lg" delay={120}>
          <p>
            I am {profile.name}, a software engineer with over five years of experience building
            production-grade applications across web, mobile, and API-connected systems. My work
            spans customer-facing products, internal platforms, admin workflows, backend
            integrations, and database-backed features that need to perform reliably in real usage.
          </p>
          <p>
            I bring a practical engineering style: clarify the product intent, design clean
            frontend architecture, align with backend constraints, and ship interfaces that remain
            maintainable as requirements evolve. I care about implementation quality, but I measure
            it by what it enables for users, teams, and the business after release.
          </p>

          <div className="grid gap-3 pt-4">
            {principles.map((principle, index) => (
              <Reveal key={principle} delay={180 + index * 90}>
                <div className="principle-row">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                  <p>{principle}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
