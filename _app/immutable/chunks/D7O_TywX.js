const u=`---
title: Real-Time Satellite Data Ingestion with the Copernicus API
excerpt: Building the automated pipeline that ingests daily oceanic data from ESA's Copernicus Marine Service — from API quirks to scalable FastAPI workers.
date: 2025-03-02
tags: [Python, FastAPI, GCP]
readTime: 6 min
featured: false
---

Coming soon.
`,g=`---
title: "Reducing Cloud Costs by 75%: A Microservices Migration Story"
excerpt: "How we migrated RedOcean's architecture to Google Cloud Run and cut monthly costs from $300k to $70k CLP — key architectural decisions and lessons learned."
date: 2025-04-15
tags: [GCP, Docker, Microservices]
readTime: 8 min
featured: true
---

Coming soon.
`,f=`---
title: Why I Switched from Express to HonoJS (and Bun)
excerpt: After years with Node.js + Express, I made the switch at RedOcean. Here's what I learned about DX improvements and real-world performance gains.
date: 2025-01-20
tags: [HonoJS, Node.js, Bun]
readTime: 5 min
featured: false
---

Coming soon.
`;function l(t){const n=t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);if(!n)return{data:{},content:t};const o=n[1],i=t.slice(n[0].length),s={};for(const r of o.split(`
`)){const c=r.indexOf(":");if(c===-1)continue;const a=r.slice(0,c).trim();let e=r.slice(c+1).trim();e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?s[a]=e.slice(1,-1):e.startsWith("[")&&e.endsWith("]")?s[a]=e.slice(1,-1).split(",").map(m=>m.trim().replace(/^['"]|['"]$/g,"")):e==="true"?s[a]=!0:e==="false"?s[a]=!1:e!==""&&!isNaN(Number(e))?s[a]=Number(e):s[a]=e}return{data:s,content:i}}const d=Object.assign({"/src/content/blog/real-time-satellite-data-copernicus.md":u,"/src/content/blog/reducing-cloud-costs-75-percent.md":g,"/src/content/blog/switched-from-express-to-honojs.md":f});function h(){return Object.entries(d).map(([t,n])=>{const o=t.split("/").at(-1).replace(".md",""),{data:i}=l(n);return{...i,slug:o}}).sort((t,n)=>new Date(n.date).getTime()-new Date(t.date).getTime())}function p(t){const n=`/src/content/blog/${t}.md`,o=d[n];if(!o)return null;const{data:i,content:s}=l(o);return{meta:{...i,slug:t},content:s}}export{p as a,h as g};
