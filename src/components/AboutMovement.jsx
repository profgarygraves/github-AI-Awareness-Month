import { Building2, GraduationCap, Landmark, Library, School, Store, UsersRound } from 'lucide-react';
import SectionTitle from './SectionTitle';

const communities = [
  ['Colleges', GraduationCap],
  ['K-12 schools', School],
  ['Chambers of commerce', Building2],
  ['Small businesses', Store],
  ['Cities and counties', Landmark],
  ['Libraries', Library],
  ['Nonprofits and public agencies', UsersRound],
];

export default function AboutMovement() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle eyebrow="About the Movement" title="The Future Should Be Shaped by People" align="left">
            AI Awareness Month began as a grassroots education and workforce initiative inspired
            by the California Community Colleges AI Fellows Program. The first imagined scale was
            California's 116 community colleges and beyond. The goal is to help every community
            move from curiosity to capability with AI while promoting responsible, ethical use.
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {communities.map(([label, Icon]) => (
              <article key={label} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-aurora/10 text-aurora">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-white">{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
