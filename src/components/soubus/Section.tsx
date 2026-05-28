import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <Reveal>
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-secondary mb-4">
          {eyebrow}
        </div>
        <h2
          className="text-4xl sm:text-5xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h2>
        {description && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>}
      </div>
    </Reveal>
  );
}