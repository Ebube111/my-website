import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSmartphone,
} from "react-icons/fi";
import { profile, proofPoints } from "@/data/userData";
import Reveal from "./Reveal";

const deliverySignals = [
  {
    label: "Frontend architecture",
    value: "React / Next.js / TypeScript",
    icon: FiCode,
  },
  {
    label: "Mobile release flow",
    value: "Production apps and store delivery",
    icon: FiSmartphone,
  },
  {
    label: "Backend integration",
    value: "REST APIs, auth, databases",
    icon: FiDatabase,
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="section-shell pt-32 sm:pt-36">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="animate-rise">
          <p className="eyebrow">Lead engineer / web / mobile / APIs</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-zinc-950 sm:text-6xl lg:text-7xl">
            I turn product ideas into fast, reliable software.
          </h1>
          <p className="animate-rise mt-7 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl [animation-delay:120ms]">
            {profile.summary}
          </p>

          <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row [animation-delay:220ms]">
            <a className="button-primary" href={`mailto:${profile.email}`}>
              <FiMail aria-hidden="true" />
              Email me
            </a>
            <a className="button-secondary" href="#projects">
              View work
              <FiArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="animate-rise mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-zinc-600 [animation-delay:320ms]">
            <a className="social-link" href={profile.socials[0].href} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
            <a className="social-link" href={profile.socials[1].href} target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </a>
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="hero-console animate-rise [animation-delay:180ms]">
          <div className="pointer-events-none absolute -left-8 top-10 hidden h-24 w-24 border border-emerald-200 lg:block" />
          <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full bg-emerald-300/20 blur-2xl" />

          <div className="relative rounded-[2rem] border border-zinc-200 bg-zinc-950 p-5 text-white shadow-2xl shadow-zinc-300/80 sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                  Delivery system
                </p>
                <p className="mt-2 text-sm text-zinc-400">Ebube Agwaze / Lead Software Engineer</p>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {deliverySignals.map((signal, index) => {
                const Icon = signal.icon;

                return (
                  <div
                    key={signal.label}
                    className="console-row animate-rise"
                    style={{ animationDelay: `${360 + index * 110}ms` }}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                      <Icon aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{signal.label}</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">{signal.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-white">Release confidence</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <FiCheckCircle aria-hidden="true" />
                  Production-minded
                </span>
              </div>

              <div className="space-y-3">
                <div className="progress-track">
                  <span className="progress-fill w-[92%]" />
                </div>
                <div className="progress-track">
                  <span className="progress-fill w-[78%] [animation-delay:180ms]" />
                </div>
                <div className="progress-track">
                  <span className="progress-fill w-[86%] [animation-delay:320ms]" />
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="mini-stat">
                <p>5+</p>
                <span>Years</span>
              </div>
              <div className="mini-stat">
                <p>Web</p>
                <span>Systems</span>
              </div>
              <div className="mini-stat">
                <p>Mobile</p>
                <span>Shipped</span>
              </div>
            </div>
          </div>

          <div className="animate-float absolute -bottom-6 left-6 right-6 rounded-2xl border border-zinc-200 bg-white/95 p-5 shadow-xl shadow-zinc-200/70 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Currently
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-700">{profile.availability}</p>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {proofPoints.map((point, index) => (
          <Reveal key={point.value} delay={index * 90}>
            <div className="metric-card">
              <p className="text-2xl font-semibold text-zinc-950">{point.value}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{point.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
