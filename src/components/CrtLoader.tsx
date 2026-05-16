import { useEffect, useState } from 'react'

/** Visible overlay time before fade begins (ms) */
const holdMs = 1100
const fadeMs = 320

export function CrtLoader() {
  const [phase, setPhase] = useState<'hold' | 'fade' | 'done'>('hold')

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase('fade'), holdMs)
    const t2 = window.setTimeout(() => setPhase('done'), holdMs + fadeMs)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-on-surface ease-out transition-opacity"
      style={{
        opacity: phase === 'fade' ? 0 : 1,
        transitionDuration: `${fadeMs}ms`,
        pointerEvents: 'none',
      }}
      role="presentation"
    >
      <div
        className="crt-scanlines pointer-events-none absolute inset-0 opacity-70"
        style={{ animation: 'crt-flicker 0.08s steps(2) infinite' }}
      />
      <div className="relative flex h-[min(70vh,520px)] w-[min(92vw,720px)] flex-col border-2 border-primary-container bg-[#0a0a0a] px-8 py-10 shadow-[0_0_0_1px_rgba(0,0,0,0.6)]">
        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary">
          TUNER // VHF-UHF
        </div>
        <div className="mt-6 flex flex-1 flex-col justify-center gap-4">
          <div className="h-2 w-full bg-primary-container/30">
            <div
              className="h-full w-[45%] bg-primary-container"
              style={{ animation: 'crt-flicker 1.2s ease-in-out infinite' }}
            />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-on-surface-variant">
            Calibrating editorial grid… locking orange channel…
          </p>
          <div className="grid grid-cols-6 gap-1 opacity-60">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="h-1 bg-outline-variant"
                style={{ opacity: 0.15 + (i % 5) * 0.12 }}
              />
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-outline">
          <span>NO SIGNAL</span>
          <span>SYNCING…</span>
        </div>
      </div>
    </div>
  )
}
