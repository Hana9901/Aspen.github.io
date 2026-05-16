import { useEffect, useState } from 'react'

const durationMs = 1600

export function CrtLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(false), durationMs)
    return () => window.clearTimeout(id)
  }, [])

  if (!visible) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-black text-on-surface"
      style={{ animation: 'crt-flicker 0.08s steps(2) infinite' }}
      role="presentation"
    >
      <div className="crt-scanlines absolute inset-0 opacity-70" />
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
