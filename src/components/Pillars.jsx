import { motion } from 'framer-motion';
import { pillars } from '../data/pillars';
import SectionTitle from './SectionTitle';

export default function Pillars() {
  return (
    <section id="pillars" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Five Pillars" title="Five Pillars of AI Awareness">
          AI Awareness Month gives communities a practical way to move beyond hype and fear
          toward shared literacy, agency, and responsible use.
        </SectionTitle>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {pillars.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-ember/45"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/12 text-ember">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
