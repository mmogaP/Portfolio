<script lang="ts">
	import { Briefcase, FolderOpen, GraduationCap, User } from '@lucide/svelte';
	import { onMount } from 'svelte';

	// Secciones del timeline
	const sections = [
		{ id: 'profile', label: 'Profile', icon: User },
		{ id: 'experience', label: 'Experience', icon: Briefcase },
		{ id: 'projects', label: 'Projects', icon: FolderOpen },
		{ id: 'education', label: 'Education', icon: GraduationCap }
	];

	let activeSection = 'profile';
	let scrollY = 0;

	// Función para hacer scroll suave a una sección
	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	// Detectar qué sección está activa basándose en el scroll
	function updateActiveSection() {
		const sectionIds = ['profile', 'experience', 'projects', 'education'];

		for (let i = sectionIds.length - 1; i >= 0; i--) {
			const element = document.getElementById(sectionIds[i]);
			if (element) {
				const rect = element.getBoundingClientRect();
				// Usar un threshold más flexible
				if (rect.top <= window.innerHeight / 2) {
					activeSection = sectionIds[i];
					break;
				}
			}
		}

		// Si ninguna sección está visible, mantener la última activa
		if (scrollY === 0) {
			activeSection = 'profile';
		}
	}

	onMount(() => {
		// Escuchar cambios en el scroll
		const handleScroll = () => {
			scrollY = window.scrollY;
			updateActiveSection();
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:window bind:scrollY />

<!-- Navegación Timeline -->
<nav class="fixed top-1/2 left-8 z-50 hidden -translate-y-1/2 lg:block">
	<div class="relative">
		<!-- Línea vertical del timeline -->
		<div class="absolute top-0 left-6 h-full w-0.5 bg-gray-600"></div>

		<!-- Puntos y labels del timeline -->
		<ul class="space-y-8">
			{#each sections as section}
				<li class="relative">
					<!-- Punto del timeline -->
					<button
						class="relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none
							{activeSection === section.id
							? 'border-white bg-white text-gray-900 shadow-lg'
							: 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-400 hover:bg-gray-700'}"
						on:click={() => scrollToSection(section.id)}
						aria-label={`Ir a ${section.label}`}
					>
						<svelte:component this={section.icon} class="h-5 w-5" />
					</button>

					<!-- Label -->
					<div
						class="absolute top-1/2 left-16 -translate-y-1/2 opacity-0 transition-all duration-300 hover:opacity-100
						{activeSection === section.id ? 'opacity-100' : ''}"
					>
						<div
							class="rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-sm font-medium whitespace-nowrap text-white shadow-lg"
						>
							{section.label}
							<!-- Flecha apuntando al botón -->
							<div class="absolute top-1/2 left-0 -translate-x-1 -translate-y-1/2">
								<div class="h-2 w-2 rotate-45 border-b border-l border-gray-600 bg-gray-800"></div>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	/* Animación suave para el indicador activo */
	button {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
