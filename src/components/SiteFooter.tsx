import { Link } from 'react-router-dom'

const social = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Read.cv', href: 'https://read.cv' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-8 border-t border-outline-variant bg-surface-container-lowest px-6 py-12 md:flex-row md:px-[48px]">
      <div className="flex flex-col items-center gap-2 md:items-start">
        <div className="font-display text-2xl font-bold uppercase text-on-surface">
          VIBE_CODING
        </div>
        <p className="font-mono text-[10px] tracking-tight opacity-60">
          © 2026 VIBE_CODING_STRUCTURE. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {social.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="cursor-target font-mono text-[10px] tracking-tighter text-on-surface-variant underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {s.label.toUpperCase()}
          </a>
        ))}
        <Link
          to="/writing"
          className="cursor-target font-mono text-[10px] tracking-tighter text-on-surface-variant underline-offset-4 transition-colors hover:text-primary hover:underline"
        >
          WRITING
        </Link>
      </div>
    </footer>
  )
}
