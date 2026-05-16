# Stitch prompt — personal website prototype (no photography)

Copy everything below the line into Stitch.

---

**Role:** You are generating a **high-fidelity UI prototype** for a personal website (single designer handoff quality). Output **screens + components** suitable for desktop web first (1440×900 baseline), responsive behavior described at the end.

**Product context**
- Positioning: a **Product Manager** personal homepage emphasizing **“Vibe-coding”** project showcases plus structured reflection on skills and judgment.
- Primary goals: prove execution, product judgment, and fluency with **AI-assisted building**; act as a hub for recruiting, collaborations, and personal brand.
- Target users: recruiters/interviewers, collaborators, peer PMs, people interested in AI products.
- Brand promise on-page: understands product, ships ideas, validates fast with AI, thinks in structured narratives.

**Information architecture**
1. **Home**
   - Intro + one-line positioning statement
   - “Core abilities” tags (chips/pills), not prose-heavy
   - Featured projects entry zone (lead into portfolio)
   - Contact row: Email, WeChat ID/handle placeholder, GitHub
2. **Project portfolio**
   - A creative, editorial catalog of projects (titles, roles, outcomes, stacks/tools as placeholders)
3. **Thought / writing**
   - Two editorial lanes: **Product thinking** + **Observations on the AI era** (list/grid of articles as cards with title + short blurb placeholders)

**Global navigation**
- Placement: **fixed top-right**.
- Links: Home | Portfolio | Writing (Thought articles)
- Behavior: discrete page jumps (not infinite scroll storytelling). Indicate active state subtly.

**Visual direction (combine both references)**
- Overall vibe: **premium visual portfolio**, **tech-forward/avant-garde**, **magazine / poster**.
- Composition: black canvas with **large high-contrast color panels** behaving like folded posters; modules read as standalone **visual cards**.
- Typography: modern grotesque / neo-grotesk; extreme scale contrast (small labels vs huge headlines).
- **Background type treatment:** oversized, semi-transparent first-name or initials as atmosphere (pure type, **no portraits**).

**Color system (prioritize Mind Map palette, keep reference layout DNA)**
- Base: deep black backgrounds; thin light rules for grids and separators.
- Primary accent: **high-saturation orange** blocks and strokes.
- Text highlights: subtle **orange gradient** on primary headlines/hover states where appropriate (keep readable contrast).
- Optional secondary panels (borrow *layout energy* from the reference): a **secondary neon-ish panel** sparingly—still coordinated with orange (do not recreate random rainbow collage unless it stays cohesive).

**Layout language inspired by editorial split screens (without images)**
- Use **split panels**: left zone can be pure color slab + typography; right zone is structured editorial content.
- Bottom-left identity lockup (name line + subtitle) as a repeatable motif.
- For “mentor-number” motifs in the reference, reinterpret as section indices: **`01 PROJECT`**, **`02 WRITING`**, **`03 PROFILE`** pills—minimal, neon-adjacent outline or filled pills.

**Data/stats motif (placeholder content)**
- Include a minimalist **statistics grid**: big numbers left, explanatory microcopy right, separated by whisper-thin divider lines—use **fabricated placeholders** (years, launches, cycles, prompts-to-ship cadence).

**Interactions (prototype-level cues, not engineered)**
- Page transitions annotated: **fade in / fade out** between routes.
- **No long-scroll hero gimmicks** implied; prefer anchored sections/screens.
- **Loading state concept:** brief **“old CRT TV” mechanical boot animation** motif (simple illustration of scanlines/glitch-frame + tuner bars), shown as one dedicated frame or overlay note.

**Hard constraints**
- **No photographs, illustrations of people, avatars, or profile headshots.** Replace portrait areas with typography, gradients, geometric masks, dashed “image omitted” frames, or solid color silhouettes purely abstract—not human-shaped.
- No real QR codes required; placeholder boxes only.
- All copy can be realistic English placeholders, but clearly generic (no claiming false employers).

**Deliverables Stitch should output**
1. Stylescape tokens: color, type scale, spacing, grid rules, corner radius (sharp/minimal).
2. **3 main screens**: Home, Portfolio, Writing (+ optional CRT loading frame).
3. Component library: Nav (top-right), pills/tags, editorial cards, oversized background type layer, divider grid rows, footer/contact strip.
4. Notes on hover/focus: orange accent elevations; restrained motion cues.

**Responsive note**
- At tablet/mobile: stacked poster cards; keep black base and orange accents; navigation collapses into top bar with condensed links.
