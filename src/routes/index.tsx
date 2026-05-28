import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/soubus/Navbar";
import { Hero } from "@/components/soubus/Hero";
import { About } from "@/components/soubus/About";
import { Problem } from "@/components/soubus/Problem";
import { Solution } from "@/components/soubus/Solution";
import { Team } from "@/components/soubus/Team";
import { Survey } from "@/components/soubus/Survey";
import { Footer } from "@/components/soubus/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SouBus · Otimização inteligente do transporte público urbano" },
      { name: "description", content: "O SouBus repensa a distribuição dos pontos de ônibus em Belo Horizonte com dados, modelagem computacional e foco em acessibilidade urbana." },
      { property: "og:title", content: "SouBus · Mobilidade urbana inteligente em BH" },
      { property: "og:description", content: "Pesquisa acadêmica aplicada à otimização do transporte público de Belo Horizonte." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Problem />
      <Solution />
      <Team />
      <Survey />
      <Footer />
    </main>
  );
}
