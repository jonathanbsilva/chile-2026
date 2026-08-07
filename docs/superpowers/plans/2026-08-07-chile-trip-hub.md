# Chile Trip Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a mobile-first, static Chile 2026 trip hub on GitHub Pages.

**Architecture:** Three static files provide semantic content, responsive styling and minimal progressive enhancement. GitHub Actions deploys the repository root to Pages; browser localStorage stores only the casual gate and checklist state.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js standard library assertion check, GitHub Actions.

## Global Constraints

- Public GitHub repository `jonathanbsilva/chile-2026`; no sensitive data, private links or reservation codes.
- Casual password gate is not security and must say so in the README.
- No dependencies, frameworks or build step.
- Semantic HTML, keyboard-accessible controls and responsive layout at 320px, 768px, 1024px and desktop.
- Keep the known costs and Maria's shared-cost split accurate: R$ 17.861,92 total known; R$ 1.847,84 known pending.

---

### Task 1: Static travel hub

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `app.js`
- Create: `README.md`

**Interfaces:**
- `app.js` consumes elements `#access-form`, `#access-password`, `#app`, `#countdown`, and inputs `[data-checklist-item]` from `index.html`.
- `app.js` stores `chile-2026-access` and `chile-2026-checklist` in `localStorage`.
- `styles.css` consumes semantic section classes from `index.html` only.

- [ ] **Step 1: Write the failing content check**

Create `verify.mjs` with assertions for the required known-cost strings, trip dates, no forbidden sensitive patterns and the JavaScript behavior hooks.

- [ ] **Step 2: Run the check to verify it fails**

Run: `node verify.mjs`

Expected: failure because `index.html` and `app.js` do not exist.

- [ ] **Step 3: Implement minimal static page**

Create `index.html` with a password-gate form plus semantic sections for summary, daily itinerary, reservations, shared costs, checklist and local references. Create `styles.css` for mobile-first layout, visible focus states and responsive tables. Create `app.js` with a local-only gate, departure countdown and checklist persistence. Create `README.md` with privacy and Pages instructions.

- [ ] **Step 4: Run the content check**

Run: `node verify.mjs`

Expected: `verify: passed`.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css app.js README.md verify.mjs
git commit -m "feat: add Chile trip hub"
```

### Task 2: GitHub Pages deployment

**Files:**
- Create: `.github/workflows/pages.yml`

**Interfaces:**
- Workflow triggers on pushes to `main` and deploys the repository root using `actions/upload-pages-artifact` and `actions/deploy-pages`.

- [ ] **Step 1: Write the failing deployment configuration check**

Extend `verify.mjs` to assert that the workflow uses `actions/configure-pages`, `actions/upload-pages-artifact` and `actions/deploy-pages`.

- [ ] **Step 2: Run the check to verify it fails**

Run: `node verify.mjs`

Expected: failure because `.github/workflows/pages.yml` does not exist.

- [ ] **Step 3: Create the workflow**

Create a single `pages.yml` workflow that builds nothing, uploads repository root as the Pages artifact, and deploys on `main`.

- [ ] **Step 4: Run checks**

Run: `node verify.mjs && git diff --check`

Expected: `verify: passed` and exit code 0.

- [ ] **Step 5: Commit**

```bash
git add .github/workflows/pages.yml verify.mjs
git commit -m "ci: deploy Chile hub to GitHub Pages"
```

### Task 3: Publish and validate

**Files:**
- Modify: repository settings through GitHub API/CLI to enable GitHub Pages from GitHub Actions.

**Interfaces:**
- GitHub Pages deployment URL: `https://jonathanbsilva.github.io/chile-2026/`.

- [ ] **Step 1: Create public repository and push main**

Run:

```bash
gh repo create jonathanbsilva/chile-2026 --public --source . --remote origin --push
```

- [ ] **Step 2: Enable Pages workflow source**

Run:

```bash
gh api --method POST repos/jonathanbsilva/chile-2026/pages -f build_type=workflow
```

- [ ] **Step 3: Verify remote and deploy workflow**

Run:

```bash
git ls-remote origin HEAD
gh run list --repo jonathanbsilva/chile-2026 --limit 5
gh run watch --repo jonathanbsilva/chile-2026 <RUN_ID> --exit-status
curl --fail --silent --show-error --location https://jonathanbsilva.github.io/chile-2026/ > /tmp/chile-2026-page.html
```

Expected: successful workflow and HTTP 200 page response containing `Chile`.

- [ ] **Step 4: Verify responsive behavior in a browser**

Open the final URL at mobile and desktop widths; verify no horizontal overflow, labels and checklist controls work, and console has no errors.

- [ ] **Step 5: Record result**

Commit any required deployment-only correction; otherwise leave the two implementation commits intact.
