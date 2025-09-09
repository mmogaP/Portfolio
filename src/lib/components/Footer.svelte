<script lang="ts">
	import { socials } from '$lib/constants';
	import { Skull } from '@lucide/svelte';
</script>

<footer class="w-full bg-gray-100 py-4 text-center text-gray-500">
	<!-- © {new Date().getFullYear()} Your Name. All rights reserved. -->
	<div class="mx-auto max-w-4xl text-center">
		<!-- <p class="mb-4 text-gray-600">
			Developed with ❤️ using Svelte, TypeScript, Tailwind CSS & Shadcn
		</p> -->
		<div class="flex justify-center space-x-6">
			{#each socials as social}
				<a
					href={social.href}
					target="_blank"
					rel="noopener"
					class="text-gray-600 transition-colors hover:text-black"
					aria-label={social.label}
				>
					<svelte:component this={social.icon} class="h-6 w-6" />
				</a>
			{/each}
		</div>
		<!-- 	<a
				href="https://github.com/yourusername"
				target="_blank"
				rel="noopener"
				class="text-gray-600 transition-colors hover:text-black"
			>
				GitHub
			</a>
			<a
				href={socials[1].href}
				target="_blank"
				rel="noopener"
				class="text-gray-600 transition-colors hover:text-blue-600"
			>
				<span></span>
				LinkedIn
			</a>
			<a
				href="mailto:{contactInfo.email}"
				class="text-gray-600 transition-colors hover:text-blue-600"
			>
				Email
			</a> -->
		<!-- </div> -->
	</div>
</footer>

<!-- <footer class="mt-16 border-t border-gray-200 bg-white px-4 py-8">
	
</footer>
 -->
