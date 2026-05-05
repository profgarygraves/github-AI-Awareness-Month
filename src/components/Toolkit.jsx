import { FileDown } from 'lucide-react';
import { toolkitItems } from '../data/toolkit';
import SectionTitle from './SectionTitle';

export default function Toolkit() {
  return (
    <section id="toolkit" className="section-pad border-y border-white/10 bg-white/[0.035]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Toolkit" title="Ready-to-Adapt Movement Resources">
          These resources can become downloadable templates, slide decks, graphics, and guides as
          the movement grows.
        </SectionTitle>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {toolkitItems.map((item) => (
            <article key={item} className="rounded-3xl border border-white/10 bg-ink/80 p-5">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet/15 text-violet">
                <FileDown className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="min-h-12 font-display text-lg font-semibold text-white">{item}</h3>
              <button
                type="button"
                className="mt-5 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200"
                disabled
              >
                Coming Soon
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
