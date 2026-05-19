<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog — MMM</title>
	<meta name="description" content="Writing about software, data engineering, and building things." />
</svelte:head>

<div style="max-width: 72rem; margin: 0 auto; padding: 4rem 2rem 6rem;">
	<!-- Header -->
	<div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 3.5rem;">
		<a
			href="/#blog"
			style="font-size: 11px; color: #aaa; text-decoration: none; transition: color 0.15s;"
			onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = '#111')}
			onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.color = '#aaa')}
		>← Back</a>
		<div style="display: inline-flex; align-items: center; padding: 5px 12px; border: 1px solid #d8d5d0; font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 0.12em;">
			Blog
		</div>
		<span style="font-size: 11px; color: #ccc;">{data.posts.length} posts</span>
	</div>

	<!-- Post list -->
	<div style="border-top: 1px solid #dddbd5;">
		{#each data.posts as post (post.slug)}
			<a
				href="/blog/{post.slug}"
				style="display: grid; grid-template-columns: 1fr auto; gap: 2rem; align-items: start; padding: 1.5rem 0; border-bottom: 1px solid #dddbd5; text-decoration: none; color: inherit; transition: opacity 0.15s;"
				onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.6')}
				onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
			>
				<div>
					<div style="display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 8px;">
						{#each post.tags as tag (tag)}
							<span style="font-size: 10px; color: #aaa; border: 1px solid #dddbd5; padding: 2px 8px;">{tag}</span>
						{/each}
					</div>
					<h2 style="font-size: 0.95rem; font-weight: 600; line-height: 1.35; letter-spacing: -0.01em; margin-bottom: 6px;">{post.title}</h2>
					<p style="font-size: 11px; color: #aaa; line-height: 1.7; max-width: 60ch;">{post.excerpt}</p>
				</div>
				<div style="text-align: right; white-space: nowrap; padding-top: 2px;">
					<div style="font-size: 10px; color: #bbb;">{post.date}</div>
					{#if post.readTime}
						<div style="font-size: 10px; color: #ccc; margin-top: 4px;">{post.readTime} read</div>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</div>
