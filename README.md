# AI Literacy Month

AI Literacy Month is a polished civic-tech website for a grassroots movement claiming November as AI Literacy Month and November 30 as AI Literacy Day.

## Mission

AI is no longer a future issue. It is a public literacy, workforce, ethics, education, creativity, and civic readiness issue. This project helps colleges, chambers of commerce, cities, schools, libraries, nonprofits, workforce boards, small businesses, and public agencies invite their communities into human-centered AI literacy.

The movement is broader than any single company. November 30 is recognized because the public launch of ChatGPT on November 30, 2022 marked a turning point in public awareness of generative AI.

Following Cybersecurity Awareness Month in October, AI Literacy Month in November creates a natural civic learning sequence. October helps communities focus on risk, safety, and protection. November can help communities move from fear to empowerment: protect yourself, then empower yourself.

## Inspiration

AI Literacy Month began as a grassroots education and workforce initiative inspired by the California Community Colleges AI Fellows Program and the Chancellor's Office focus on human-centered AI grounded in equity, accountability, privacy, transparency, student success, and access. The first imagined scale was California's 116 community colleges and beyond, with campuses able to start small, even with a single event or workshop, and build over time.

The effort is organized by Professor Gary Graves, a tenured business and entrepreneurship professor at Fullerton College and a California Community Colleges Chancellor's Office AI Fellow. Learn more at https://ggraves.faculty.fullcoll.edu/ or https://www.linkedin.com/in/garygraves.

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
https://profgarygraves.github.io/github-AI-Awareness-Month/
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

- `src/data/calendar.js` updates the 30 Days of AI Literacy campaign calendar.
- `src/data/toolkit.js` updates future downloadable toolkit resources.
- `src/data/pillars.js` updates the Five Pillars cards.
- `src/data/humans.js` updates the H.U.M.A.N.S. Principles.
- `src/data/events.js` updates event ideas by audience.

The join form in `src/components/JoinForm.jsx` embeds the AI Literacy Month Google Form and includes a direct link fallback for people who prefer to open the form in a new tab.

## Collecting Feedback

The repository includes a GitHub issue template for structured site feedback. Share the repository link and ask reviewers to open a "Site feedback" issue with comments on the movement message, design, principles, toolkit, proclamation language, or form.

## Credits

AI Literacy Month is an independent grassroots literacy initiative inspired by public education, workforce readiness, and human-centered AI principles.
