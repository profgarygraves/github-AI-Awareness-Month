import { FileText } from 'lucide-react';
import SectionTitle from './SectionTitle';

const paragraphs = [
  'Whereas artificial intelligence is rapidly transforming education, work, entrepreneurship, government, creativity, and civic life; and',
  'Whereas communities benefit when students, workers, educators, businesses, and residents understand how to use AI responsibly, ethically, and effectively; and',
  'Whereas human-centered AI should advance equity, transparency, privacy, accountability, access, and public good; and',
  'Whereas November 30 marks a significant moment in public awareness of generative AI;',
  'Now, therefore, we proclaim November as AI Awareness Month and November 30 as AI Awareness Day.',
];

export default function Proclamation() {
  return (
    <section id="proclamation" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <SectionTitle eyebrow="Proclamation Center" title="Sample Proclamation: AI Awareness Month" align="left">
          Cities, counties, school boards, college districts, and civic groups can use a
          proclamation to invite residents into practical, human-centered AI learning.
        </SectionTitle>
        <article className="rounded-[2rem] border border-ember/25 bg-gradient-to-br from-ember/12 via-white/[0.055] to-aurora/10 p-6 shadow-glow sm:p-8">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/15 text-ember">
            <FileText className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-100">
            {paragraphs.map((copy) => (
              <p key={copy}>{copy}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
