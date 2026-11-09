# Setup
1. Unzip and put everything in the root of the vee-kse.github.io repo. Push.
2. Repo Settings > Pages > Source: "Deploy from a branch", branch main, folder /(root).
3. Wait 1 to 2 minutes. Site appears at https://vee-kse.github.io/

# New post
Create `_posts/YYYY-MM-DD-short-title.md`:

    ---
    layout: post
    title: "Your title"
    description: "One sentence summary, shown on the home page."
    tags: [metrics]
    ---
    Your text in markdown.

Tags create filter buttons automatically. Use lowercase, no spaces (ai-risk, ux, metrics).
Posts dated in the future do not show until that date.

# Edit
Site name, email and author: `_config.yml`, `about.md`. Colours: top of `assets/blog.css`.
