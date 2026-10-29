# YCR Mind, second design pass

## What changed

The first pass overemphasized giant typography and used an illustrative Larper slider. The owner's feedback replaces that direction: compact typography, a layered portfolio composition, stronger motion and real product/campaign material.

The home title is capped at 64px, project headings at 36px and the footer name at 40px. Article, archive and topic titles are reduced as well. The original dark/yellow YCR Mind brand remains; the Larper showcase uses its own green identity.

The main interaction is an actual project showcase: switch between two captures of larpr.dev, enlarge the images, view the Larry launch film, browse campaign artwork and filter other projects. There are no simulated generations or model calls on the blog.

## Material

- Two browser captures of the public larpr.dev experience, including its intensity and per-network previews. These are public-site captures, not screenshots of an authenticated editor.
- User-owned Larper campaign assets: "This is Larry", "You did the work", "Same fact, five energies" and "Division of labor".
- The original Larry launch video, optimized to 640×800, seven seconds, muted, about 725KB. Artwork is served as optimized WebP.
- The existing portrait and original project content.

The references were located in the user's Larper marketing materials and Claude artifact library. Private artifact URLs are not published.

## Motion

A layered hero responds to fine-pointer movement and native scroll. Picture reveals open with a mask, text enters vertically and article rows enter horizontally. Tabs transition their contents; project filtering uses native view transitions when supported. Images open in a native dialog, with focus restoration and Escape support. Campaign artwork uses native horizontal scrolling with buttons and keyboard navigation.

Video playback follows visibility, pauses off screen, respects manual pause and does not autoplay under reduced motion or data-saving. Reduced motion also removes pointer/scroll travel and page transitions. Content stays visible if scripts fail. No scroll hijacking or custom cursor is introduced.

## Authoring

Hugo, Markdown, bilingual shortcodes, existing URLs, archive search and the GitHub Pages workflow are retained. Adding a post still needs only a Markdown page bundle.

## Review

Taste Skill's motion and accessibility guidance informed the pass. The previous "name as a monument" sheet is intentionally superseded by the owner's explicit request for smaller names and richer product presentation. The standalone Taste browser inspector is not used; rendered checks use the available in-app browser.

Validation covers production Hugo 0.145.0 output, JavaScript syntax, existing routes and internal files; desktop, tablet and phone layout; media dialogs, keyboard tabs, project filters, campaign navigation, language/theme persistence and video behavior.

Visual critique: the original hierarchy and fake-demo concerns are addressed with modest heading sizes and source material. The remaining limitation is that product captures show the public experience; future authenticated editor captures can be dropped into the same viewer. No customer statistics, usage claims or endorsements were added.

Intentional source-lint exceptions: shadows on the two suspended hero image layers and the real native image dialog. These are recorded inline, rather than removed from the composition. They distinguish floating layers from the page surface; ordinary cards have no shadows.
