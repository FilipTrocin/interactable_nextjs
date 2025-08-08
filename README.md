# Interactable

[![Next.js](https://img.shields.io/badge/Next.js-13.4-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-149eca?logo=react)](https://react.dev/)
[![Yarn](https://img.shields.io/badge/Yarn-berry-2c8ebb?logo=yarn)](https://yarnpkg.com/)

An educational platform that teaches Data Science through interactive visualisations and mini‑games. This repository contains the front‑end web application built with Next.js, embedding Observable notebooks.

## Table of contents
- [Project name](#interactable)
- [Project description](#project-description)
- [Tech stack](#tech-stack)
- [Getting started locally](#getting-started-locally)
- [Available scripts](#available-scripts)
- [Project scope](#project-scope)
- [Project status](#project-status)
- [License](#license)

## Project description
Interactable aims to make core Data Science concepts accessible to everyone by prioritising understanding over rote mastery. The platform presents techniques as interactive notebooks and mini‑games to promote active learning.

- Motivation: Data Science impacts many domains, yet its methods often appear opaque. Active learning has been shown to improve outcomes in STEM education.
- Differentiation: Interactivity, real‑life examples, and approachable explanations.


Comparable initiatives: Kaggle (community‑focused), Elements of AI (introductory but less interactive), LearningML (research/teaching oriented).

## Tech stack
- This repository
  - Next.js 13.4 (App Router)
  - React 18
  - AOS (Animate On Scroll) for UI animation
  - Observable notebooks embedded via iframes
  - Local assets served from `public/` (icons, images, fonts)

- Broader project vision (not all implemented here)
  - Observable Runtime, D3.js
  - Python FastAPI back‑end
  - Google App Engine (hosting), Google Cloud Build (CI/CD)
  - Pytest for automated tests

See also:
- `components/info_panel/README.md` for how to structure the informational panels at the top of each article.
- `public/fonts/README.md` for local fonts usage.

## Getting started locally
- Prerequisites
  - Node.js ≥ 16.8
  - Yarn

- Installation
  ```bash
  yarn install
  ```

- Run the development server
  ```bash
  yarn dev
  ```
  Open `http://localhost:3000` in your browser.

- Production build and start
  ```bash
  yarn build
  yarn start
  ```

- Project structure highlights
  - `app/` — Next.js App Router pages
    - `page.js` — Home page with links to articles
    - `pages/article/decision_trees/page.js` — Decision Trees article (Observable embed)
    - `pages/article/k_nearest_neighbours/page.js` — KNN article (Observable embed)
  - `components/`
    - `Card.tsx` — Card component used on the home page
    - `info_panel/*.js` — Per‑article testimonial content consumed by article pages
  - `public/` — Static assets (images, icons, fonts)

- Adding a new article (front‑end)
  1. Create a new directory under `app/pages/article/<your_article>/` with a `page.js` that follows the existing article pattern.
  2. Add a corresponding `components/info_panel/<your_article>.js` exporting a `testimonials` array (see the examples for required shape).
  3. Add any images/icons to `public/images` or `public/icons` and reference them in your `testimonials`.
  4. Add a new `Card` to `app/page.js` linking to your article route.

## Available scripts
- `yarn dev`: Start the Next.js development server with hot reload.
- `yarn build`: Build the production bundle.
- `yarn start`: Start the production server (after `yarn build`).
- `yarn lint`: Run Next.js linting.

## Project scope
- Aims
  - Develop an educational platform for teaching Data Science to learners from diverse backgrounds without prior DS experience.

- Planned/ideas
  - Additional notebooks (e.g., Random Forest, Bayes’ Theorem).
  - Enhanced mini‑games with more levels and features.

- Non‑goals in this repository
  - Back‑end (FastAPI), cloud infrastructure, and CICD are part of the broader project vision and are not implemented in this codebase.

## Project status
- Version: 0.1.0
- Active development
- Known TODOs
  - Initialise and configure AOS animations on the client.
  - Abstract common article layout into a reusable template.

## License
MIT License