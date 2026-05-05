import { motion } from 'framer-motion';
import { humansPrinciples } from '../data/humans';
import SectionTitle from './SectionTitle';

export default function HumansPrinciples() {
  return (
    <section id="humans" className="section-pad border-y border-white/10 bg-white/[0.035]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Guiding Principles" title="Guided by H.U.M.A.N.S. Principles">
          Inspired by the California Community Colleges' commitment to human-centered AI,
          equity, accountability, transparency, privacy, and student success.
        </SectionTitle>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {humansPrinciples.map((principle, index) => (
            <motion.article
              key={principle.letter}
              className="group rounded-3xl border border-white/10 bg-ink/80 p-6 shadow-violet transition hover:-translate-y-1 hover:border-aurora/50"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-aurora/40 bg-aurora/10 font-display text-3xl font-bold text-aurora group-hover:bg-aurora group-hover:text-night">
                {principle.letter}
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{principle.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{principle.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
