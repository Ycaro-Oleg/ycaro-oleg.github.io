# YCR Mind redesign

## Direction

Taste Skill v2, "The name as a monument", seed 441554779.
Cabinet Grotesk is self-hosted. Ground, ink and yellow accent retain the existing brand.
The brief's artifacts: YCR Mind, Ycaro's portrait, bilingual Markdown, GolfVille brainstorming, a one-day POC, Larper's tone control, Railway setback, Hetzner/Coolify, Omarchy Tetris and the existing archive.

Idea: YCR Mind becomes the large opening and closing of a personal record of building products. The live interaction retells the same GolfVille experience at three intensities. It is explicitly an illustrative example, with no model call or submitted visitor data.

The drawn work, list, about and contact blueprints assumed a gallery with multiple images, an event program and several people. Adapted their composition to one featured app, a real four-post archive and a single author. No stock photography was added to inflate image counts. The portrait remains the user's original asset; the Tetris piece is CSS artwork. This deliberately falls short of the skill's four-photograph floor.

No long pinned scroll scenes or scroll hijacking: reading and navigation remain native. The name marquee pauses on hover; reduced motion removes animation and smooth scrolling. Entrances never depend on hidden content waiting for a successful observer.

## Validation

- Hugo production build and JavaScript syntax check.
- Taste Skill source lint: zero failures and zero warnings for the home template, stylesheet and application script.
- Browser review at desktop, tablet and phone widths (1440, 768, 390).
- EN/PT persistence between pages and article language switches.
- Larper slider with keyboard input.
- Archive matching, empty results, reset and accent-insensitive Portuguese queries.
- Mobile menu, light/dark themes, article contents and reading progress.
- Existing article routes, topics, RSS and résumé retained.

The standalone Taste inspect.mjs browser runner was not used; browser review used the available in-app browser. Do not interpret source lint as a passing automated visual inspector.

## Visual critique

ROUND 1
Seen in one second: YCR Mind.
Idea: The name frames a personal record, with the actual Larper origin story as the live interaction.
Live thing: Change the intensity of the same GolfVille story.
Layout words by section: hero=monument / work=feature-and-index / writing=list / about=portrait / footer=marquee.
Scores: design 6.5 · usability 8 · creativity 7 · content 8 → overall 7.2.
Caps applied: fewer than four real photographs; original long post titles retained.
Top three problems and fixes:
1. Cached pre-redesign CSS appeared on the first reload. Added content-hash cache keys to CSS and JS.
2. Original résumé rules retained outlined panels. Removed those rules and aligned surfaces with the journal.
3. Original language logic was duplicated between the header and article shortcodes. Replaced it with one shared controller so title, contents, text and reading time stay synchronized.

The remaining visual limitation is project imagery: Larper uses a deliberately labeled illustrative interaction and Omarchy Tetris uses a code-drawn title panel. Future real product captures could replace these without changing content publishing.
