import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import logo from "@/assets/soubus-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-14 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="SouBus" className="h-10 w-auto mb-4" />
          <p className="text-sm text-muted-foreground max-w-xs">
            Repensando a mobilidade urbana de Belo Horizonte com dados, pesquisa e tecnologia.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Equipe</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Rafael Campello Soares</li>
            <li>Arthur Rafael Silva Teixeira</li>
            <li className="text-xs pt-2 opacity-70">Universidade Federal de Minas Gerais</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Conecte-se</div>
          <div className="flex gap-3">
            {[Mail, Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-xl glass grid place-items-center text-muted-foreground hover:text-secondary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} SouBus · Mobilidade inteligente para Belo Horizonte</div>
        <div>Projeto acadêmico · UFMG</div>
      </div>
    </footer>
  );
}