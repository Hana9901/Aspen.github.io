import { Link } from 'react-router-dom'

const contactTo = { pathname: '/', hash: 'contact' as const }

export function PortfolioPage() {
  return (
    <div>
      <section className="flex flex-col overflow-hidden border-b border-outline-variant md:flex-row">
        <div className="flex min-h-[calc(100dvh-5rem)] w-full flex-col justify-between border-r border-outline-variant p-12 md:sticky md:top-20 md:w-1/2 md:self-start">
          <div>
            <span className="mb-8 inline-block rounded-full bg-primary-container px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-on-primary-container">
              ( 01 )
            </span>
            <h1 className="font-display text-[64px] font-black uppercase leading-none tracking-[-0.04em] md:text-[120px] md:leading-[100px]">
              VIBE
              <br />
              LOGIC
            </h1>
          </div>
          <div className="relative">
            <p className="relative z-10 mb-12 max-w-sm text-base leading-6 text-on-surface-variant">
              Product systems for the next era of computational agency—rigid structures
              for fluid creativity.
            </p>
            <div className="pointer-events-none absolute -bottom-20 -left-10 select-none font-display text-[240px] leading-none text-on-surface/5">
              V01
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <ProjectSection
            title="AI COLLABORATOR"
            index="02_PROJECTS"
            visual="rings"
            meta={[
              { k: 'Stack_01', v: 'NEURAL_NET_V4' },
              { k: 'Stack_02', v: 'VECTOR_DB_CORE' },
              { k: 'Role', v: 'LEAD_STRATEGY' },
              { k: 'Year', v: '2024.08' },
            ]}
            body="A tight interface between creative intent and model execution—fewer handoffs, clearer outcomes."
          />

          <ProjectSection
            title="AUTONOMOUS AGENT HUB"
            index="03_PROJECTS"
            visual="gridblock"
            meta={[
              { k: 'Framework', v: 'AUTO_GPT_SYNC' },
              { k: 'Architecture', v: 'DISTRIBUTED_EDGE' },
              { k: 'Impact', v: 'HIGH_DENSITY_OPS' },
              { k: 'Status', v: 'DEPLOYED_LIVE' },
            ]}
            body="Command surface for fleet-wide agents—bottlenecks surfaced early across async queues."
          />

          <div className="bg-surface-container-lowest">
            <div className="grid grid-cols-2 border-b border-outline-variant">
              <div className="border-r border-outline-variant p-12">
                <div className="font-display text-[64px] font-black text-primary">98%</div>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  System Reliability
                </div>
              </div>
              <div className="p-12">
                <div className="font-display text-[64px] font-black text-on-surface">12K</div>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  Hours Operational
                </div>
              </div>
              <div className="border-r border-t border-outline-variant p-12">
                <div className="font-display text-[64px] font-black text-on-surface">0.4s</div>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  Average Latency
                </div>
              </div>
              <div className="border-t border-outline-variant p-12">
                <div className="font-display text-[64px] font-black text-primary">M01</div>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  Model Version
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-outline-variant bg-primary-container py-12">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-display mx-8 text-[48px] font-black uppercase leading-[52px] text-on-primary-container md:text-[64px]"
            >
              STRUCTURE IS FREEDOM •
            </span>
          ))}
        </div>
      </section>

      <section className="p-12 text-center">
        <div className="mx-auto max-w-2xl py-24">
          <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            SYSTEM_STATUS: OPEN_FOR_INQUIRY
          </span>
          <h3 className="mb-12 font-display text-[48px] font-extrabold leading-[52px]">
            READY TO DEPLOY NEW STRUCTURES?
          </h3>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <Link
              to={contactTo}
              className="cursor-target bg-primary-container px-12 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-on-primary-container transition-colors hover:bg-on-primary-container hover:text-primary-container"
            >
              START_PROTOCOL
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="cursor-target border border-on-surface px-12 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface transition-colors hover:bg-on-surface hover:text-background"
            >
              VIEW_REPOSITORY
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectSection({
  title,
  index,
  meta,
  body,
  visual,
}: {
  title: string
  index: string
  meta: { k: string; v: string }[]
  body: string
  visual: 'rings' | 'gridblock'
}) {
  return (
    <div className="border-b border-outline-variant">
      <div className="p-12">
        <div className="mb-12 flex items-start justify-between">
          <h2 className="font-display text-[48px] font-extrabold uppercase leading-[52px] tracking-[-0.02em]">
            {title}
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">
            {index}
          </span>
        </div>

        <div className="group relative mb-12 aspect-video w-full overflow-hidden border border-outline-variant bg-surface-container-low">
          {visual === 'rings' ? (
            <>
              <div className="diagonal-cross-hatch absolute inset-0 opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full bg-primary-container transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute h-64 w-64 rounded-full border border-primary-container opacity-50" />
              </div>
            </>
          ) : (
            <>
              <div className="grid-lines absolute inset-0 opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-64 bg-primary-container transition-transform duration-700 group-hover:rotate-45" />
                <div className="absolute h-80 w-40 border border-on-surface opacity-30" />
              </div>
            </>
          )}
        </div>

        <div className="mb-12 grid grid-cols-2 border border-outline-variant">
          {meta.map((cell, i) => (
            <div
              key={cell.k}
              className={[
                'p-6',
                i % 2 === 0 ? 'border-r border-outline-variant' : '',
                i < 2 ? 'border-b border-outline-variant' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.08em] text-primary">
                {cell.k}
              </span>
              <p className="font-mono text-[10px] text-on-surface">{cell.v}</p>
            </div>
          ))}
        </div>

        <p className="mb-8 text-base leading-6 text-on-surface">{body}</p>

        <button
          type="button"
          className="w-full cursor-target border border-on-surface py-4 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-on-surface hover:text-background"
        >
          VIEW SCHEMATICS [ + ]
        </button>
      </div>
    </div>
  )
}
