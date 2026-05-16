export function WritingPage() {
  return (
    <div>
      <section className="grid min-h-screen grid-cols-1 border-b border-outline-variant md:grid-cols-2">
        <div className="relative flex flex-col justify-end overflow-hidden border-r border-outline-variant bg-gradient-tech p-12">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <span className="absolute -left-20 -top-10 select-none font-display text-[300px] leading-none">
              VIBE
            </span>
          </div>
          <div className="relative z-10">
            <div className="mb-8 inline-block bg-primary-container px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-on-primary-container">
              ( 01 )
            </div>
            <h1 className="mb-12 font-display text-[64px] font-black leading-none tracking-[-0.04em] md:text-[120px] md:leading-[100px]">
              THINKING
              <br />
              LANE.
            </h1>
            <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.2em] text-outline">
              Serialized notes on systems design, model stacks, and product intuition.
            </p>
          </div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-outline/30">
            <div className="h-full w-full rotate-12 border border-primary-container/40" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="border-b border-outline-variant bg-surface-container-lowest p-12">
            <h2 className="font-display text-[48px] font-extrabold uppercase leading-[52px]">
              Product Thinking
            </h2>
            <p className="mt-4 text-base leading-6 text-on-surface-variant">
              Structural integrity in digital craft—judgment, sequencing, incentives.
            </p>
          </div>

          <ArticleRow
            date="DEC 2023"
            title="The Vibe-Coding Manifesto"
            body="From manual logic to intent-based architecture: why the PM craft is becoming explicitly technical."
            cover="triangle"
          />
          <ArticleRow date="NOV 2023" title="Judgment as a Service" body="When production is cheap, selection becomes the moat." />
        </div>
      </section>

      <section className="grid min-h-screen grid-cols-1 border-b border-outline-variant md:grid-cols-2">
        <div className="order-2 flex flex-col md:order-1">
          <div className="border-b border-outline-variant bg-surface-container-lowest p-12">
            <h2 className="font-display text-[48px] font-extrabold uppercase leading-[52px]">
              AI Era Observations
            </h2>
            <p className="mt-4 text-base leading-6 text-on-surface-variant">
              Notes from the post-compute landscape—tradeoffs, not hype cycles.
            </p>
          </div>

          <article className="group cursor-target border-b border-outline-variant p-12 transition-colors hover:bg-surface-container-low">
            <div className="mb-6 flex items-start justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-primary">OCT 2023</span>
              <span className="material-symbols-outlined text-outline transition-colors group-hover:text-primary">
                arrow_outward
              </span>
            </div>
            <h3 className="mb-4 font-display text-2xl font-bold">Scale vs Meaning</h3>
            <p className="mb-8 max-w-lg text-base leading-6 text-on-surface-variant">
              Hyper-growth narratives versus human-scale product surfaces—what the metrics miss.
            </p>
            <div className="grid grid-cols-2 gap-0 border border-outline-variant">
              <div className="border-b border-r border-outline-variant p-6">
                <div className="font-display text-[64px] font-black text-primary">82%</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-outline">
                  Efficiency Gain
                </div>
              </div>
              <div className="border-b border-outline-variant p-6">
                <div className="font-display text-[64px] font-black text-secondary">04%</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-outline">
                  Meaning Retention
                </div>
              </div>
            </div>
          </article>

          <div className="flex items-center justify-center p-12">
            <button
              type="button"
              className="cursor-target border border-on-surface px-12 py-4 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-on-surface hover:text-background"
            >
              LOAD_ALL_THOUGHTS
            </button>
          </div>
        </div>

        <div className="relative order-1 flex flex-col justify-center overflow-hidden border-l border-outline-variant bg-surface-container-lowest p-12 md:order-2">
          <div className="diagonal-hatch pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative z-10">
            <div className="mb-8 inline-block bg-primary-container px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-on-primary-container">
              ( 02 )
            </div>
            <h1 className="mb-12 font-display text-[64px] font-black leading-none tracking-[-0.04em] md:text-[120px] md:leading-[100px]">
              NEURAL
              <br />
              SHIFT.
            </h1>
            <div className="max-w-sm border-l-4 border-primary-container py-2 pl-6">
              <p className="text-base italic leading-6 text-on-surface">
                “The architect of the future draws constraints—then lets intelligence inhabit them.”
              </p>
            </div>
          </div>
          <div className="relative z-10 mt-20 aspect-square w-full border border-outline-variant p-4">
            <div className="diagonal-hatch relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-primary-container">
                  <span className="material-symbols-outlined text-4xl text-primary-container">hub</span>
                </div>
                <div className="pointer-events-none absolute inset-6 border border-outline-variant/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface-container-lowest">
        <div className="grid grid-cols-2 divide-x divide-y divide-outline-variant md:grid-cols-4 md:divide-y-0">
          <div className="flex aspect-square flex-col justify-between p-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-outline">( VOLUME )</span>
            <div>
              <div className="font-display text-[64px] font-black leading-none">42</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em]">Essays Published</div>
            </div>
          </div>
          <div className="flex aspect-square flex-col justify-between p-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-outline">( IMPACT )</span>
            <div>
              <div className="font-display text-[64px] font-black leading-none">12k</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em]">Active Readers</div>
            </div>
          </div>
          <div className="flex aspect-square flex-col justify-between p-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-outline">( FREQUENCY )</span>
            <div>
              <div className="font-display text-[64px] font-black leading-none">01</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em]">Post Per Week</div>
            </div>
          </div>
          <div className="flex aspect-square flex-col justify-between p-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-outline">( STATUS )</span>
            <div>
              <div className="font-display text-[64px] font-black leading-none text-primary-container">LIVE</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em]">Connection Active</div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-surface-container-lowest px-12 py-32">
        <div className="w-full max-w-xl">
          <span className="mb-4 block text-center font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            JOIN THE NETWORK
          </span>
          <h2 className="mb-12 text-center font-display text-[48px] font-extrabold uppercase leading-[52px]">
            Receive the pulse.
          </h2>
          <div className="relative w-full">
            <input
              className="w-full cursor-target border-b border-outline bg-transparent py-4 font-display text-2xl text-on-surface placeholder:text-surface-bright focus:border-primary-container focus:outline-none"
              placeholder="ENTER_EMAIL_ADDRESS"
              type="email"
              aria-label="Email"
            />
            <button
              type="button"
              className="absolute bottom-4 right-0 cursor-target font-mono text-[10px] uppercase tracking-[0.08em] text-primary transition-all hover:tracking-widest"
            >
              SUBMIT -&gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ArticleRow({
  date,
  title,
  body,
  cover,
}: {
  date: string
  title: string
  body: string
  cover?: 'triangle'
}) {
  return (
    <article className="group cursor-target cursor-pointer border-b border-outline-variant p-12 transition-colors hover:bg-surface-container-low">
      <div className="mb-6 flex items-start justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-primary">{date}</span>
        <span className="material-symbols-outlined text-outline transition-colors group-hover:text-primary">
          arrow_outward
        </span>
      </div>
      <h3 className="mb-4 font-display text-2xl font-bold">{title}</h3>
      <p className="mb-8 max-w-lg text-base leading-6 text-on-surface-variant">{body}</p>
      {cover ? (
        <div className="flex aspect-video w-full items-center justify-center overflow-hidden border border-outline-variant diagonal-hatch">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary-container">
            <span className="material-symbols-outlined text-primary-container">change_history</span>
          </div>
        </div>
      ) : null}
    </article>
  )
}
