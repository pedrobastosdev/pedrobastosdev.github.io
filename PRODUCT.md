# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences with **equal weight**; neither path is secondary.

- **Recruiters and hiring companies** evaluating Pedro for a junior role (full stack or back-end), hired as CLT or contracted as PJ. They skim fast, want proof of real engineering, the CV, and LinkedIn.
- **Small/local business owners** (Praia Grande and the Baixada Santista region, or remote) who need a site, digital menu, storefront, or internal system as freelance work. They are not technical; they want to know what they get, how the process works, and how to reach him (WhatsApp first).

When the two compete for space or attention, the site serves both paths in parallel rather than ranking one above the other.

## Product Purpose

Personal portfolio for Pedro Bastos, full stack developer (Node.js, NestJS, React, TypeScript, PostgreSQL). It exists to turn a visit into one of two outcomes: a recruiter opening the CV / reaching out about a role, or a business owner requesting a quote. Success = qualified contact through the form, WhatsApp, e-mail, or LinkedIn.

## Positioning

- **Corporate experience:** 3+ years of professional development, SAP ABAP at Accenture Brasil — process discipline beyond a typical junior profile.
- **Projects with real rules, not tutorial CRUD:** order state machines and Decimal totals (Cardápio Digital), SLA clocks with pause, scheduled jobs and queues (Helpdesk), one codebase serving multiple demos with Lighthouse 100 SEO/a11y (Vitrine).
- **Complete delivery:** back to front, deployed with domain, SEO, and accessibility.
- **Local presence:** based in Praia Grande, SP; serves regional businesses up close, plus remote/hybrid.

## Operating Context

- Visitors arrive from the CV, LinkedIn, GitHub, Instagram, or a direct link; many on mobile.
- Freelance process is 4 steps: Conversa → Proposta (scope, deadline, price in writing) → Desenvolvimento (test versions, adjustments) → Entrega (live site, domain, initial support).
- Stated response time: within 1 business day.
- Contact form has no back end: validates and opens WhatsApp with a prefilled message that includes whether the sender is a recruiter or a business owner; falls back to e-mail.

## Capabilities and Constraints

- Plain HTML, CSS, and JavaScript; no framework, no build step, no dependencies. Deployed on GitHub Pages from `main`, root folder.
- Content language: Brazilian Portuguese.
- Single page: apresentação (Início, full width); Empregos · Stack · Serviços (one section, `#empregos-servicos`); Projetos; Sobre (trajetória SAP → web → FATEC); Como funciona (4 steps + formas de contratação: freelance por projeto and PJ mensal/por demanda, no mention of nota fiscal or CNPJ); Contato.
- Contact settings live in the `CONFIG` object in `js/script.js`; colors are tokens in `:root` of `css/style.css`.
- Contact form: the profile choice (empresa / dono de negócio) is preset by the path the visitor came from; empresa sends by e-mail, negócio (or no choice) by WhatsApp.
- Open items for Pedro: the Sobre sentence about the kind of problem he likes to solve (placeholder removed until written); confirm the project provenance wording ("Projeto próprio, publicado com dados de exemplo.") and e-mail as the empresa send route.

## Brand Commitments

- Name/handle: **pedrobastos.dev** (also `pedrobastosdev` on GitHub/LinkedIn, `@pedrobastos.dev` on Instagram).
- Voice: direct, first person, plain Portuguese, concrete about what was built and how; no hype.
- Availability statement: "Disponível para CLT, PJ e freelance" (PJ confirmed by Pedro on 2026-11-12; it belongs to the company path, not the freelance path); location "Praia Grande, SP · remoto ou híbrido".

## Evidence on Hand

- Three pinned projects with live demos and source: Cardápio Digital — Açaí da Orla, Helpdesk com SLA, Vitrine (Imobiliária and Guincho demos). Screenshots in `img/` (16:10 WebP).
- Portrait: `img/pedro.webp`. CV: `assets/CV_Pedro_Bastos_Fullstack.pdf`.
- Career facts: Accenture Brasil (SAP ABAP), FATEC (Desenvolvimento de Software Multiplataforma, in progress), 3+ years professional.
- **No testimonials, named clients, paid freelance case studies, or metrics beyond the above.** Future work must not invent any of these.

## Product Principles

1. Two doors, equal weight: every major section should make clear which path (empresa or negócio) it serves, without demoting either.
2. Show the engineering: lead with the concrete rule each project handles, not a list of buzzwords.
3. Honest proof only: real projects, real history, no fabricated social proof.
4. Contact is one step away from anywhere on the page, with WhatsApp for business owners and CV/LinkedIn for recruiters.
5. Stay light: no-build static site that loads fast on mobile data.

## Accessibility & Inclusion

Maintain the existing baseline: semantic HTML, skip link, visible focus, 44 px touch targets, WCAG AA text contrast, motion disabled under `prefers-reduced-motion`.
