import { CheckCircle2 } from 'lucide-react';
import { eventIdeas } from '../data/events';
import SectionTitle from './SectionTitle';

export default function EventIdeas() {
  return (
    <section id="events" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Host an Event" title="Event Ideas for Every Community">
          Colleges, chambers, schools, libraries, cities, counties, workforce boards, nonprofits,
          small businesses, and public agencies can all bring AI literacy to life.
        </SectionTitle>
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {eventIdeas.map((group) => (
            <article key={group.audience} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6">
              <h3 className="font-display text-xl font-semibold text-white">{group.audience}</h3>
              <ul className="mt-5 space-y-3">
                {group.ideas.map((idea) => (
                  <li key={idea} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-aurora" aria-hidden="true" />
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
