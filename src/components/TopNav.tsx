import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const contactTo = { pathname: '/', hash: 'contact' as const }

const linkBase =
  'font-mono text-[10px] uppercase tracking-[0.28em] transition-colors'

function navLinkClass(active: boolean) {
  return [
    linkBase,
    'cursor-target',
    active
      ? 'border-b border-primary pb-1 text-primary'
      : 'text-on-surface-variant hover:text-on-surface',
  ].join(' ')
}

export function TopNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-outline-variant bg-background/85 px-6 py-4 backdrop-blur-sm md:px-[48px]">
      <Link
        to="/"
        className="font-display cursor-target text-2xl font-black tracking-tight text-on-surface"
        onClick={() => setOpen(false)}
      >
        VIBE_PM_SYSTEMS
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        <NavLink to="/" end className={({ isActive }) => navLinkClass(isActive)}>
          Home
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => navLinkClass(isActive)}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/writing"
          className={({ isActive }) => navLinkClass(isActive)}
        >
          Writing
        </NavLink>
        <Link
          to={contactTo}
          className={`${linkBase} cursor-target text-on-surface-variant hover:text-on-surface`}
        >
          Contact
        </Link>
        <Link
          to={contactTo}
          className="ml-2 scale-95 cursor-target bg-primary-container px-6 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-on-primary-container transition-transform duration-150 ease-out hover:scale-100"
        >
          HIRE(0)
        </Link>
      </nav>

      <button
        type="button"
        className="flex cursor-target items-center md:hidden"
        aria-expanded={open}
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="material-symbols-outlined text-on-surface">menu</span>
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-full border-b border-outline-variant bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) => navLinkClass(isActive)}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => navLinkClass(isActive)}
              onClick={() => setOpen(false)}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/writing"
              className={({ isActive }) => navLinkClass(isActive)}
              onClick={() => setOpen(false)}
            >
              Writing
            </NavLink>
            <Link
              className={`${linkBase} cursor-target text-on-surface-variant`}
              to={contactTo}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
