import { profile } from "@/data/userData";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-zinc-600 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        <div className="flex flex-wrap gap-4">
          {profile.socials.map((social) => (
            <a key={social.label} className="footer-link" href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
          <a className="footer-link" href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
