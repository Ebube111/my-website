import { FiArrowRight, FiMail } from "react-icons/fi";
import { profile } from "@/data/userData";
import Reveal from "./Reveal";

const ContactSection = () => {
  return (
    <section id="contact" className="section-shell pb-24">
      <Reveal>
        <div className="contact-panel">
          <p className="eyebrow text-emerald-300">Contact</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Need a lead engineer who can ship the interface and understand the system behind it?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                I am open to conversations around software engineering roles, frontend work, and
                product teams that need reliable delivery across web, mobile, and API-connected apps.
              </p>
            </div>

            <a className="button-inverted" href={`mailto:${profile.email}`}>
              <FiMail aria-hidden="true" />
              {profile.email}
              <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ContactSection;
