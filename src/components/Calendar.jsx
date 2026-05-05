import { motion } from 'framer-motion';
import { calendarDays } from '../data/calendar';
import SectionTitle from './SectionTitle';

export default function Calendar() {
  return (
    <section id="calendar" className="section-pad border-y border-white/10 bg-white/[0.035]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="November Campaign" title="30 Days of AI Awareness">
          A sample calendar communities can adapt for workshops, classroom prompts, social posts,
          library programs, workplace learning, and civic conversations.
        </SectionTitle>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {calendarDays.map((topic, index) => (
            <motion.article
              key={topic}
              className="rounded-2xl border border-white/10 bg-night/70 p-4 transition hover:border-aurora/50 hover:bg-aurora/10"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (index % 5) * 0.03 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-aurora">
                Day {index + 1}
              </p>
              <h3 className="mt-2 text-sm font-semibold leading-6 text-white">{topic}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
