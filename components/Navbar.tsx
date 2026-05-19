import { FiMail } from "react-icons/fi";
import { profile } from "@/data/userData";
import ScrollProgress from "./ScrollProgress";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl">
      <ScrollProgress />
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="group">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-950">Ebube Agwaze</p>
          <p className="hidden text-xs text-zinc-500 sm:block">Lead Software Engineer</p>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-email" href={`mailto:${profile.email}`} aria-label="Email Ebube">
          <FiMail aria-hidden="true" />
          <span className="hidden sm:inline">Email</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
