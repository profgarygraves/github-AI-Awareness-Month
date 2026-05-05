import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-aurora/40 bg-aurora/10">
            <Sparkles className="h-4 w-4 text-aurora" aria-hidden="true" />
          </span>
          <span className="font-display font-semibold">AI Awareness Month</span>
        </div>
        <p className="max-w-3xl leading-7">
          AI Awareness Month is an independent grassroots awareness initiative inspired by public
          education, workforce readiness, and human-centered AI principles.
        </p>
      </div>
    </footer>
  );
}
