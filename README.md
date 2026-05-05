# AI Awareness Month

AI Awareness Month is a polished civic-tech website for a grassroots movement claiming November as AI Awareness Month and November 30 as AI Awareness Day.

## Mission

AI is no longer a future issue. It is a public literacy, workforce, ethics, education, creativity, and civic readiness issue. This project helps colleges, chambers of commerce, cities, schools, libraries, nonprofits, workforce boards, small businesses, and public agencies invite their communities into human-centered AI awareness.

The movement is broader than any single company. November 30 is recognized because the public launch of ChatGPT on November 30, 2022 marked a turning point in public awareness of generative AI.

## Inspiration

AI Awareness Month began as a grassroots education and workforce initiative inspired by the California Community Colleges AI Fellows Program and the Chancellor's Office focus on human-centered AI grounded in equity, accountability, privacy, transparency, student success, and access.

## Local Install

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173/`.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This site is configured for a GitHub Pages project site at:

```text
https://garygraves.github.io/github-AI-Awareness-Month/
```

The Vite `base` path is set in `vite.config.js`:

```js
base: '/github-AI-Awareness-Month/'
```

To publish with the included `gh-pages` package:

```bash
npm run deploy
```

You can also deploy through GitHub Actions or GitHub Pages by publishing the generated `dist` folder.

## Updating Content

Most repeatable content lives in `src/data`:

- `src/data/calendar.js` updates the 30 Days of AI Awareness campaign calendar.
- `src/data/toolkit.js` updates future downloadable toolkit resources.
- `src/data/pillars.js` updates the Five Pillars cards.
- `src/data/humans.js` updates the H.U.M.A.N.S. Principles.
- `src/data/events.js` updates event ideas by audience.

The join form in `src/components/JoinForm.jsx` is a static placeholder. Replace it with a Tally, Google Form, Formspree, or other embed when signup collection is ready.

## Credits

AI Awareness Month is an independent grassroots awareness initiative inspired by public education, workforce readiness, and human-centered AI principles.
