export interface PostMeta {
	title: string;
	excerpt: string;
	date: string;
	tags: string[];
	readTime?: string;
	featured?: boolean;
	slug: string;
}

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
	if (!match) return { data: {}, content: raw };

	const yaml = match[1];
	const content = raw.slice(match[0].length);
	const data: Record<string, unknown> = {};

	for (const line of yaml.split('\n')) {
		const colonIdx = line.indexOf(':');
		if (colonIdx === -1) continue;
		const key = line.slice(0, colonIdx).trim();
		let val = line.slice(colonIdx + 1).trim();

		if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
			data[key] = val.slice(1, -1);
		} else if (val.startsWith('[') && val.endsWith(']')) {
			data[key] = val
				.slice(1, -1)
				.split(',')
				.map((s) => s.trim().replace(/^['"]|['"]$/g, ''));
		} else if (val === 'true') {
			data[key] = true;
		} else if (val === 'false') {
			data[key] = false;
		} else if (val !== '' && !isNaN(Number(val))) {
			data[key] = Number(val);
		} else {
			data[key] = val;
		}
	}

	return { data, content };
}

const rawModules = import.meta.glob('/src/content/blog/*.md', {
	query: '?raw',
	import: 'default',
	eager: true,
}) as Record<string, string>;

export function getPosts(): PostMeta[] {
	return Object.entries(rawModules)
		.map(([path, raw]) => {
			const slug = path.split('/').at(-1)!.replace('.md', '');
			const { data } = parseFrontmatter(raw);
			return { ...(data as Omit<PostMeta, 'slug'>), slug };
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): { meta: PostMeta; content: string } | null {
	const path = `/src/content/blog/${slug}.md`;
	const raw = rawModules[path];
	if (!raw) return null;

	const { data, content } = parseFrontmatter(raw);
	return { meta: { ...(data as Omit<PostMeta, 'slug'>), slug }, content };
}
