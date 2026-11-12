---
name: pedrobastos.dev
description: A regional newspaper classifieds page where Pedro runs the featured ad.
colors:
  paper: "#DDE0E2"
  paper-shade: "#CCD1D4"
  field: "#F2F4F5"
  field-focus: "#FFFFFF"
  ink: "#121212"
  ink-soft: "#383C40"
  yellow: "#FFD200"
  on-ink: "#DDE0E2"
  on-ink-soft: "#B3B8BC"
  error: "#A3221B"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(4.5rem, 1rem + 7.6vw, 7.5rem)"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  title:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 78"
  title-sm:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.2
    fontVariation: "'wdth' 78"
  body-lead:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, Arial Narrow, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: "0.03em"
    fontVariation: "'wdth' 78"
rounded:
  none: "0px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  pad: "clamp(1.25rem, 0.8rem + 1.6vw, 2.25rem)"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-ink-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  button-yellow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-yellow-hover:
    backgroundColor: "transparent"
    textColor: "{colors.yellow}"
  field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 0.875rem"
    height: "3rem"
  field-focus:
    backgroundColor: "{colors.field-focus}"
  radio-option:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "3rem"
  radio-option-checked:
    backgroundColor: "{colors.yellow}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    padding: "0 1.25rem"
    height: "4rem"
  nav-link-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  nav-link-contact:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  logo-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    height: "4rem"
  ad-featured:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  ad-reverse:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.none}"
  ad:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.pad}"
  step-num:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    size: "2.75rem"
  dock:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    height: "3.5rem"
---

# Design System: pedrobastos.dev

## Overview

**Creative North Star: "Classificados"**

The site is a regional newspaper classifieds page set on cool newsprint grey. Every block of content is an ad: a rectangle bounded by ink rules on a 12-column modular grid, sized by rank. Pedro owns the one featured ad, printed in a flat yellow; the business-facing column and the contact module run in reverse (solid black with paper text). Everything else is black ink on grey paper.

Density is that of a printed page: modules butt against each other with no gutters, separated only by rules of fixed weights. Type does the shouting. Archivo is squeezed to narrow and condensed widths for names, rubrics, and ad titles, and relaxed to normal width for reading copy. The portrait is a halftone screen, as a newspaper would print it. There is no depth, no rounding, and no gradient anywhere; the page is flat paper.

The world explicitly refuses the dark developer portfolio with a code card and the cream editorial page.

**Key Characteristics:**
- Cool grey newsprint ground, true black ink, one yellow.
- Modules are bounded by ink rules, never by gaps, cards, or shadows.
- Archivo variable: narrow (68%) black for display and rubrics, condensed (78%) extra-bold for titles and controls, normal width for body.
- Square corners on everything, including inputs and the portrait.
- One signature motion: the featured ad prints in once on load.

## Colors

A three-ink newspaper palette: paper grey, black, and one featured-ad yellow, with tints only for form fields and secondary text.

### Primary
- **Featured-Ad Yellow** (`yellow`): fills whole modules (the featured ad, the masthead Contato cell, the mobile dock, the secondary button, a checked radio option) and serves as the rubric and display color inside black reverse modules. Also the text selection color.

### Neutral
- **Newsprint Grey** (`paper`): the page ground and the default ad background. Cool, slightly blue; never warm.
- **Press Grey** (`paper-shade`): placeholder behind project screenshots and the scrollbar track.
- **Field White** (`field`) and **Focus White** (`field-focus`): form input fill at rest and on focus; the only near-white surfaces in the system.
- **Press Black** (`ink`): all text, all rules, the logo block, the ink button, step numbers, and the ground of reverse modules.
- **Soft Ink** (`ink-soft`): secondary copy on paper (ad notes, field hints, step descriptions, form help).
- **Paper on Ink** (`on-ink`): body text inside reverse modules; same value as paper.
- **Soft Paper on Ink** (`on-ink-soft`): secondary text and hairline rules inside reverse modules.
- **Correction Red** (`error`): field error messages, invalid field borders, and the error status line. Never decorative.

