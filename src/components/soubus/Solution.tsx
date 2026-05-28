import { Database, Network, MapPin, Gauge, Sparkles } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const steps = [
  { icon: Database, title: "Coleta de dados", text: "Mapeamento de pontos, rotas e densidade populacional da cidade." },
  { icon: Network, title: "Modelagem computacional", text: "Algoritmos de otimização aplicados à rede de transporte público." },
  { icon: MapPin, title: "Redistribuição inteligente", text: "Proposta de novos pontos minimizando a caminhada média." },
  { icon: Gauge, title: "Validação & impacto", text: "Avaliação da acessibilidade ganha em cada região da cidade." },
];

export function Solution() {
  return (
    <section id="solucao" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="container relative mx-auto px-6">
        <SectionHeader
          eyebrow="Nossa solução"
          title="Uma rede pensada por dados, projetada para pessoas"
          description="O SouBus combina ciência de dados e modelagem computacional para repensar a malha de pontos de ônibus, com foco em acessibilidade e eficiência."
        />

        {/* timeline */}
        <div className="relative">
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className={`relative grid lg:grid-cols-2 gap-6 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`pl-16 lg:pl-0 ${i % 2 ? "lg:pr-16 lg:text-right" : "lg:pl-16"} [direction:ltr]`}>
                    <div className="rounded-2xl glass p-7 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
                      <div className="text-xs font-semibold text-secondary tracking-widest mb-2">ETAPA {String(i + 1).padStart(2, "0")}</div>
                      <h3 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h3>
                      <p className="text-muted-foreground mt-2">{s.text}</p>
                    </div>
                  </div>
                  {/* node */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-8">
                    <div className="h-12 w-12 rounded-2xl gradient-primary grid place-items-center shadow-glow ring-4 ring-white">
                      <s.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 rounded-3xl gradient-primary p-10 text-center shadow-glow">
            <Sparkles className="h-8 w-8 text-secondary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Acessibilidade como direito, não privilégio
            </h3>
            <p className="text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
              O resultado: menos tempo caminhando, mais tempo vivendo. Um sistema público mais eficiente e justo para todos.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}