---
name: Dra. Mel Salves — Ateliê de Proporções
description: Editorial de luxo aplicado à estética avançada, com precisão clínica e calor humano.
colors:
  ink: "#241713"
  espresso: "#4a2c22"
  espresso-deep: "#321d17"
  dry-bronze: "#76503b"
  bronze-highlight: "#d5b494"
  monogram-bronze: "#cfaa83"
  journey-clay: "#8c6046"
  paper: "#f3eee5"
  porcelain: "#fffaf2"
  fine-line: "rgba(36, 23, 19, 0.2)"
  footer-ink: "#17100e"
  footer-muted: "#cdbdb1"
  clinical-muted: "#6f5b52"
typography:
  display:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "clamp(4.1rem, 7.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "clamp(3.35rem, 6vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "31px"
    fontWeight: 400
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sharp: "0"
spacing:
  hairline: "1px"
  control: "14px"
  edge-mobile: "24px"
  row: "27px"
  content-gap: "40px"
  section-gap: "70px"
  section-block: "clamp(100px, 12vw, 170px)"
components:
  text-action:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0 0 10px"
    height: "44px"
  outlined-action:
    backgroundColor: "transparent"
    textColor: "{colors.porcelain}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "19px 24px"
  outlined-action-hover:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.espresso}"
  disclosure:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.sharp}"
    padding: "25px 0"
---

# Design System: Dra. Mel Salves — Ateliê de Proporções

## Overview

**Creative North Star: "Ateliê de Proporções"**

O sistema transforma avaliação estética em leitura editorial: uma composição de prova de moda, silenciosa e arquitetônica, na qual tipografia, retratos reais e proporções substituem a linguagem de catálogo clínico. A atmosfera é segura, humana e precisa; luxo vem de escala, espaço e contenção, não de ornamento.

A página alterna campos escuros e marfim, imagens imersivas, listas lineares e grandes títulos serifados. O monograma MS atravessa a experiência como assinatura, enquanto o conteúdo clínico permanece direto e subordinado à avaliação individual.

**Key Characteristics:**

- Composição editorial assimétrica com retratos reais em escala arquitetônica.
- Contraste entre títulos serifados expressivos e informação funcional sem serifa.
- Superfícies planas, cantos retos e divisórias finas no lugar de cartões.
- Paleta quente e contida de marfim, espresso, bronze seco e argila.
- Movimento raro, autoral e sempre dispensável para compreensão.

## Colors

A paleta é terrosa, quente e desaturada; o contraste entre papel e espresso sustenta a legibilidade, e os bronzes funcionam como assinatura rara.

### Primary

- **Espresso Editorial:** campo principal do hero e da chamada final; concentra a maior intensidade da marca.
- **Espresso Profundo:** fecha o gradiente do hero sem criar uma nova família cromática.

### Secondary

- **Bronze Seco:** rótulos, hierarquia auxiliar e pequenos sinais de autoria.
- **Bronze de Luz:** ênfase tipográfica no manifesto do hero.
- **Bronze do Monograma:** assinatura MS sobre a fotografia, com mistura luminosa.

### Tertiary

- **Argila da Jornada:** superfície exclusiva da sequência de atendimento, distinguindo processo de apresentação e conversão.

### Neutral

- **Tinta Quente:** texto principal e campo escuro do estudo de método.
- **Papel Marfim:** plano de fundo dominante e moldura do collage fotográfico.
- **Porcelana:** texto e ações sobre superfícies escuras.
- **Linha de Grafite Quente:** divisórias e contornos discretos.
- **Tinta de Rodapé:** fechamento mais profundo da página.
- **Taupe de Rodapé:** informação secundária no encerramento.
- **Taupe Clínico:** nota de responsabilidade abaixo dos procedimentos.

### Named Rules

**The Bronze Is a Signature Rule.** Use bronze for emphasis, authorship and orientation—not as a broad decorative fill.

**The Warm Contrast Rule.** Preserve warm near-black and ivory relationships; never cool the system into blue-gray clinical neutrality.

## Typography

**Display Font:** Cormorant Garamond (with serif fallback)

**Body Font:** Manrope (with sans-serif fallback)

**Character:** Cormorant Garamond supplies editorial intimacy, high contrast and the expressive italic used in the hero. Manrope keeps navigation, clinical explanation and controls quiet, contemporary and unambiguous.

### Hierarchy

- **Display:** regular, tightly tracked and compact; reserved for the hero and the largest section statements.
- **Headline:** regular serif with close leading; establishes section rhythm and deliberately allows short editorial line breaks.
- **Title:** regular serif; names treatments, journey moments, locations and FAQ questions.
- **Body:** regular sans serif; explains care and procedure context, generally constrained to narrow reading measures.
- **Label:** small sans serif with generous tracking and uppercase treatment; used for navigation, roles, captions and actions.

### Named Rules

**The Two-Voice Rule.** Serif carries expression and identity; sans serif carries navigation, evidence and action. Do not swap their jobs.

**The Short-Line Display Rule.** Large headings are composed as intentional two- or three-line statements, never as dense paragraphs.

## Layout

