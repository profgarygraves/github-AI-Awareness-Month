import { ExternalLink, UserRoundCheck } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Organizer() {
  return (
    <section id="organizer" className="section-pad border-y border-white/10 bg-white/[0.035]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <SectionTitle eyebrow="Organizer" title="Organized by Professor Gary Graves" align="left">
          AI Literacy Month is being organized by Professor Gary Graves, who is recruiting
          founding colleges, civic partners, educators, chambers, agencies, and community leaders
          to help shape the effort.
        </SectionTitle>
        <article className="rounded-[2rem] border border-aurora/20 bg-ink/85 p-6 shadow-glow sm:p-8">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora/10 text-aurora">
            <UserRoundCheck className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="text-lg leading-8 text-slate-200">
            Gary Graves is a tenured business and entrepreneurship professor at Fullerton College
            and a California Community Colleges Chancellor's Office AI Fellow. His work connects AI
            literacy, entrepreneurship, workforce development, creativity, and practical learning
            for students, educators, small businesses, and communities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://ggraves.faculty.fullcoll.edu/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-aurora/40 px-5 py-3 text-sm font-semibold text-aurora transition hover:bg-aurora hover:text-night"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Faculty Page
            </a>
            <a
              href="https://www.linkedin.com/in/garygraves"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ember/40 px-5 py-3 text-sm font-semibold text-ember transition hover:bg-ember hover:text-night"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