### Named Rules
**The Whole-Module Rule.** Yellow fills entire modules or entire controls. It is never a highlight stripe, a tint, an underline, or an accent dot on a grey module. Inside a black module it may color the rubric, the display headline, and the phone number.

**The Cool Paper Rule.** The ground is cool newsprint grey. A cream, beige, or warm off-white ground is out of this world.

## Typography

**Display Font:** Archivo variable (with Arial Narrow, Arial)
**Body Font:** Archivo variable, normal width
**Label Font:** Archivo variable, condensed width

**Character:** One family stretched across widths, the way a newspaper sets heads in a compressed gothic and copy in a plain grotesque. Narrow widths carry rank; normal width carries reading.

Widths in use: narrow (`font-stretch: 68%`), condensed (`font-stretch: 78%`), normal (100%). The self-hosted file is `fonts/archivo-latin.woff2` (weights 100-900, widths 62-125%), preloaded.

### Hierarchy
- **Display** (900, narrow, clamp 4.5-7.5rem, line-height 0.84, uppercase): the name in the featured ad. One per page. The contact headline is a sibling at a smaller clamp (3-6.5rem, line-height 0.88) in yellow on black.
- **Headline / Rubric** (900, narrow, clamp 2-2.75rem, line-height 0.95, uppercase): the section name of each ad column (Empregos, Serviços), ruled underneath. The Projetos band head uses a larger rubric (clamp 2.25-3.5rem) without the rule.
- **Title** (800, condensed, 1.625rem, line-height 1.08): ad titles and project names, sentence case.
- **Title small** (800, condensed, 1.25rem, uppercase): buttons, nav links, step titles, route titles, the dock.
- **Body lead** (400, normal, 1.25rem, line-height 1.4, max 34ch): featured-ad lead and contact lead.
- **Body** (400, normal, 1.0625rem, line-height 1.5): all running copy; about copy capped at 42ch.
- **Label** (800, condensed, 0.875rem, letter-spacing 0.03em, uppercase): project fact keys, the stack list heading, field labels and the radio legend (at body size).
- **Phone numbers** (900, narrow, tabular figures, no wrap): the featured-ad phone (clamp 2.5-3.75rem) and the contact WhatsApp number, set as display-scale figures because the number is the call to action.

### Named Rules
**The Width-Is-Rank Rule.** Narrow width means the top of the hierarchy (names, rubrics, phone numbers); condensed means titles and controls; normal width means reading. Never set body copy narrow, never set a rubric at normal width.

**The Uppercase-Is-Furniture Rule.** Uppercase belongs to page furniture: rubrics, display names, buttons, nav, labels, the masthead place line. Ad titles and body stay in sentence case.

## Layout

The page is a stack of full-width "pages" (max 96rem, centered), each a 12-column grid with no gutters. Ads are grid children; each ad carries a right and bottom 2px ink rule so neighboring ads share a single rule. Pages carry 2px side rules and are separated from each other by a 6px rule.

