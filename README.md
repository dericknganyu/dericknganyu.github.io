# Derick Nganyu Tanyu — Personal Website

A clean, polished personal academic-professional website built with plain HTML/CSS/JavaScript, ready for GitHub Pages deployment.

## Quick Start

Open `index.html` in any browser — no build step, no server required.

---

## GitHub Pages Deployment

### Option A: User/Organization Page (recommended)

This gives you a clean URL: `https://your-username.github.io`

1. Create a repository named exactly **`your-username.github.io`** on GitHub
2. Push all files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```
3. GitHub Pages is automatically enabled for this repository type
4. Your site will be live at `https://your-username.github.io` within a minute or two

### Option B: Project Page

This gives you a URL like: `https://your-username.github.io/Demo-website`

1. Create any repository on GitHub (e.g., `Demo-website`)
2. Push all files to `main`
3. Go to **Settings → Pages → Source → main branch / root**
4. Update the `og:url` and `canonical` in `index.html` to include the subfolder path

---

## Personalizing Your Site

### 1. Required Updates (do these first)

**In `index.html` — search for `UPDATE` comments:**

| What | Where | Change to |
|------|-------|-----------|
| Email address | `href="mailto:your.email@example.com"` | Your actual email |
| LinkedIn URL | `href="https://linkedin.com/in/[YOUR_LINKEDIN]"` | Your LinkedIn profile URL |
| GitHub username | `href="https://github.com/[YOUR_GITHUB_USERNAME]"` | Your GitHub username |
| Google Scholar | `href="https://scholar.google.com/citations?user=[YOUR_SCHOLAR_ID]"` | Your Scholar profile URL |
| OG/canonical URLs | `[YOUR_GITHUB_USERNAME]` (3 places in `<head>`) | Your GitHub username |
| CV last updated | `Last updated: [Month Year]` | Current month/year |

**Files to add:**

| File | Description |
|------|-------------|
| `assets/images/avatar.jpg` | Your profile photo (WebP or JPEG, 400×400px recommended) |
| `assets/pdf/cv.pdf` | Your CV as a PDF file |

After adding your photo, in `index.html` replace the photo placeholder block:
```html
<!-- Replace this entire div -->
<div class="about__photo-placeholder" ...>...</div>

<!-- With this -->
<img src="assets/images/avatar.jpg" alt="Derick Nganyu Tanyu" class="about__photo" />
```

### 2. Update Dynamic Content

All publications, talks, and projects are in one file: **`assets/js/data.js`**

- Open `data.js` in any text editor
- Find the `[PLACEHOLDER]` entries and replace them with your real data
- Follow the existing data structure — each item is a JavaScript object
- Add or remove items freely; the page updates automatically

**Adding a publication:**
```js
{
  title: "Your Paper Title",
  authors: "Tanyu, D. N., Collaborator, A., ...",
  venue: "Journal of Computational Physics",
  year: 2024,
  doi: "https://doi.org/10.1016/j.jcp.2024.xxxxx",  // or null
  arxiv: "https://arxiv.org/abs/2401.xxxxx",          // or null
  type: "journal"  // "journal" | "conference" | "preprint"
}
```

**Adding a project:**
```js
{
  title: "Project Title",
  description: "One to two sentence description of the project.",
  tags: ["Tag1", "Tag2", "Python"],
  links: {
    github: "https://github.com/you/repo",  // or null
    paper:  "https://arxiv.org/abs/...",     // or null
    demo:   null
  }
}
```

### 3. Update Experience & Education

Experience and education entries are **static HTML** in `index.html`. Search for the relevant section headings (`id="experience"`, `id="education"`) and edit the text directly. These sections rarely change, so static HTML is easier to maintain than data files.

### 4. Choose Your Homepage Headline

Three options are suggested in the hero section. The current default is:

> *"Bridging scientific machine learning, applied mathematics, and AI to solve complex real-world problems."*

Other options:
1. **"Scientific Machine Learning and Applied AI for Complex Systems"**
2. **"AI, Mathematics, and Engineering — From Theory to Real-World Impact"**

Edit the `.hero__tagline` paragraph in `index.html`.

### 5. Customize Colors & Fonts

All design tokens are CSS custom properties at the top of `assets/css/main.css`:

```css
:root {
  --color-accent: #4f46e5;  /* Change this for a different primary color */
  --font-serif: 'Playfair Display', Georgia, serif;  /* Heading font */
  --font-sans: 'Inter', system-ui, sans-serif;       /* Body font */
}
```

For dark mode, update the overrides in `[data-theme="dark"]` block below.

---

## File Structure

```
Demo-website/
├── index.html              # Complete single-page site — edit content here
├── assets/
│   ├── css/
│   │   └── main.css        # All styles — edit design tokens at the top
│   ├── js/
│   │   ├── data.js         # ← UPDATE THIS for publications, projects, talks
│   │   ├── theme.js        # Dark mode (runs before paint — don't defer this)
│   │   └── main.js         # Nav, scroll-spy, rendering logic
│   ├── images/
│   │   └── avatar.jpg      # ← ADD YOUR PHOTO HERE
│   └── pdf/
│       └── cv.pdf          # ← ADD YOUR CV HERE
└── README.md
```

---

## Features

- **Dark mode** — persists across visits, respects OS preference, no flash on load
- **Sticky navigation** with active-section highlighting (IntersectionObserver)
- **Mobile responsive** — hamburger menu at ≤768px
- **Smooth scrolling** — native CSS `scroll-behavior: smooth`
- **Data-driven content** — update `data.js` to change projects/publications/talks
- **SEO ready** — meta, Open Graph, Twitter Card, canonical
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- **Fast** — no frameworks, no runtime dependencies, Google Fonts with `display=swap`

---

## Optional Enhancements

### Add a Contact Form (no backend needed)

Sign up for [Formspree](https://formspree.io) (free tier available), then add a form to the contact section in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
  <input type="email" name="email" placeholder="Your email" required />
  <textarea name="message" placeholder="Your message" rows="4" required></textarea>
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

### Add Google Analytics

Add just before `</head>` in `index.html`:
```html
<!-- Replace G-XXXXXXXXXX with your Measurement ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add a Blog / News section

Create a `blog/` folder with individual HTML pages, linking from the main nav. Alternatively, use a simple JavaScript array in `data.js` to render recent news items.

---

## Troubleshooting

**CV download shows 404:** Add your CV PDF at `assets/pdf/cv.pdf`.

**Profile photo not showing:** Check file path. The `<img>` tag expects `assets/images/avatar.jpg` (relative to `index.html`).

**Dark mode not working:** Make sure `assets/js/theme.js` is loaded as a `<script>` in `<head>` without `defer` or `async` attributes.

**Nav links not highlighting:** The scroll-spy uses `IntersectionObserver`. This requires a server context (won't work with `file://` on some browsers). Push to GitHub Pages or use a local server: `python3 -m http.server 8000`.

**Project page vs user page URL mismatch:** If deployed as a project page (not `username.github.io`), update the `og:url` and `canonical` meta tags in `<head>` to include the repository subfolder in the path.

---

## License

This site template is provided for personal use. Adapt freely for your own academic or professional website.
