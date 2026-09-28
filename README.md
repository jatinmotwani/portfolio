# portfolio

Personal developer portfolio for Jatin Motwani — Vue 3 + Tailwind CSS, deployed to GitHub Pages.

## Editing content

All content lives in [`src/data/portfolio.js`](src/data/portfolio.js): profile, stats, experience, skills,
education, projects and blog posts. Components read from it, so updating the site is a data change.

- **Projects** — add an object to the `projects` array (`title`, `description`, `tags`, `githubUrl`, `demoUrl`).
  While the array is empty the section shows a "coming soon" terminal instead of cards.
- **Blog posts** — add an object to the `blogs` array (`title`, `date`, `readingTime`, `description`, `url`).
- **Resume button** — put a PDF in `public/` (e.g. `public/resume.pdf`) and set `profile.resumeUrl = 'resume.pdf'`.

The illustrated avatar is hand-drawn SVG in [`src/components/DevAvatar.vue`](src/components/DevAvatar.vue):
its eyes follow the cursor, it blinks, and clicking it toggles sunglasses.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Deploys `dist/` to GitHub Pages
```
npm run build && npm run deploy
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
