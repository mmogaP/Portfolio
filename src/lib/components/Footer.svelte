<script lang="ts">
	import { socials } from '$lib/constants';
</script>

<footer style="background: #0f0f0f; color: #f5f4f0; padding: 3rem 2rem;">
	<div
		style="max-width: 72rem; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem;"
	>
		<div>
			<div
				style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.03em; margin-bottom: 6px;"
			>
				MMM<span style="color: #555;">®</span>
			</div>
			<p style="font-size: 10px; color: #555; letter-spacing: 0.04em;">
				© {new Date().getFullYear()} Mauricio Moraga Michaud
			</p>
		</div>

		<div style="display: flex; gap: 20px; align-items: center;">
			{#each socials as social (social.label)}
				{@const Icon = social.icon}
				<a
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={social.label}
					style="color: #444; transition: color 0.2s;"
					onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = '#fff')}
					onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.color = '#444')}
				>
					<Icon size={20} />
				</a>
			{/each}
			<span
				title="quack 🦆"
				style="font-size: 1.2rem; cursor: default; user-select: none; transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1); display: inline-block;"
				onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'rotate(-20deg) scale(1.3)')}
				onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'none')}
			>🦆</span>
		</div>
	</div>
</footer>
