---
name: High-Contrast Editorial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e3bfb3'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#aa897f'
  outline-variant: '#5b4138'
  surface-tint: '#ffb59c'
  primary: '#ffb59c'
  on-primary: '#5c1900'
  primary-container: '#ff5f1f'
  on-primary-container: '#561700'
  inverse-primary: '#ab3600'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#8dcdff'
  on-tertiary: '#00344f'
  tertiary-container: '#009de4'
  on-tertiary-container: '#00304a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#832700'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#cae6ff'
  tertiary-fixed-dim: '#8dcdff'
  on-tertiary-fixed: '#001e30'
  on-tertiary-fixed-variant: '#004b70'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 120px
    fontWeight: '900'
    lineHeight: 100px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '900'
    lineHeight: 60px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 12px
    letterSpacing: 0.1em
  stat-number:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '900'
    lineHeight: 64px
spacing:
  base: 4px
  gutter: 24px
  margin: 48px
  panel-split: 50vw
---

## Brand & Style
This design system is built for a Product Manager portfolio that demands an immediate impression of technical precision and editorial authority. The personality is unapologetically bold, "Tech-Noir," and highly structured. It draws heavily from **Modern Brutalism** and **Swiss Punk** movements—marrying the raw energy of posters with the sophisticated hierarchy of a high-end magazine.

The aesthetic prioritizes information density and structural clarity. By stripping away photography and human elements, the UI relies on geometric primitives and typographic scale to communicate value. The emotional response is one of intellectual rigor, confidence, and futuristic sophistication.

## Colors
The palette is built on a "True Black" foundation to maximize contrast and focus.
- **Base:** `#000000` serves as the primary canvas, creating a sense of infinite depth.
- **Accent (Electric Orange):** `#FF5F1F` is used for high-signal elements: active states, primary CTA blocks, and kinetic strokes.
- **Grids/Rules:** `#333333` defines the structural skeleton, appearing as "whisper-thin" 1px lines.
- **Typography:** Primary text is `#FFFFFF`. Secondary and atmospheric text uses low-opacity white or grey to create layers of depth without introducing new hues.

## Typography
The typographic system relies on **extreme scale contrast**. 
- **Display Type:** Use `display-xl` for section titles and hero statements. These should often be "Atmospheric"—set at 10% opacity behind other content to act as a texture.
- **Technical Accents:** Use `jetbrainsMono` for labels, indices, and metadata to reinforce the tech-forward, developer-adjacent nature of the portfolio.
- **Scale:** Headlines should feel massive and heavy, while labels are tiny, uppercase, and tracked out, creating a "blueprint" aesthetic. 
- **Gradients:** Subtle top-to-bottom linear gradients (White to #FF5F1F at 20%) can be applied to `display-xl` text to add dimension.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy, inspired by modern editorial design.
- **Editorial Split:** The primary layout pattern is a 50/50 vertical split. On desktop, the left panel remains fixed (containing a headline or geometric mask) while the right panel scrolls.
- **The Rule of Rules:** Every section is bounded by a 1px `#333333` stroke. Do not use margins for separation; use borders.
- **Grid-based Stats:** Data should be presented in a strict 2 or 4-column grid where each cell is encased in 1px rules, mimicking a spreadsheet or technical schematic.
- **Mobile Reflow:** Split panels stack vertically. Spacing reduces to `24px` margins, but the 1px rules remain constant to maintain the "framed" look.

## Elevation & Depth
This design system rejects traditional shadows and blurs. Depth is achieved through **Tonal Layering** and **Atmospheric Typography**.
- **Flat Z-Index:** Elements do not "float." They sit on the same plane, separated only by thin rules.
- **The Overhang:** Occasionally, "Atmospheric" text (oversized and semi-transparent) should be positioned at a lower Z-index, partially obscured by solid content blocks to create a sense of foreground and background.
- **High-Contrast Blocks:** Use solid `#FF5F1F` backgrounds for active elements to "pop" them forward purely through color luminance rather than elevation.

## Shapes
The shape language is strictly **Sharp (0px)**. 
- Avoid all rounded corners to maintain a "blueprint" and "engineered" feel.
- **Geometric Masks:** In place of photography, use SVG masks of circles, triangles, or 45-degree slashes filled with the primary accent color or thin white outlines.
- **Pills:** The only exception to the sharp rule is the "Index Pill" (e.g., 01, 02), which uses a 100% rounded corner to act as a high-visibility focal point against the otherwise rectangular grid.

## Components
- **Navigation:** A fixed top-right block. Compact text links in `label-xs` separated by vertical pipes (`|`).
- **Section Indices:** Use `label-xs` inside an Electric Orange pill. Example: `( 01 )`. These should sit at the top-left of every new grid section.
- **Buttons:** Sharp-cornered boxes. Primary: Solid `#FF5F1F` with black text. Secondary: 1px `#FFFFFF` border with white text. Hover state: Inverse colors.
- **Stats Grids:** Large `stat-number` paired with a `label-xs` descriptor below it. Each stat is housed in a 1px border box.
- **Input Fields:** Bottom-border only (`1px #333333`). Labels are `label-xs` positioned above the input. Focus state: Border turns `#FF5F1F`.
- **Geometric Placeholders:** For case studies, use a 16:9 box with a `#333333` diagonal cross-hatch pattern or a large central geometric primitive (circle/square) in `#FF5F1F`.