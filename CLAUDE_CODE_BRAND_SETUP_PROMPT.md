# MASTER CLAUDE CODE PROMPT — THE DRAPER BRAND SYSTEM SETUP

You are working on the THE DRAPER website repository.

Your task is to establish a clean, maintainable brand asset and documentation system without changing the visual design of the website unless explicitly instructed.

## 1. Read the supplied brand system first

Before making any changes, inspect these files:

- `docs/brand/the-draper-brand-guidelines.md`
- `docs/brand/the-draper-advisor.md`
- `docs/brand/brand-assets.md`
- `prompts/character/the-draper-advisor-base-prompt.md`

Also inspect the supplied master assets in:

- `public/brand/logo/`
- `public/brand/character/`

Treat these as canonical brand references.

## 2. Preserve the canonical assets

Do not overwrite, rename, crop, recolour, redraw, simplify or replace the following without explicit approval:

- `public/brand/character/the-draper-advisor-master-reference-v1.jpg`
- `public/brand/logo/the-draper-monogram-master.jpg`
- `public/brand/logo/the-draper-primary-logo-master.png`

These are source-of-truth references.

## 3. Create a clean brand asset architecture

If the folders do not already exist, maintain this structure:

```text
public/
  brand/
    logo/
    character/
    photography/

docs/
  brand/

prompts/
  character/
```

Use lowercase kebab-case filenames.

## 4. Logo handling

The THE DRAPER identity consists of:

- D + flowing fabric monogram
- THE DRAPER wordmark
- YOUR HOME. YOUR STYLE. OUR EXPERTISE. tagline

Do not invent an alternative logo.

If the website needs SVG logo assets and an accurate vector version is not already present, inspect the supplied master artwork and create a faithful vector derivative only if you can preserve the exact design. Do not substitute a generic serif D, generic curtain icon or AI-generated approximation.

If accurate vectorisation is not possible, retain the master raster asset and clearly document that an official vector master is still required. Do not fabricate a false “final SVG.”

## 5. Website usage

Use the canonical logo assets wherever the current website uses THE DRAPER branding.

Do not embed a recreated text version of the logo if an approved logo asset exists.

For live website typography, use:

- Cormorant Garamond for major editorial headings
- Manrope for navigation, body, buttons, labels and functional text

Do not introduce additional primary typefaces without explicit approval.

## 6. Advisor character

The canonical advisor is defined by:

- `the-draper-advisor-master-reference-v1.jpg`
- `the-draper-advisor.md`

Never create an alternative interpretation of the character in website copy, image prompts or generated assets.

Signature uniform:

- Deep Olive polo #45483A
- Light warm khaki trousers
- White minimalist sneakers
- Cognac leather watch with steel case
- D/fabric monogram on left chest when visible
- Clean back for the hero advisor

## 7. AI image workflow documentation

Maintain the distinction:

REFERENCE = WHO THE ADVISOR IS
SCENE PROMPT = WHAT THE ADVISOR IS DOING

When adding future scene prompts, reference the master advisor image rather than writing a new character description that could cause identity drift.

## 8. Do not redesign the site

This task is about establishing the brand system and making existing brand references accessible to the website codebase.

Do not redesign the homepage, alter layout, rewrite marketing copy, change navigation, or introduce new UI patterns unless explicitly requested.

## 9. Validate paths

After setup, confirm that:

- all referenced files exist
- filenames match the documentation
- no broken image references were introduced
- existing website build remains functional

## 10. Final report

After completing the setup, report:

1. Files created
2. Files moved/copied
3. Existing files reused
4. Any logo/vector limitation
5. Any website files changed
6. Build/test result

Do not make additional creative brand decisions beyond the rules in the supplied brand documents.
