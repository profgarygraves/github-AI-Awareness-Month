import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Download, FileText, Handshake } from 'lucide-react';

const actions = [
  { label: 'Join the Movement', href: '#join', icon: Handshake, primary: true },
  { label: 'Host an Event', href: '#events', icon: CalendarDays },
  { label: 'Download Toolkit', href: '#toolkit', icon: Download },
  { label: 'Request a Proclamation', href: '#proclamation', icon: FileText },
];

const tags = [
  'AI is here. Awareness is the first step.',
  'Learn it. Question it. Use it. Shape it.',
  'Human-centered AI starts with awareness.',
  'A month to prepare every community for an AI-shaped future.',
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-radial-grid bg-[length:100%_100%,100%_100%,54px_54px,54px_54px]" />
      <div className="absolute left-1/2 top-20 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-2 text-sm font-semibold text-ember">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            November is AI Awareness Month
          </div>
          <h1 className="max-w-5xl font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Claiming November as AI Awareness Month
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            A national movement to help students, educators, workers, entrepreneurs, civic
            leaders, and communities understand artificial intelligence and shape its future
            responsibly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map(({ label, href, icon: Icon, primary }) => (
              <a
                key={label}
                href={href}
                className={
                  primary
                    ? 'inline-flex items-center gap-2 rounded-full bg-aurora px-5 py-3 text-sm font-bold text-night shadow-glow transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white'
                    : 'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-aurora/50 hover:bg-white/[0.14] focus:outline-none focus:ring-2 focus:ring-aurora'
                }
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {tags.map((tag) => (
              <p key={tag} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-200">
                {tag}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto h-[31rem] w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          aria-label="Animated digital flame representing public AI awareness"
        >
          <div className="absolute inset-0 rounded-full bg-aurora/10 blur-3xl" />
          <div className="digital-orb absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-aurora/40 bg-[radial-gradient(circle_at_45%_35%,rgba(255,255,255,.92),rgba(35,211,255,.56)_18%,rgba(139,92,246,.32)_44%,rgba(5,8,22,.06)_68%)] shadow-glow sm:h-96 sm:w-96" />
          <div className="flame absolute left-1/2 top-1/2 h-64 w-36 -translate-x-1/2 -translate-y-[46%] rounded-[52%_48%_45%_55%/64%_58%_42%_36%] bg-[linear-gradient(160deg,rgba(255,255,255,.9),rgba(35,211,255,.8)_32%,rgba(139,92,246,.74)_66%,rgba(247,200,115,.72))] opacity-90 blur-[1px]" />
          <div className="absolute inset-x-8 top-12 h-px bg-gradient-to-r from-transparent via-aurora to-transparent" />
          <div className="absolute inset-x-16 bottom-14 h-px bg-gradient-to-r from-transparent via-ember to-transparent" />
          <div className="absolute left-8 top-20 h-3 w-3 rounded-full bg-aurora shadow-glow" />
          <div className="absolute right-10 top-32 h-2 w-2 rounded-full bg-ember shadow-[0_0_22px_rgba(247,200,115,.8)]" />
          <div className="absolute bottom-24 left-16 h-2 w-2 rounded-full bg-violet shadow-violet" />
          <div className="absolute bottom-12 right-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-night/70 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
            Nov 30
            <ArrowRight className="h-4 w-4 text-ember" aria-hidden="true" />
            AI Awareness Day
          </div>
        </motion.div>
      </div>
    </section>
  );
}
