Screenshots for the MonOSS carousel live here. To add more (e.g. one
per app — Mora, Monastery, Momentum, Monolith, Motion):

1. Drop the cropped image file in this folder.
2. In `src/components/FeaturedProject.jsx`, import it and add an entry
   to the `screenshots` array: `{ src, alt, caption }`.

The carousel (`src/components/Carousel.jsx`) and lightbox handle any
number of slides automatically — no other changes needed.
