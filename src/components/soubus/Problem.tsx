import { AlertTriangle, Footprints, TrendingDown, Scale } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const issues = [
  { icon: AlertTriangle, title: "Má distribuição dos pontos", text: "Concentração nos centros e escassez nas periferias." },
  { icon: Footprints, title: "Caminhadas exaustivas", text: "Distâncias muito acima dos 400–500 m recomendados." },
  { icon: TrendingDown, title: "Impacto na periferia", text: "Barreiras de acesso a empregos, saúde e educação." },
  { icon: Scale, title: "Desigualdade urbana", text: "Mobilidade desigual reforça vulnerabilidades sociais." },
];

// Mock bar chart data — distance to bus stop by district
const bars = [
  { name: "Centro", v: 180, label: "180 m" },
  { name: "Savassi", v: 220, label: "220 m" },
  { name: "Pampulha", v: 540, label: "540 m" },
  { name: "Venda Nova", v: 820, label: "820 m" },
  { name: "Barreiro", v: 1100, label: "1.1 km" },
  { name: "Norte", v: 1450, label: "1.4 km" },
];
const max = 1600;

export function Problem() {
  return (
    <section id="problema" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container relative mx-auto px-6">
        <SectionHeader
          eyebrow="Problema"
          title="A desigualdade está no mapa"
          description="A distância média até um ponto de ônibus varia drasticamente entre regiões da cidade. Onde mora mais gente vulnerável, é onde se caminha mais."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {issues.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-2xl glass p-5 hover:border-secondary/40 transition-colors">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-secondary/15 grid place-items-center">
                    <it.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">{it.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{it.text}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="lg:col-span-3 rounded-3xl glass p-8 shadow-card h-full">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Distância média ao ponto mais próximo</div>
                  <div className="font-semibold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Por região de Belo Horizonte</div>
                </div>
                <div className="text-xs text-muted-foreground">dados ilustrativos</div>
              </div>
              <div className="mt-8 space-y-4">
                {bars.map((b, i) => (
                  <div key={b.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{b.name}</span>
                      <span className={b.v > 500 ? "text-destructive font-semibold" : "text-secondary font-semibold"}>{b.label}</span>
                    </div>
                    <div className="h-3 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full gradient-accent transition-all"
                        style={{
                          width: `${(b.v / max) * 100}%`,
                          animation: `slideIn 1.2s ${i * 0.1}s ease-out both`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                Limite aceitável: <strong className="text-foreground">400–500 m</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@keyframes slideIn { from { width: 0; } }`}</style>
    </section>
  );
}