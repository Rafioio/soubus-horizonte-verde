import { motion } from "framer-motion";
import { ArrowRight, MapPin, Bus, Route } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* Glow orbs */}
      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-3xl" />

      <div className="container relative mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-secondary mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Pesquisa acadêmica aplicada · UFMG
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Sou<span className="text-gradient">Bus</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-4">
              Otimização inteligente do transporte público urbano
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Repensando a distribuição dos pontos de ônibus em Belo Horizonte com
            dados, modelagem computacional e foco em acessibilidade urbana.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#pesquisa"
              className="group inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Responder formulário
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold text-foreground hover:border-secondary/40 transition-colors"
            >
              Conheça o projeto
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { v: "28 km", l: "única linha de metrô" },
              { v: "9.000+ km", l: "de malha viária" },
              { v: "+400 m", l: "caminhada média" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-secondary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual: stylized transit map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square rounded-3xl glass shadow-card p-8 overflow-hidden">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <linearGradient id="line1" x1="0" x2="1">
                  <stop offset="0" stopColor="oklch(0.58 0.2 300)" />
                  <stop offset="1" stopColor="oklch(0.78 0.2 130)" />
                </linearGradient>
              </defs>
              {/* routes */}
              <path d="M40 80 Q 200 60 360 140" stroke="url(#line1)" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M60 320 Q 180 220 380 280" stroke="oklch(0.78 0.2 130 / 70%)" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 8" />
              <path d="M100 40 L 140 380" stroke="oklch(0.58 0.2 300 / 60%)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M280 40 L 240 380" stroke="oklch(0.58 0.2 300 / 40%)" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* stops */}
              {[
                [100, 75], [200, 65], [300, 95], [360, 140],
                [140, 200], [240, 220], [60, 320], [380, 280], [220, 350],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="10" fill="oklch(0.78 0.2 130 / 20%)" />
                  <circle cx={x} cy={y} r="5" fill="oklch(0.78 0.2 130)" />
                </g>
              ))}
            </svg>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between glass rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl gradient-primary grid place-items-center">
                  <Bus className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Rede otimizada</div>
                  <div className="text-xs text-muted-foreground">Acessibilidade +37%</div>
                </div>
              </div>
              <Route className="h-5 w-5 text-secondary" />
            </div>
            <div className="absolute top-6 right-6 glass rounded-xl px-3 py-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span className="text-xs font-medium">Belo Horizonte</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}