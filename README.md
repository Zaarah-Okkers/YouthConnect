# YouthConnect

YouthConnect is a lightweight, front-end web project that helps young people discover local events, resources, and peer groups. It’s built with plain HTML, CSS, and JavaScript so it’s easy to run, modify, and extend.

## Features

- Browse curated local events and workshops
- Search and filter resources by category
- Responsive, mobile-first design
- Easy to customize styles and content

## Tech stack

- HTML
- CSS (responsive layout and components)
- JavaScript (interactive UI and filtering)

## Getting started

No build step is required — YouthConnect is a static front-end project. To run locally:

1. Clone the repository:

   git clone https://github.com/Zaarah-Okkers/YouthConnect.git

2. Open `index.html` in your browser, or serve the folder with a simple static server. For example with Python 3:

   python -m http.server 8000

   Then open http://localhost:8000 in your browser.

## Project structure

- index.html — main entry point
- /css — stylesheets
- /js — JavaScript files
- /assets — images and static assets

(If your project layout differs, update these paths to match your repository.)

## Customization

- Update styles in `css/` to change the look and feel.
- Edit HTML templates or add new pages in the project root.
- Enhance interactivity by editing or adding scripts in `js/`.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes and push the branch.
4. Open a pull request describing your changes.

Please include clear commit messages and a description for any PRs.

## License

This project is licensed under the MIT License. See `LICENSE` for details (create one if missing).

## Contact

Maintainer: Zaarah Okkers — https://github.com/Zaarah-Okkers

If you want a different README style or additional sections (screenshots, demo link, API docs), tell me what to include and I’ll update it.

---

## Who did what

- Zaarah Okkers (Project lead) — overall project design, HTML/CSS layout, JavaScript for filtering and interactivity, documentation, and repository maintenance.
- Contributors — If others contribute, add their name, GitHub handle, and a short bullet list of what they implemented (example below):
  - Jane Developer (@janedev) — added event filtering by date and category.
  - Alex Designer (@alexd) — improved responsive layout and provided illustrations.

To add yourself to this list, open a pull request that updates this section with your name and a short description of your contribution.

## Why (project motivation)

YouthConnect was created to make it easier for young people to find local opportunities — events, workshops, volunteer roles, and peer groups — without needing to wade through large, general-purpose platforms. The goals are:

- Reduce friction for discovering local, youth-oriented activities.
- Provide a simple, accessible interface that works on low-powered devices and mobile browsers.
- Offer an easy-to-extend codebase so community members and organizers can contribute content and features.

## How (implementation details & development workflow)

Architecture and data

- YouthConnect is a static front-end site. Content can be embedded directly in HTML, loaded from a local JSON file, or fetched from a small API if you integrate one.
- Layout is mobile-first using CSS for responsiveness. JavaScript is used for UI interactions (search, filter, and dynamic rendering).

Development workflow

1. Edit or add HTML files for new pages.
2. Place shared styles in `css/` and scripts in `js/`.
3. If you add data as JSON, put it in `assets/data/` (create the folder if it doesn't exist) and fetch it from `js/`.
4. Test locally by opening `index.html` or serving the directory with a static server.

Suggested improvements and how to implement them

- Add persistent data storage: integrate a small backend (Firebase, Supabase, or a simple REST API) and switch the data loading code to request remote JSON.
- Accessibility improvements: ensure semantic HTML, ARIA roles where appropriate, and keyboard navigation for interactive components.
- Unit/UI tests: add basic tests using a headless browser or a testing library (Jest + jsdom for logic; Playwright or Cypress for end-to-end UI checks).

If you'd like, I can:
- Add a CONTRIBUTORS.md with a template for contributions.
- Create a simple JSON data example and update the code to load it.
- Add an MIT LICENSE file for you.

Tell me which of those to add next and I’ll make the changes.