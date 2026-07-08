import { ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const googleFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfpKwhMI6u3nRsbr8L3U-5QrjHKAQk-JLC5oy_WRKfNbv-j2g/viewform';

const googleFormEmbedUrl = `${googleFormUrl}?embedded=true`;

export default function JoinForm() {
  return (
    <section id="join" className="section-pad border-y border-white/10 bg-white/[0.035]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <SectionTitle eyebrow="Join the Movement" title="Help Light the AI Literacy Flame" align="left">
          Share your interest in hosting events, receiving proclamation materials, getting toolkit
          updates, offering feedback, or becoming a founding partner.
        </SectionTitle>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-night/80 shadow-violet">
          <div className="flex flex-col gap-4 border-b border-white/10 bg-white/[0.045] p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-300">
              Responses are collected through Google Forms so the movement can follow up with
              updates, materials, and partnership opportunities.
            </p>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-none items-center justify-center gap-2 rounded-full border border-aurora/40 px-4 py-2 text-sm font-semibold text-aurora transition hover:bg-aurora hover:text-night"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Open Form
            </a>
          </div>
          <iframe
            src={googleFormEmbedUrl}
            title="AI Literacy Month Interest Form"
            className="h-[82rem] w-full bg-white"
            loading="lazy"
          >
            Loading...
          </iframe>
        </div>
      </div>
    </section>
  );
}
