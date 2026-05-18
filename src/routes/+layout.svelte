<script lang="ts">
	import '../app.css';
	import file_user from '$lib/assets/fileuser.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Mauricio Moraga | Software Engineer</title>
	<link rel="icon" href={file_user} />
	<meta
		name="description"
		content="Mauricio Moraga — Software Engineer & former CTO based in Chile. Built a SaaS platform for the Chilean Navy, selected for Google for Startups. Full-stack: Node.js, Svelte, Python, GCP, Docker."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Mauricio Moraga | Software Engineer" />
	<meta
		property="og:description"
		content="Software Engineer & former CTO. Built production SaaS for the Chilean Navy, selected for Google for Startups. Full-stack expertise: Node.js, Svelte, Python, GCP."
	/>
	<meta property="og:image" content="https://avatars.githubusercontent.com/mmogaP" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Mauricio Moraga | Software Engineer" />
	<meta
		name="twitter:description"
		content="Software Engineer & former CTO. Built production SaaS for the Chilean Navy, selected for Google for Startups."
	/>
</svelte:head>

<div class="grid grid-rows-[1fr_auto]">
	<main class="dark min-h-screen w-screen bg-neutral-800 bg-center p-4 text-white">
		{@render children?.()}
	</main>

	<Footer />
</div>
