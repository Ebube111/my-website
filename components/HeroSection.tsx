import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { profile, proofPoints } from "@/data/userData";
import Reveal from "./Reveal";

const terminalLines = [
  {
    command: "profile --role",
    output: "Software Engineer | Frontend, mobile, APIs",
  },
  {
    command: "stack --focus",
    output: "React, React Native, TypeScript, Web3, Backend",
  },
  {
    command: "ship --scope",
    output: "Web apps, mobile releases, admin tools, product systems",
  },
  {
    command: "quality --check",
    output: "Performance, accessibility, error states, release readiness",
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

          <div className="terminal-window">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  ebube@portfolio
                </p>
                <p className="mt-1 font-mono text-xs text-zinc-500">~/engineering-profile</p>
              </div>
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
            </div>

            <div className="space-y-5 p-5 font-mono text-sm sm:p-6">
              <div className="terminal-line animate-rise [animation-delay:280ms]">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">init engineer-profile --production</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                {terminalLines.map((line, index) => (
                  <div
                    key={line.command}
                    className="terminal-block animate-rise"
                    style={{ animationDelay: `${380 + index * 120}ms` }}
                  >
                    <div className="terminal-line">
                      <span className="terminal-prompt">$</span>
                      <span className="terminal-command">{line.command}</span>
                    </div>
                    <p className="terminal-output">{line.output}</p>
                  </div>
                ))}
              </div>

              <div className="terminal-status animate-rise [animation-delay:900ms]">
                <span className="terminal-cursor" />
                <span>available_for = &quot;software engineering roles&quot;</span>
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
