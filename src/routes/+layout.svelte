<script lang="ts">
	import '../app.css';
	import file_user from '$lib/assets/fileuser.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Mauricio Moraga | Portfolio</title>
	<link rel="icon" href={file_user} />
	<meta name="description" content="Hello, this is Mauricio the software engineer" />
</svelte:head>

<div class="grid grid-rows-[1fr_auto]">
	<main class="min-h-screen bg-gray-50 p-4">
		{@render children?.()}
	</main>

	<Footer />
</div>
