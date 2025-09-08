<script>
	let links = [
		{ name: 'Home', href: '/' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<nav class="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
	<div class="text-xl font-semibold text-gray-800">Logo</div>
	<ul class="flex space-x-6">
		{#each links as link}
			<li>
				<a href={link.href} class="text-gray-600 transition-colors hover:text-blue-500"
					>{link.name}</a
				>
			</li>
		{/each}
	</ul>
</nav>
