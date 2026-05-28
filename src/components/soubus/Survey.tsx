import { ExternalLink, ClipboardList } from "lucide-react";
import { Reveal } from "./Section";

// <!-- SUBSTITUIR O LINK DO GOOGLE FORMS AQUI -->
const GOOGLE_FORMS_URL = "https://forms.gle/SEU-LINK-AQUI";

export function Survey() {
  return (
    <section id="pesquisa" className="relative py-28">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] gradient-primary p-10 sm:p-16 text-center shadow-glow">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 backdrop-blur px-4 py-2 text-xs font-semibold text-secondary mb-6">
                <ClipboardList className="h-4 w-4" />
                Pesquisa aberta
              </div>
              <h2
                className="text-4xl sm:text-6xl font-bold text-primary-foreground tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Participe da pesquisa
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-lg text-primary-foreground/85">
                Sua participação ajuda a construir soluções melhores para a mobilidade
                urbana de Belo Horizonte. Leva poucos minutos.
              </p>

              <a
                href={GOOGLE_FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-secondary px-9 py-4 text-lg font-bold text-secondary-foreground hover:scale-105 transition-transform shadow-card"
              >
                Abrir formulário
                <ExternalLink className="h-5 w-5" />
              </a>

              <p className="mt-6 text-xs text-primary-foreground/60">
                O formulário abrirá em uma nova aba.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}