- **Ad padding:** one fluid unit (`spacing.pad`, about 20-36px); the featured ad uses 1.25x.
- **Internal rhythm:** 1rem between ad parts by default, 1.5rem in the featured and contact modules; lists 0.5rem; action rows 0.75rem by 1.5rem.
- **Front page (desktop):** featured ad on columns 1-6, Empregos on 7-9, Serviços (reverse) on 10-12, all in one row. Rank is module size.
- **Projects:** three equal columns; each project ad spans five subgrid rows (shot, title, facts, provenance, links) so the same row aligns across all three ads.
- **About / process:** 4 + 8 columns. **Contact:** 6 reverse + 6 form.
- **Short wide screens** (wider than 68rem and under 56rem tall): display size and ad padding tighten so the whole featured ad fits the first viewport.
- **Tablet** (68rem and below): the featured ad goes full width; Empregos and Serviços split 6 + 6 beneath it; about, process, contact, and form each go full width; the masthead place line is hidden; project fact rows stack key over value.
- **Projects**: the whole section must fit one screen height. Desktop (above 68rem) keeps three fixed columns with 2:1 screenshots (5:2 on screens under 56rem tall). At 68rem and below, projects become a horizontal scroll-snap row (46vw cards on tablet, 86vw on mobile) with compact type and a "3 projetos · arraste para o lado" hint; the mobile dock hides while the section is on screen.
- **Mobile** (45rem and below): every ad is full width, page side rules drop, the header shrinks to 3.5rem, nav collapses into a "Menu" toggle that opens a stacked list, the featured-ad portrait sits beside the terms with the lead below, buttons in the featured close go full width, and the fixed bottom dock appears.
- **Sticky masthead** with scroll padding of header height plus 1.5rem.

### Named Rules
**The Shared-Rule Rule.** Ads never float with gaps between them. Adjacent modules share one ink rule; separation comes from the rule, not from whitespace.

## Elevation & Depth

None. The system is flat paper: no drop shadows, no layered surfaces, no blur. Hierarchy comes from module size, fill (paper, yellow, or reverse black), and rule weight. The single box-shadow in the build is an inset 1px stroke that thickens an invalid field's border; it is a border, not elevation.

### Named Rules
**The Flat Paper Rule.** Nothing lifts off the page. Hover states change fill or underline weight, never height or shadow.

## Shapes

Every corner is square (`rounded.none`): modules, buttons, inputs, radio options, step numbers, the portrait, and screenshots. Form inputs explicitly reset browser radius to 0. List markers are small filled squares (0.45rem) in the current color, not bullets or glyphs.

Rules come in four fixed weights:
- **1px hairline:** rows inside lists (project fact rows, contact route rows, mobile nav rows).
- **2px ink rule:** the grid itself (ad borders, page sides, control borders, images, project facts top, provenance line).
- **4px rubric rule:** under each rubric, above the featured-ad close, above the stack block, on top of the mobile dock.
- **6px page rule:** under the masthead, between pages, above the footer.

## Components

### Buttons
Heavy, condensed, uppercase ink blocks; tactile like a rubber stamp.
- **Shape:** square (0), 2px border, min height 3.25rem, horizontal padding 1.5rem.
- **Ink (primary):** black fill, paper text, black border. Used on paper and on yellow.
- **Yellow:** yellow fill and border, ink text. Used on black reverse modules.
- **Hover:** fill drops to transparent and the text takes the former fill color, leaving the 2px outline; an attached arrow icon slides 4px right. Transition 0.18s ease on color.
- **Focus:** 3px ink outline at 3px offset (yellow inside reverse modules).
- **Disabled:** 55% opacity with a progress cursor.
- Icons are inline SVG strokes (2.5 width, square caps), never glyph characters.

### Text links
Bold body text with a 2px underline at 0.25em offset and a 44px minimum touch height. Hover thickens the underline to 4px. Project links and footer links follow the same treatment.

### Masthead
Sticky paper strip with a 6px ink rule under it. Left: black logo block (900, narrow, uppercase). Then the place line (700, 0.875rem, uppercase, 0.04em tracking; truncates, shortened below 84rem, hidden on tablet). Right: nav cells divided by 2px rules, condensed uppercase; hover inverts the cell to black; the active section gets a 4px underline; the Contato cell is always yellow. On mobile a "Menu"/"Fechar" toggle opens a stacked list with hairline rows; Escape closes it.

