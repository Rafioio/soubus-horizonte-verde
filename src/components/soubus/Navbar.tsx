import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/soubus-logo.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#problema", label: "Problema" },
  { href: "#solucao", label: "Solução" },
  { href: "#equipe", label: "Equipe" },
  { href: "#pesquisa", label: "Pesquisa" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-card py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="SouBus" className="h-9 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#pesquisa"
          className="hidden md:inline-flex items-center rounded-full gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
        >
          Participar
        </a>
      </div>
    </motion.header>
  );
}