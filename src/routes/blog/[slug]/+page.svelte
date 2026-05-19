<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const html = $derived(marked(data.content) as string);

	function formatDate(d: string) {
		return new Date(d).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	}
</script>

<svelte:head>
	<title>{data.meta.title} — MMM</title>
	<meta name="description" content={data.meta.excerpt} />
</svelte:head>

<div style="max-width: 42rem; margin: 0 auto; padding: 4rem 1.5rem 6rem;">
	<!-- Back -->
	<a
		href="/#blog"
		style="display: inline-flex; align-items: center; gap: 6px; font-size: 11px; color: #aaa; text-decoration: none; margin-bottom: 3rem; transition: color 0.15s;"
		onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = '#111')}
		onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.color = '#aaa')}
	>
		← Back
	</a>

	<!-- Header -->
	<div style="margin-bottom: 2.5rem;">
		<div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 1.25rem;">
			{#each data.meta.tags as tag (tag)}
				<span style="font-size: 10px; color: #aaa; border: 1px solid #dddbd5; padding: 2px 8px;">{tag}</span>
			{/each}
		</div>

		<h1
			style="font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 700; line-height: 1.15; letter-spacing: -0.03em; margin-bottom: 1rem;"
		>
			{data.meta.title}
		</h1>

		<div style="display: flex; gap: 16px; font-size: 11px; color: #aaa;">
			<span>{formatDate(data.meta.date)}</span>
			{#if data.meta.readTime}
				<span>·</span><span>{data.meta.readTime} read</span>
			{/if}
		</div>
	</div>

	<div style="height: 1px; background: #dddbd5; margin-bottom: 2.5rem;"></div>

	<!-- Content -->
	<div class="prose">
		{@html html}
	</div>
</div>

<style>
	.prose :global(h1),
	.prose :global(h2),
	.prose :global(h3) {
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.2;
		margin: 2rem 0 0.75rem;
	}
	.prose :global(h1) { font-size: 1.6rem; }
	.prose :global(h2) { font-size: 1.25rem; }
	.prose :global(h3) { font-size: 1rem; }
	.prose :global(p) {
		font-size: 0.82rem;
		line-height: 1.9;
		color: #444;
		margin-bottom: 1.25rem;
	}
	.prose :global(ul),
	.prose :global(ol) {
		font-size: 0.82rem;
		line-height: 1.9;
		color: #444;
		margin-bottom: 1.25rem;
		padding-left: 1.25rem;
	}
	.prose :global(li) { margin-bottom: 0.4rem; }
	.prose :global(code) {
		font-family: 'Roboto Mono Variable', monospace;
		font-size: 0.78rem;
		background: #f0ede8;
		padding: 2px 6px;
	}
	.prose :global(pre) {
		background: #111;
		color: #f5f4f0;
		padding: 1.25rem;
		overflow-x: auto;
		margin-bottom: 1.5rem;
	}
	.prose :global(pre code) { background: none; padding: 0; }
	.prose :global(blockquote) {
		border-left: 2px solid #dddbd5;
		padding-left: 1rem;
		color: #888;
		font-style: italic;
		margin: 1.5rem 0;
	}
	.prose :global(a) {
		color: #111;
		text-decoration: underline;
		text-underline-offset: 3px;
	}
	.prose :global(hr) {
		border: none;
		border-top: 1px solid #dddbd5;
		margin: 2rem 0;
	}
	.prose :global(img) { max-width: 100%; margin: 1.5rem 0; }
	.prose :global(strong) { font-weight: 700; color: #111; }
</style>
