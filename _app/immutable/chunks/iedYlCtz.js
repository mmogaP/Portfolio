const u=`---
title: "From Software Engineer to Data Engineer: What Actually Changes"
excerpt: "I spent years building APIs, frontends, and mobile apps. Now I write dbt models and build AI agents for a bank. Here's what surprised me about the switch."
date: 2026-05-19
tags: [dbt, GCP, Python]
readTime: 4 min
featured: false
---

I didn't plan to become a data engineer. After years of building full-stack apps — frontends in Svelte, backends in Node.js, mobile apps in React Native — I joined Deloitte and landed on a data engineering project at a large bank.

Six months in, here's what actually changed and what didn't.

## What I thought would be different

I expected data engineering to feel like a completely separate discipline. Different tools, different mindset, different everything.

It's not that different. You're still writing code, still thinking about modularity and testing, still dealing with APIs and infrastructure. The problems are similar — it's mostly the data that's new.

## What actually changed

**SQL is back, and it matters.**

I haven't written this much SQL since university. With dbt, SQL becomes the primary language for transforming data — but it's SQL with version control, dependency graphs, testing, and documentation. It starts feeling less like a query language and more like a real engineering tool.

**The feedback loop is slower.**

In web development, you save a file and see the result in milliseconds. In data engineering, you run a model, wait for the job to finish, query the output, and realize something upstream was wrong. You learn to think more before running.

**Data quality is the hard part.**

Building the pipeline is the easy part. The hard part is trusting what's in it. Null values, duplicates, schema changes from upstream systems — these are the bugs you don't see until something downstream breaks. Tests and data contracts become critical fast.

**Scale changes how you think.**

When you're working with millions of rows, decisions that didn't matter before suddenly do. Which columns to partition on, when to materialize vs. view, how to avoid full table scans. You start thinking about cost as a first-class concern.

## What didn't change

The fundamentals are the same. Readable code, small components, clear naming, testing. A dbt model that does too much is the same problem as a function that does too much. The tools are different but the instincts carry over.

Being a generalist actually helps here. I understand what the data is being used for — the APIs that consume it, the frontends that display it, the business logic behind it. That context makes it easier to build something that actually serves the people who need it.

## The AI agents part

On top of the data work, I've been building AI agents for the bank. I can't share specifics, but the pattern is: take a manual, repetitive analytical process, model it, and let an LLM handle the reasoning while the code handles the execution.

What's interesting is that data engineering and AI agents are deeply connected. An agent is only as good as the data it can access. Clean pipelines, good models, reliable outputs — that's what makes an agent actually useful in production.

## Where I am now

Still figuring it out. The data world has its own culture, its own set of opinions, its own flame wars (dbt vs. Spark, anyone?). I'm learning as I go, which is mostly what I've always done.

The switch wasn't a pivot — it was more of an extension. One more layer of the stack to understand. For a generalist, that's the whole point.
`,p=`---
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
`;function h(e){const n=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);if(!n)return{data:{},content:e};const a=n[1],s=e.slice(n[0].length),o={};for(const r of a.split(`
`)){const l=r.indexOf(":");if(l===-1)continue;const i=r.slice(0,l).trim();let t=r.slice(l+1).trim();t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'")?o[i]=t.slice(1,-1):t.startsWith("[")&&t.endsWith("]")?o[i]=t.slice(1,-1).split(",").map(c=>c.trim().replace(/^['"]|['"]$/g,"")):t==="true"?o[i]=!0:t==="false"?o[i]=!1:t!==""&&!isNaN(Number(t))?o[i]=Number(t):o[i]=t}return{data:o,content:s}}const d=Object.assign({"/src/content/blog/from-software-to-data-engineering.md":u,"/src/content/blog/obsidian-to-portfolio-pipeline.md":p});function g(){return Object.entries(d).map(([e,n])=>{const a=e.split("/").at(-1).replace(".md",""),{data:s}=h(n);return{...s,slug:a}}).sort((e,n)=>new Date(n.date).getTime()-new Date(e.date).getTime())}function m(e){const n=`/src/content/blog/${e}.md`,a=d[n];if(!a)return null;const{data:s,content:o}=h(a);return{meta:{...s,slug:e},content:o}}export{m as a,g};
