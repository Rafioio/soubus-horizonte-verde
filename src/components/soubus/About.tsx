import { Bus, TrainFront, MapPinned, Users } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const cards = [
  { icon: Bus, title: "Dependência do ônibus", text: "Grande parte da população depende exclusivamente do sistema de ônibus para se locomover diariamente." },
  { icon: TrainFront, title: "Metrô insuficiente", text: "Apenas 28 km de uma única linha para cobrir os 331 km² da capital mineira." },
  { icon: MapPinned, title: "Desigualdade espacial", text: "Bairros centrais têm um ponto a cada 200 m. Periferias, apenas um a cada 2 km." },
  { icon: Users, title: "População impactada", text: "Moradores de áreas periféricas e de baixa renda são os mais penalizados pelo modelo atual." },
];

export function About() {
  return (
    <section id="sobre" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Contexto"
          title="Mobilidade urbana em Belo Horizonte"
          description="A capital mineira concentra desafios estruturais de transporte que afetam diretamente a vida de quem mais precisa do serviço público. O SouBus parte desse diagnóstico para propor caminhos."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl glass p-6 hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center mb-5 group-hover:shadow-glow transition-shadow">
                  <c.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { v: "331", u: "km²", l: "área total da cidade" },
            { v: "9.000+", u: "km", l: "de malha viária urbana" },
            { v: "1", u: "linha", l: "única de metrô em operação" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.1}>
              <div className="rounded-2xl p-8 gradient-primary shadow-glow">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.v}</span>
                  <span className="text-xl text-secondary font-semibold">{s.u}</span>
                </div>
                <div className="text-primary-foreground/80 mt-2">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}