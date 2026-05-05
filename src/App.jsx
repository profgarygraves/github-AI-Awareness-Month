import { motion } from 'framer-motion';
import AboutMovement from './components/AboutMovement';
import Calendar from './components/Calendar';
import EventIdeas from './components/EventIdeas';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HumansPrinciples from './components/HumansPrinciples';
import JoinForm from './components/JoinForm';
import Navbar from './components/Navbar';
import Pillars from './components/Pillars';
import Proclamation from './components/Proclamation';
import SectionTitle from './components/SectionTitle';
import Toolkit from './components/Toolkit';

const partnerGroups = [
  'Founding Colleges',
  'AI Fellows',
  'Chambers of Commerce',
  'Civic Partners',
  'Small Business Partners',
  'Education Partners',
];

function WhyNovember() {
  return (
    <section id="why-november" className="section-pad border-y border-white/10 bg-white/[0.035]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <SectionTitle eyebrow="Why November?" title="A Turning Point in Public AI Awareness" align="left">
          November is a powerful symbolic month because ChatGPT launched publicly on November 30,
          2022, helping bring generative AI into public awareness.
        </SectionTitle>
        <motion.div
          className="rounded-[2rem] border border-aurora/20 bg-ink/85 p-6 shadow-glow sm:p-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-lg leading-8 text-slate-200">
            November 30 marks a turning point in public awareness of generative AI. AI Awareness
            Month uses that moment as an invitation to broaden the conversation beyond any single
            tool or company and toward public literacy, workforce readiness, education, ethics,
            creativity, and civic life.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            The movement asks communities to learn it, question it, use it, and shape it with
            human-centered values.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Partners" title="Founding Supporters Coming Into View">
          Space is reserved for future logos and partner recognitions as colleges, chambers, civic
          groups, businesses, schools, and agencies join the movement.
        </SectionTitle>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerGroups.map((group) => (
            <div key={group} className="flex min-h-32 items-center justify-center rounded-3xl border border-dashed border-white/20 bg-white/[0.04] p-6 text-center font-display text-lg font-semibold text-slate-200">
              {group}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-40 -translate-y-1/2 bg-gradient-to-r from-transparent via-aurora/20 to-transparent blur-3xl" />
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-aurora/25 bg-gradient-to-br from-aurora/14 via-violet/12 to-ember/12 p-8 text-center shadow-glow sm:p-12">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">
          Help light the AI Awareness flame.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
          This November, host a workshop, start a conversation, issue a proclamation, teach one AI
          lesson, help one small business, or invite your community to explore what human-centered
          AI can make possible.
        </p>
        <a
          href="#join"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-night shadow-glow transition hover:-translate-y-0.5 hover:bg-aurora"
        >
          Join the Movement
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-night text-white">
      <Navbar />
      <main>
        <Hero />
        <WhyNovember />
        <AboutMovement />
        <HumansPrinciples />
        <Pillars />
        <Calendar />
        <EventIdeas />
        <Toolkit />
        <Proclamation />
        <JoinForm />
        <Partners />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
