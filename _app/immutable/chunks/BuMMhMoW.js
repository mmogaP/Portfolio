const d=`---
title: "Publishing from Obsidian to My Portfolio: A Zero-Friction Pipeline"
excerpt: "How I connected my Obsidian vault to my personal site so that writing a post and pushing to GitHub is all it takes to publish — no CMS, no admin panel, just markdown."
date: 2026-05-19
tags: [Obsidian, GitHub Actions, SvelteKit]
readTime: 5 min
featured: false
---

I've been using Obsidian as my second brain for a while — notes, ideas, drafts, daily logs. The problem was that publishing anything from it to my portfolio felt like a separate job. Copy the file, format it, paste it somewhere, deploy. Too many steps, so I never did it.

So I built a pipeline that removes all of that friction. Here's how it works and how you can do the same.

## The idea

Two GitHub repositories:

- **Vaulty** — my Obsidian vault, with a folder called \`01 - Blog/Publicados/\` for posts ready to publish
- **Portfolio** — my SvelteKit site at mmoraga.dev

When I push a new \`.md\` file to \`Publicados/\`, a GitHub Actions workflow in Vaulty notifies the Portfolio repo, which then fetches the posts and rebuilds the site automatically.

Write → push → live. That's it.

---

## Step 1: Set up the Portfolio to read markdown files

The portfolio uses **SvelteKit** with a small utility that reads all \`.md\` files from \`src/content/blog/\` at build time.

Each post needs a frontmatter block at the top:

\`\`\`markdown
---
title: "Your Post Title"
excerpt: "A short description"
date: 2026-05-19
tags: [tag1, tag2]
readTime: 5 min
featured: false
---

Your content here...
\`\`\`

The \`featured: true\` flag makes a post appear as the highlighted entry on the homepage.

> Important: if your title contains \`:\` or \`%\`, wrap it in quotes or YAML will break.

---

## Step 2: Create a GitHub Actions workflow in the Portfolio

In \`.github/workflows/deploy.yml\`, add a \`repository_dispatch\` trigger so the Portfolio can be woken up by external repos:

\`\`\`yaml
on:
  push:
    branches: [main]
  repository_dispatch:
    types: [sync-blog]
\`\`\`

Then, before the build step, clone your vault and copy the published posts:

\`\`\`yaml
- name: Sync blog posts from Vaulty
  run: |
    git clone https://\${{ secrets.GH_PAT }}@github.com/youruser/Vaulty.git /tmp/vaulty
    mkdir -p src/content/blog
    cp "/tmp/vaulty/01 - Blog/Publicados/"*.md src/content/blog/ 2>/dev/null || true
\`\`\`

The \`GH_PAT\` is a GitHub Personal Access Token stored as a repository secret.

---

## Step 3: Create a workflow in Vaulty to notify the Portfolio

In \`.github/workflows/notify-portfolio.yml\`:

\`\`\`yaml
name: Notify Portfolio

on:
  push:
    branches: [main]
    paths:
      - '01 - Blog/Publicados/**'

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Portfolio deploy
        run: |
          curl -s -X POST \\
            -H "Authorization: token \${{ secrets.GH_PAT }}" \\
            -H "Accept: application/vnd.github.v3+json" \\
            https://api.github.com/repos/youruser/Portfolio/dispatches \\
            -d '{"event_type":"sync-blog"}'
\`\`\`

This only fires when something changes inside \`Publicados/\`, so pushing other vault changes won't trigger a deploy.

---

## Step 4: Create a Personal Access Token

Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic).

Create a token with two scopes:

- \`repo\` — to clone private repositories
- \`workflow\` — to trigger Actions across repos

Add this token as a secret called \`GH_PAT\` in both repos.

---

## The full flow

\`\`\`
Write in Obsidian
       ↓
Save .md to 01 - Blog/Publicados/
       ↓
git push Vaulty
       ↓
GitHub Actions (Vaulty) → notify Portfolio
       ↓
GitHub Actions (Portfolio) → clone Vaulty, copy posts, build, deploy
       ↓
mmoraga.dev updates automatically
\`\`\`

No CMS. No dashboard. No extra tools. Just markdown and git.

---

## Why I'm doing this

Honestly, this started as a practical problem: I wanted to write more but publishing felt like work. The fewer steps between thought and published post, the more likely I am to actually do it.

But there's a bigger picture here. I'm trying to use Obsidian as the single place where I organize what I'm learning, what I'm building, and what I'm thinking about. Daily logs, project notes, random ideas — it all goes in there. Having the blog connected to it means that turning a note into a post is just moving a file into a folder.

I'm still setting this up and figuring out my own system, but the goal is to document what I'm actually doing as I do it — projects at work, side experiments, things I figure out the hard way. Less portfolio, more honest log of someone who builds things and is constantly learning.

This post is the first one written and published entirely through that pipeline.
`;function h(n){const e=n.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);if(!e)return{data:{},content:n};const i=e[1],a=n.slice(e[0].length),o={};for(const r of i.split(`
`)){const l=r.indexOf(":");if(l===-1)continue;const s=r.slice(0,l).trim();let t=r.slice(l+1).trim();t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'")?o[s]=t.slice(1,-1):t.startsWith("[")&&t.endsWith("]")?o[s]=t.slice(1,-1).split(",").map(c=>c.trim().replace(/^['"]|['"]$/g,"")):t==="true"?o[s]=!0:t==="false"?o[s]=!1:t!==""&&!isNaN(Number(t))?o[s]=Number(t):o[s]=t}return{data:o,content:a}}const u=Object.assign({"/src/content/blog/obsidian-to-portfolio-pipeline.md":d});function p(){return Object.entries(u).map(([n,e])=>{const i=n.split("/").at(-1).replace(".md",""),{data:a}=h(e);return{...a,slug:i}}).sort((n,e)=>new Date(e.date).getTime()-new Date(n.date).getTime())}function m(n){const e=`/src/content/blog/${n}.md`,i=u[e];if(!i)return null;const{data:a,content:o}=h(i);return{meta:{...a,slug:n},content:o}}export{m as a,p as g};
