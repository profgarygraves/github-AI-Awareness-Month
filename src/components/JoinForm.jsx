import { Download, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import SectionTitle from './SectionTitle';
import { formEndpoint, formStorageKey } from '../data/form';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    city: '',
    state: '',
    organizationType: organizationTypes[0],
    interests: [],
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [submissions, setSubmissions] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(formStorageKey)) || [];
    } catch {
      return [];
    }
  });

  const canSubmit = useMemo(
    () => formData.name.trim() && formData.email.trim() && formData.organization.trim(),
    [formData.email, formData.name, formData.organization],
  );

  function updateField(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function updateInterest(event) {
    const { checked, value } = event.target;
    setFormData((current) => ({
      ...current,
      interests: checked
        ? [...current.interests, value]
        : current.interests.filter((interest) => interest !== value),
    }));
  }

  function persistSubmission(submission) {
    const nextSubmissions = [submission, ...submissions];
    setSubmissions(nextSubmissions);
    window.localStorage.setItem(formStorageKey, JSON.stringify(nextSubmissions));
  }

  function resetForm() {
    setFormData({
      name: '',
      email: '',
      organization: '',
      role: '',
      city: '',
      state: '',
      organizationType: organizationTypes[0],
      interests: [],
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: 'idle', message: '' });

    if (!canSubmit) {
      setStatus({
        type: 'error',
        message: 'Please add your name, email, and organization before submitting.',
      });
      return;
    }

    const submission = {
      ...formData,
      submittedAt: new Date().toISOString(),
      source: 'AI Awareness Month website',
    };

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submission),
        });

        if (!response.ok) {
          throw new Error('Form endpoint rejected the submission.');
        }

        setStatus({
          type: 'success',
          message: 'Thank you. Your interest has been submitted.',
        });
        resetForm();
        return;
      } catch {
        persistSubmission(submission);
        setStatus({
          type: 'warning',
          message:
            'The online form service did not respond, so this response was saved in this browser for JSON export.',
        });
        resetForm();
        return;
      }
    }

    persistSubmission(submission);
    setStatus({
      type: 'success',
      message:
        'Saved in this browser. Use Export JSON to download the collected responses from this device.',
    });
    resetForm();
  }

  function exportJson() {
    const file = new Blob([JSON.stringify(submissions, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ai-awareness-month-interest-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section id="join" className="section-pad border-y border-white/10 bg-white/[0.035]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionTitle eyebrow="Join the Movement" title="Help Light the AI Awareness Flame" align="left">
          Share your interest in hosting events, receiving proclamation materials, getting toolkit
          updates, or becoming a founding partner.
        </SectionTitle>
        <form
          className="rounded-[2rem] border border-white/10 bg-night/80 p-6 shadow-violet sm:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Name
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-aurora focus:ring-2 focus:ring-aurora/40"
                type="text"
                name="name"
                value={formData.name}
                onChange={updateField}
                autoComplete="name"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Email
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-aurora focus:ring-2 focus:ring-aurora/40"
                type="email"
                name="email"
                value={formData.email}
                onChange={updateField}
                autoComplete="email"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Organization
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-aurora focus:ring-2 focus:ring-aurora/40"
                type="text"
                name="organization"
                value={formData.organization}
                onChange={updateField}
                autoComplete="organization"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Role
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-aurora focus:ring-2 focus:ring-aurora/40"
                type="text"
                name="role"
                value={formData.role}
                onChange={updateField}
                autoComplete="organization-title"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              City
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-aurora focus:ring-2 focus:ring-aurora/40"
                type="text"
                name="city"
                value={formData.city}
                onChange={updateField}
                autoComplete="address-level2"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              State
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-aurora focus:ring-2 focus:ring-aurora/40"
                type="text"
                name="state"
                value={formData.state}
                onChange={updateField}
                autoComplete="address-level1"
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-200">
            Organization Type
            <select
              className="rounded-2xl border border-white/10 bg-night px-4 py-3 text-white outline-none transition focus:border-aurora focus:ring-2 focus:ring-aurora/40"
              name="organizationType"
              value={formData.organizationType}
              onChange={updateField}
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
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-night accent-aurora"
                    value={option}
                    checked={formData.interests.includes(option)}
                    onChange={updateInterest}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>
          {status.message && (
            <p
              className={`mt-5 rounded-2xl border px-4 py-3 text-sm leading-6 ${
                status.type === 'error'
                  ? 'border-red-300/40 bg-red-500/10 text-red-100'
                  : status.type === 'warning'
                    ? 'border-ember/40 bg-ember/10 text-ember'
                    : 'border-aurora/40 bg-aurora/10 text-slate-100'
              }`}
              role="status"
            >
              {status.message}
            </p>
          )}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-aurora px-5 py-3 text-sm font-bold text-night shadow-glow transition hover:bg-white disabled:opacity-50"
              disabled={!canSubmit}
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Submit Interest
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-ember/50 hover:bg-white/[0.08] disabled:opacity-50"
              onClick={exportJson}
              disabled={submissions.length === 0}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Export JSON
            </button>
            <span className="text-sm text-slate-400">{submissions.length} saved locally</span>
          </div>
        </form>
      </div>
    </section>
  );
}