### Ads (cards / containers)
- **Corner style:** square.
- **Backgrounds:** paper (default), yellow (featured ad only), black reverse (Serviços, contact).
- **Shadow strategy:** none (see Elevation & Depth).
- **Border:** right and bottom 2px ink rules, shared with neighbors.
- **Internal padding:** `spacing.pad`.
- Each ad opens with a **rubric** (narrow black uppercase with a 4px rule in the current color) or goes straight to an **ad title**. Bulleted content uses the **ad list** with square markers. Actions sit at the bottom of the ad (pushed down with auto margin) in one row: one framed button plus text links.

### Featured ad (signature)
The yellow module with the display name, a halftone portrait in a 2px ink frame, a lead that opens in bold, availability terms, and a close row under a 4px rule: the phone number at display scale beside the ink "Falar comigo" button. It prints in once on load: a top-to-bottom clip wipe (0.9s, ease-out cubic-bezier(.16, 1, .3, 1)), followed by the name, body, and close fading up 0.4rem in sequence (0.6s each, delays 0.25s, 0.38s, 0.5s). Under reduced motion all of it is off.

### Project ad
Screenshot (16:10, 2px ink frame, press-grey placeholder), title, a fixed set of fact rows (O que faz, Por dentro, Stack) as a key/value list with condensed uppercase keys and hairline separators, a provenance line (bold small text under a 2px rule) stating where the work comes from, then links. Rows align across the three columns through a subgrid.

### Steps
Numbered list in an auto-fit grid (min 11rem). Each step: a 2.75rem black square with a narrow black numeral in paper, a condensed uppercase title, and soft-ink description.

### Contact routes
Inside the black contact module: route columns, each with a condensed uppercase title over a 2px paper rule. Link rows are full-width, 3rem tall, split label (bold) and value (soft, small, right-aligned), divided by hairlines; hover underlines the label and brightens the value. The business route leads with the WhatsApp number in yellow at display scale.

### Inputs / Fields
- **Style:** field-white fill, 2px ink border, square, 3rem tall (textarea min 7.5rem, vertical resize), label above in condensed uppercase 800.
- **Focus:** 3px ink outline at 2px offset; fill goes to pure white.
- **Error:** border turns correction red, thickened by a 1px inset stroke; a bold small red message appears under the field (hidden when empty). Hints are small soft ink.
- **Radio options:** bordered 3rem blocks with an ink accent-colored radio; the checked option fills yellow; focus draws the 3px outline on the whole block.

### Mobile dock
Fixed yellow strip at the bottom on mobile only (3.5rem plus safe area), 4px ink rule on top, "Falar comigo" in condensed uppercase 900. It slides up once the featured ad has scrolled away and hides again at the contact section (0.3s ease-out).

### Focus, selection, scrollbar
Focus is always a 3px solid outline in ink at 3px offset, switched to yellow inside reverse modules. Selection is yellow with ink text. The scrollbar is ink on press grey.

## Do's and Don'ts

### Do:
- **Do** build every module as an ad on the 12-column grid, bounded by shared 2px ink rules.
- **Do** use the four rule weights exactly: 1px hairline in lists, 2px grid, 4px rubric, 6px page.
- **Do** let yellow fill a whole module or a whole control; inside black modules use it for the rubric, display headline, and phone.
- **Do** set names, rubrics, and phone numbers in Archivo narrow 900; titles and controls condensed 800; body at normal width.
- **Do** give each ad one framed action (ink or yellow button) and let the rest be text links.
- **Do** keep project ads on the fixed fact rows plus a provenance line.
- **Do** keep touch targets at 44px or more and disable all motion under reduced motion.

### Don't:
- **Don't** round any corner; radius is 0 everywhere, including inputs and images.
- **Don't** use drop shadows, glows, blur, or lifted cards.
- **Don't** put a small uppercase eyebrow or kicker above a headline; the rubric is the section label.
- **Don't** use yellow as a stripe, tint, highlight, or accent detail on a grey module.
- **Don't** use a cream, beige, or warm off-white ground.
- **Don't** use gradients or a second accent color.
- **Don't** add motion beyond the one-time featured-ad print, the dock slide, and hover color changes.
