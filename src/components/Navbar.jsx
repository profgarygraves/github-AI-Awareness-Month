import { Menu, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  ['Why November', '#why-november'],
  ['Principles', '#humans'],
  ['Pillars', '#pillars'],
  ['Calendar', '#calendar'],
  ['Toolkit', '#toolkit'],
  ['Join', '#join'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    'rounded-full px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-aurora';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/72 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-aurora">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-aurora/40 bg-aurora/10 shadow-glow">
            <Sparkles className="h-5 w-5 text-aurora" aria-hidden="true" />
          </span>
          <span className="font-display text-base font-semibold text-white sm:text-lg">
            AI Awareness Month
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className={linkClass}>
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-night/95 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-100 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
