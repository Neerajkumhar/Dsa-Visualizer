# Dsa-Visualizer


https://neerajkumhar.github.io/Dsa-Visualizer/


DSA Virtual Lab is a single-page HTML project developed as a college assignment to provide an interactive, browser-based environment for learning and visualizing Data Structures & Algorithms. It simulates a compact lab where students can experiment with common data structures (arrays, stacks, queues, linked lists, trees, graphs) and visualize algorithm steps (sorting, searching, traversals) using clear, animated demonstrations.

This repository contains a static DSA visualizer site (HTML, CSS, JS). The project contains the site structure in the workspace root and the `Css/`, `Js/`, `Html/`, and `Img/` folders.

What's included:
- HTML files (root and `Html/`)
- CSS files in `Css/`
- JS files in `Js/`
- Images in `Img/`

Quick steps to upload to GitHub (PowerShell-friendly):

1) Initialize a local git repository and push to a new GitHub repo:

# Initialize git, commit, add remote and push (replace <OWNER>/<REPO> with your GitHub repo)
# Run these lines in PowerShell from the project root (each line can be run separately):

git init
git add .
git commit -m "Initial commit"
git branch -M main
# Create a new remote repo on GitHub (via web UI) and then add the remote:
# git remote add origin https://github.com/<OWNER>/<REPO>.git
git push -u origin main

2) Serve locally for testing

# If you have Python installed (recommended), run:
python -m http.server 8000
# Then open http://localhost:8000 in your browser and test the pages.

3) Optional: Enable GitHub Pages

- Option A (manual): In the repository Settings -> Pages, set the source to branch `gh-pages` or `main` (root), then save. If you choose `gh-pages`, use a deploy workflow or push to that branch.

- Option B (auto-deploy): This repo includes a sample GitHub Actions workflow that will publish the repository root to GitHub Pages using the `gh-pages` branch when you push to `main`.

Notes & verification
- Confirm the HTML files reference CSS/JS using the relative paths `Css/` and `Js/` (the existing project structure uses those folders). If links are broken, open `index.html` and check the `<link>` and `<script>` tags for correct paths.
- If you use a dependency manager (npm), add a `package.json` as needed. This project is static so it's not required.

If you want, I can:
- Double-check that all HTML files reference the CSS/JS correctly and fix any broken relative paths.
- Add a small CI workflow to validate HTML/JS linting before push.