Desktop composition uses full-width editorial fields rather than a centered card container. Horizontal page edges are usually `7vw`; the header uses a fluid inset from 22px to 68px. The opening viewport is a 54/46 split, the method study is even, and later sections vary their ratios so the page reads like a sequence of spreads rather than repeated modules.

Section spacing is generous and fluid. Information is organized with borders, aligned baselines and asymmetric whitespace: manifesto copy is offset, procedures are a ruled index, the journey is a four-column sequence, and the biography uses a 56/44 photographic collage.

At 900px, major grids stack, the navigation collapses, the hero becomes a copy-first vertical narrative, the journey becomes two columns, and edges resolve to 24px. At 540px, the journey and footer become single-column, display sizes settle at 3.35rem, and collage proportions tighten without removing imagery.

**The Spread, Not Container Rule.** Build sections as distinct editorial spreads with their own proportion; do not place the experience inside a generic max-width shell.

## Elevation & Depth

The system uses no box shadows. Depth comes from tonal fields, full-bleed photography, photographic overlap, the paper-colored collage border, a subtle hero gradient and the oversized translucent letter in the method study. Hairline borders provide structure without lifting surfaces.

### Named Rules

**The Flat-by-Default Rule.** Keep surfaces on the page plane; use contrast, overlap and scale—not drop shadows—to establish hierarchy.

## Shapes

The form language is rectilinear and architectural. Controls, sections and image crops use square corners; fine horizontal or vertical rules are the recurring geometry. Photography is clipped into decisive rectangles, with the biography detail image overlapping its larger portrait behind a thick paper-colored frame.

**The No-Pill Rule.** Do not introduce capsules, rounded cards or soft dashboard geometry; tactile warmth comes from color, type and photography.

## Components

### Buttons

- **Shape:** underlined text action or square outlined action; no filled rounded button is used at rest.
- **Primary:** the conversion action is a porcelain-on-espresso outline with 19px × 24px padding and a directional arrow.
- **Hover / Focus:** outlined actions invert to porcelain with espresso text over 300ms; text actions reduce opacity over 200ms; keyboard focus is a 2px current-color outline offset by 5px.
- **Secondary:** editorial text links pair uppercase Manrope labels with a bottom rule, a 44px minimum target and an arrow aligned to the far edge.

### Cards / Containers

- **Corner Style:** square throughout.
- **Background:** broad paper, ink, espresso and argila fields; there is no generic card surface.
- **Shadow Strategy:** none; see Elevation & Depth.
- **Border:** one-pixel warm hairlines structure rows and sequences.
- **Internal Padding:** varies by editorial field; procedure rows use 27px vertically, while large sections use the section spacing scale.

### Navigation

The fixed three-zone desktop header uses a translucent deep-espresso field with backdrop blur, keeping the MS brand at left, a finely ruled navigation group at center and a paper-filled evaluation action at right. After 24px of scroll the field becomes nearly opaque and gains a soft downward shadow while retaining its 78px height, avoiding layout shift. Navigation links reveal a bronze-light hairline on hover/focus. Below 900px the center navigation is removed, leaving a 70px two-zone header with brand and conversion action.

The hero conversation action is the primary conversion control: a square 330×56px bronze-light field with ink text, generous horizontal spacing and an authored diagonal-arrow SVG. Its hover shifts to white and rises 2px; the footer-like underline treatment remains reserved for secondary editorial links.

### FAQ Disclosure

Native `details` and `summary` preserve semantics and keyboard behavior. Each question is a serif title in a ruled list; the sans-serif plus rotates 45 degrees when open, and the answer remains in the same flat flow.

### Editorial Index

Procedure entries are rows, not cards. A large serif treatment name leads a concise sans-serif qualification; a faint warm wash appears only on hover, and the list remains separated by hairlines.

### Portrait Collage

The biography combines a dominant vertical portrait with a smaller lower-right detail crop. A 12px paper frame creates physical overlap without a shadow, preserving the contact-sheet character.

### Motion

The only authored entrance is the first viewport: copy rises and fades over 900ms while the portrait reveals vertically over 1.1s with an 80ms delay. Both use the same expressive ease. All content remains visible without animation, smooth scrolling is disabled under `prefers-reduced-motion`, and no meaning depends on motion.

## Do's and Don'ts

### Do:

- **Do** use real, authorized portrait photography as evidence and as a structural part of the composition.
- **Do** use hairlines, alignment and whitespace to organize clinical information.
- **Do** keep evaluation language clear, cautious and subordinate to professional assessment.
- **Do** preserve visible keyboard focus, semantic disclosure behavior and reduced-motion support.
- **Do** retain the MS monogram as a restrained signature.

### Don't:

- **Don't** introduce generic clinical cards, pricing tiles, statistics or testimonial modules.
- **Don't** use pink beauty clichés, ornamental gold, cool medical blue or glossy gradients.
- **Don't** add rounded pills, soft shadows or SaaS-style component geometry.
- **Don't** replace editorial line breaks with dense blocks or scatter serif type across functional microcopy.
- **Don't** invent credential, result or efficacy claims; the design must support confidence without promises.
