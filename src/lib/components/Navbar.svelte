<script lang="ts">
	const links = [
		{ name: 'Home', id: 'hero' },
		{ name: 'Experience', id: 'experience' },
		{ name: 'Education', id: 'education' },
		{ name: 'Blog', id: 'blog' }
	];

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) window.scrollTo({ top: el.offsetTop - 52, behavior: 'smooth' });
	}
</script>

<nav
	style="
	position: sticky; top: 0; z-index: 40;
	display: flex; align-items: center; justify-content: space-between;
	background: rgba(245,244,240,0.92); backdrop-filter: blur(10px);
	border-bottom: 1px solid #dddbd5; padding: 12px 2rem;
"
>
	<div style="font-size: 1rem; font-weight: 700; letter-spacing: 0.04em;">
		MMM<span style="color: #111;">®</span>
	</div>

	<ul class="nav-links" style="display: flex; gap: 24px; list-style: none; margin: 0; padding: 0;">
		{#each links as link (link.id)}
			<li>
				<button
					onclick={() => scrollTo(link.id)}
					style="background: none; border: none; cursor: pointer; color: #aaa; font-size: 11px; font-family: inherit; padding: 0; transition: color 0.15s;"
					onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = '#111')}
					onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.color = '#aaa')}
				>
					{link.name}
				</button>
			</li>
		{/each}
	</ul>

	<a href="mailto:mmoraga.m3@gmail.com" class="btn-ink" style="padding: 7px 16px; font-size: 10px;">
		Let's Connect
	</a>
</nav>
