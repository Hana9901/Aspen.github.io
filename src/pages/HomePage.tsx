import { useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function HomePage() {
  const { hash } = useLocation()

  useLayoutEffect(() => {
    if (hash !== '#contact') return
    document.getElementById('contact')?.scrollIntoView({ behavior: 'auto', block: 'start' })
  }, [hash])

  return (
    <>
      <section className="relative flex min-h-screen flex-col overflow-hidden border-b border-outline-variant md:flex-row">
        <div className="relative flex min-h-[512px] w-full items-center justify-center border-r border-outline-variant bg-primary-container md:min-h-screen md:w-1/2">
          <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center opacity-10">
            <span className="font-display text-[240px] leading-none text-on-primary-fixed-variant md:text-[400px]">
              VIBE
            </span>
          </div>
          <div className="z-10 p-12 text-center text-on-primary-fixed md:text-left">
            <h1 className="font-display text-[64px] font-black uppercase leading-[60px] tracking-[-0.04em] md:text-[120px] md:leading-[100px]">
              VIBE_CODER
            </h1>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.4em] opacity-80">
              Product systems · AI-assisted delivery · crisp judgment
            </p>
          </div>
        </div>

        <div className="flex w-full min-h-screen flex-col justify-end bg-gradient-to-b from-[#0a1a15] to-background p-12 font-display md:w-1/2">
          <div className="max-w-xl">
            <span className="mb-8 inline-block rounded-full bg-primary-container px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-on-primary-container">
              ( 00 ) IDENTITY
            </span>
            <h2 className="mb-12 text-[48px] font-extrabold leading-[52px] tracking-[-0.02em]">
              BUILDING PRODUCTS AT THE SPEED OF THOUGHT.
            </h2>
            <div className="grid grid-cols-1 gap-8 border-t border-outline-variant pt-8 md:grid-cols-2">
              <div>
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.1em] text-primary">
                  / PHILOSOPHY
                </span>
                <p className="text-base leading-6 text-on-surface-variant">
                  Systems that learn, adapt, and ship. Features are outputs;
                  leverage and learning loops are the product.
                </p>
              </div>
              <div>
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.1em] text-primary">
                  / TRAJECTORY
                </span>
                <p className="text-base leading-6 text-on-surface-variant">
                  High-density data surfaces and AI-orchestrated workflows for
                  the next web—designed for measurable outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-24 self-end opacity-40">
            <div className="relative h-32 w-32">
              <div className="absolute inset-0 rounded-full border border-outline" />
              <div className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-outline" />
              <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-outline" />
              <div className="absolute left-1/4 top-1/4 h-1/2 w-1/2 rotate-12 border border-primary-container" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface">
        <div className="flex flex-col border-b border-outline-variant md:flex-row">
          <div className="flex w-full flex-col justify-between border-r border-outline-variant p-12 md:w-1/4">
            <span className="w-fit rounded-full bg-primary-container px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-on-primary-container">
              ( 01 ) CORE_ABILITIES
            </span>
            <h3 className="mt-12 font-display text-2xl font-bold uppercase tracking-tighter">
              Strategic
              <br />
              Engineered
              <br />
              Outputs
            </h3>
          </div>
          <div className="grid w-full grid-cols-1 md:w-3/4 md:grid-cols-3">
            <AbilityCard
              k="01_SYSTEMS_DESIGN"
              body="Modular architectures that decouple messy requirements into executable nodes."
              visual="square"
            />
            <AbilityCard
              k="02_ALGORITHMIC_PM"
              body="Quant models and crisp bets—clarity before the first line of code."
              visual="cross"
            />
            <AbilityCard
              k="03_VIBE_ORCHESTRATION"
              body="Aligning engineering speed with taste—tight loops from draft to delight."
              visual="circle"
              last
            />
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface-container-lowest">
        <div className="grid grid-cols-2 divide-x divide-y divide-outline-variant border-outline-variant md:grid-cols-4 md:divide-y-0">
          <StatBlock
            label="Products Launched"
            value="14"
            hint="Enterprise-scale systems across global nodes."
          />
          <StatBlock
            label="Revenue Impact"
            value="$2.4M"
            hint="Incremental lift from algorithmic optimization (sample)."
          />
          <StatBlock
            label="Signal Quality"
            value="99%"
            hint="Friction reduced through orchestration + instrumentation."
          />
          <StatBlock
            label="Commit Velocity"
            value="42×"
            hint="Iteration rate with LLM-assisted delivery (illustrative)."
          />
        </div>
      </section>

      <section className="bg-background p-12">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-2">
            <span className="w-fit rounded-full bg-primary-container px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-on-primary-container">
              ( 02 ) SELECTED_WORKS
            </span>
            <h2 className="font-display text-[48px] font-extrabold uppercase leading-[52px] tracking-[-0.02em]">
              Recent Deployments
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="mb-2 cursor-target font-mono text-[10px] uppercase tracking-[0.1em] text-primary hover:underline"
          >
            VIEW ALL ARCHIVE →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group relative aspect-video cursor-target overflow-hidden border border-outline-variant bg-surface-container-low md:col-span-2 md:aspect-auto">
            <div className="diagonal-hatch absolute inset-0 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 rounded-full border-2 border-primary-container/60 opacity-80" />
            </div>
            <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-8">
              <div>
                <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-primary-container">
                  PROJECT_AETHER
                </span>
                <h3 className="font-display text-2xl font-bold">
                  Decentralized Supply Logic
                </h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center border border-white transition-colors group-hover:border-primary-container group-hover:bg-primary-container">
                <span className="material-symbols-outlined text-white">arrow_outward</span>
              </div>
            </div>
          </div>

          <div className="group relative min-h-[400px] cursor-target border border-outline-variant bg-surface-container-low">
            <div className="flex h-full flex-col justify-between p-8">
              <div>
                <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.1em] text-primary">
                  PRODUCT_002
                </span>
                <h3 className="font-display text-2xl font-bold uppercase leading-tight">
                  Neural
                  <br />
                  Priority
                  <br />
                  Engine
                </h3>
              </div>
              <div className="relative mt-8 flex aspect-square w-full items-center justify-center border border-outline-variant diagonal-hatch">
                <div className="flex h-1/2 w-1/2 items-center justify-center border-2 border-primary-container transition-transform group-hover:scale-110">
                  <span className="font-mono text-[10px] text-on-surface">VIBE_02</span>
                </div>
              </div>
              <p className="mt-4 font-mono text-[10px] text-on-surface-variant">
                AI-assisted prioritization with transparent impact scoring (placeholder
                case study).
              </p>
            </div>
          </div>

          <ProjectPill title="Quantum Dashboard" tag="SaaS / Enterprise" />
          <ProjectPill title="Ghost Infrastructure" tag="Infrastructure" />
          <ProjectPill title="Helix Protocol" tag="Protocol" />
        </div>
      </section>

      <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-surface px-12 py-32 text-center">
        <div className="diagonal-hatch absolute inset-0 opacity-5" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            / ESTABLISH_CONTACT
          </span>
          <h2 className="mb-12 font-display text-[64px] font-black uppercase leading-[60px] tracking-[-0.04em] md:text-[48px] md:leading-[52px]">
            Let’s build the future, faster.
          </h2>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <a
              href="mailto:hello@example.com"
              className="cursor-target border border-primary-container bg-primary-container px-10 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-on-primary-container transition-all hover:bg-transparent hover:text-primary-container"
            >
              INITIATE_SESSION
            </a>
            <button
              type="button"
              className="cursor-target border border-outline px-10 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface transition-all hover:bg-on-surface hover:text-background"
            >
              DOWNLOAD_SCHEMATICS (CV)
            </button>
          </div>
          <div className="mt-10 grid gap-4 border border-outline-variant bg-surface-container-lowest p-6 text-left font-mono text-[10px] uppercase tracking-[0.12em] text-on-surface-variant md:grid-cols-3">
            <div>
              <div className="text-primary">Email</div>
              <div className="mt-2 normal-case tracking-normal text-on-surface">
                hello@example.com
              </div>
            </div>
            <div>
              <div className="text-primary">WeChat</div>
              <div className="mt-2 normal-case tracking-normal text-on-surface">
                your_handle
              </div>
            </div>
            <div>
              <div className="text-primary">GitHub</div>
              <a
                className="mt-2 block cursor-target normal-case tracking-normal text-primary underline-offset-4 hover:underline"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                github.com/yourhandle
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function AbilityCard({
  k,
  body,
  visual,
  last,
}: {
  k: string
  body: string
  visual: 'square' | 'cross' | 'circle'
  last?: boolean
}) {
  const border = last
    ? 'cursor-target border-surface-container-high p-12 transition-colors group hover:bg-surface-container-high'
    : 'cursor-target border-b border-outline-variant p-12 transition-colors group hover:bg-surface-container-high md:border-b-0 md:border-r'

  return (
    <div className={border}>
      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-primary">{k}</span>
      <p className="mb-12 mt-4 text-base leading-6 text-on-surface-variant">{body}</p>
      <div className="relative aspect-video w-full overflow-hidden border border-outline-variant diagonal-hatch">
        <div className="absolute inset-0 flex items-center justify-center">
          {visual === 'square' ? (
            <div className="h-12 w-12 rotate-45 border border-primary-container transition-transform group-hover:scale-125" />
          ) : null}
          {visual === 'cross' ? (
            <>
              <div className="absolute h-1 w-16 border-t border-primary-container transition-transform duration-1000 group-hover:rotate-180" />
              <div className="absolute h-16 w-1 border-l border-primary-container transition-transform duration-1000 group-hover:rotate-180" />
            </>
          ) : null}
          {visual === 'circle' ? (
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border border-primary-container opacity-50 transition-transform group-hover:scale-150" />
          ) : null}
        </div>
      </div>
    </div>
  )
}

function StatBlock({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="flex flex-col gap-4 p-12">
      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-primary">{label}</span>
      <span className="font-display text-[64px] font-black leading-none text-on-surface">{value}</span>
      <p className="font-mono text-[9px] uppercase leading-tight text-on-surface-variant">{hint}</p>
    </div>
  )
}

function ProjectPill({ title, tag }: { title: string; tag: string }) {
  return (
    <div className="group flex cursor-target flex-col justify-between border border-outline-variant bg-surface-container-high p-8 transition-colors duration-300 hover:bg-primary-container">
      <h3 className="font-display text-2xl font-bold text-on-surface transition-colors group-hover:text-on-primary-fixed">
        {title.split(' ').map((w, i) => (
          <span key={`${i}-${w}`} className="block">
            {w}
          </span>
        ))}
      </h3>
      <div className="mt-8 flex items-end justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-on-surface-variant transition-colors group-hover:text-on-primary-fixed-variant">
          {tag}
        </span>
        <span className="material-symbols-outlined transition-colors group-hover:text-on-primary-fixed">
          link
        </span>
      </div>
    </div>
  )
}
