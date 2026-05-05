import { Send } from 'lucide-react';
import SectionTitle from './SectionTitle';

const intentOptions = [
  'I want to host an event',
  'I want proclamation materials',
  'I want toolkit updates',
  'I want to become a founding partner',
];

const organizationTypes = [
  'College',
  'K-12 School',
  'Chamber of Commerce',
  'Small Business',
  'City or County',
  'Library',
  'Nonprofit',
  'Workforce Board',
  'Government Agency',
  'Other',
];

export default function JoinForm() {
  return (
    <section id="join" className="section-pad border-y border-white/10 bg-white/[0.035]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionTitle eyebrow="Join the Movement" title="Help Light the AI Awareness Flame" align="left">
          This static form is ready to connect to Tally, Google Forms, Formspree, or another
          service when the movement starts collecting signups.
        </SectionTitle>
        <form className="rounded-[2rem] border border-white/10 bg-night/80 p-6 shadow-violet sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {['Name', 'Email', 'Organization', 'Role', 'City', 'State'].map((field) => (
              <label key={field} className="grid gap-2 text-sm font-semibold text-slate-200">
                {field}
                <input
                  className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-aurora focus:ring-2 focus:ring-aurora/40"
                  type={field === 'Email' ? 'email' : 'text'}
                  name={field.toLowerCase().replaceAll(' ', '-')}
                  placeholder={field}
                />
              </label>
            ))}
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-200">
            Organization Type
            <select
              className="rounded-2xl border border-white/10 bg-night px-4 py-3 text-white outline-none transition focus:border-aurora focus:ring-2 focus:ring-aurora/40"
              name="organization-type"
            >
              {organizationTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-slate-200">I am interested in</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {intentOptions.map((option) => (
                <label key={option} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm text-slate-200">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/20 bg-night accent-aurora" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <button
            type="button"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-aurora px-5 py-3 text-sm font-bold text-night shadow-glow"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Placeholder Form
          </button>
        </form>
      </div>
    </section>
  );
}
