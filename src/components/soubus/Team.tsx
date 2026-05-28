import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const members = [
  {
    name: "Rafael Campello Soares",
    role: "Capitão · Pesquisa & Modelagem",
    initials: "RC",
    email: "rafaelcampell@ufmg.br",
  },
  {
    name: "Arthur Rafael Silva Teixeira",
    role: "Análise de Dados & Geoprocessamento",
    initials: "AR",
    email: "arthusilvateixeira@ufmg.br",
  },
];

export function Team() {
  return (
    <section id="equipe" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Equipe"
          title="Quem está por trás do SouBus"
          description="Estudantes da UFMG aplicando pesquisa acadêmica a um problema real da cidade."
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="group rounded-3xl glass p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 gradient-primary rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="relative h-20 w-20 rounded-full gradient-primary grid place-items-center text-2xl font-bold text-primary-foreground ring-4 ring-background"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {m.initials}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold leading-tight">{m.name}</h3>
                    <p className="text-sm text-secondary mt-1">{m.role}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  {[Mail, Linkedin, Github].map((Icon, idx) => (
                    <a
                      key={idx}
                      href={idx === 0 ? `mailto:${m.email}` : "#"}
                      className="h-10 w-10 rounded-xl glass grid place-items-center text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}