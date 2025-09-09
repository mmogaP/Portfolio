<script lang="ts">
	import {
		education,
		experiences,
		extras,
		getTechCategoryInfo,
		profile,
		projects,
		technologies
	} from '$lib/constants';
	import {
		BadgeCheckIcon,
		Blocks,
		Briefcase,
		ClipboardPen,
		FolderKanban,
		GraduationCap
	} from '@lucide/svelte';
	import TimelineNav from '$lib/components/Timeline.svelte';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Progress } from '$lib/components/ui/progress/index.js';

	let mounted = false;
	let showBadge = false;

	onMount(() => {
		mounted = true;
		setTimeout(() => {
			showBadge = true;
		}, 800);
	});
</script>

<!-- Navegación Timeline -->
<!-- <TimelineNav /> -->

<div class="mx-auto max-w-4xl">
	<!-- Profile Section -->
	<section id="profile" class="p-8">
		{#if mounted}
			<div
				class="grid space-y-4 md:grid-cols-[1fr_auto] md:space-x-10"
				in:fade={{ duration: 600, delay: 100 }}
			>
				<!-- Main Info -->
				<div class="content-center">
					<!-- Icono con animación de escala -->
					<div
						in:scale={{
							duration: 500,
							delay: 200,
							easing: quintOut,
							start: 0.5
						}}
					>
						<Briefcase class="mb-4 size-16" />
					</div>

					<!-- Título con animación desde la izquierda -->
					<h1
						class="flex flex-wrap items-center gap-3 pb-6 text-4xl font-bold"
						in:fly={{ x: -50, duration: 600, delay: 300 }}
					>
						{profile.name}
						{#if showBadge}
							<div in:fly={{ y: -20, duration: 400, delay: 100 }} out:scale={{ duration: 200 }}>
								<Badge variant="secondary" class="bg-blue-500 text-white dark:bg-blue-600">
									<BadgeCheckIcon />
									Verified
								</Badge>
							</div>
						{/if}
					</h1>

					<!-- Subtítulo con animación desde la izquierda con más delay -->
					<h2 class="pb-2 text-xl font-semibold" in:fly={{ x: -30, duration: 500, delay: 500 }}>
						{profile.title}
					</h2>

					<!-- Descripción con fade -->
					<p class="text-sm" in:fade={{ duration: 600, delay: 700 }}>
						{profile.aboutme}
					</p>
				</div>

				<!-- Avatar con animación desde la derecha y hover effect -->
				<div class="flex items-center justify-center" in:fly={{ x: 50, duration: 600, delay: 400 }}>
					<img
						src={profile.avatar}
						alt={profile.name}
						class="size-72 rounded-2xl object-cover shadow-lg grayscale transition-all duration-300 hover:scale-105 hover:shadow-xl hover:grayscale-0"
					/>
				</div>
			</div>
		{/if}
	</section>

	<!-- Experience -->
	{#if mounted}
		<section
			id="experience"
			class="border-t border-neutral-600 p-8"
			in:fly={{ x: 50, duration: 600, delay: 1000 }}
		>
			<Tabs.Root value="experience" class="w-full">
				<Tabs.List class="bg-neutral-700">
					<Tabs.Trigger value="experience"><span><ClipboardPen /></span>Experience</Tabs.Trigger>
					<Tabs.Trigger value="technologies"><span><Blocks /></span>Technologies</Tabs.Trigger>
					<Tabs.Trigger value="projects"><span><FolderKanban /></span>Projects</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="experience">
					<Card.Root class="bg-neutral-700">
						<Card.Content>
							<div class="space-y-8">
								{#each experiences as exp}
									<div class="">
										<div
											class="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between"
										>
											<h2 class="text-xl font-semibold">{exp.role} @ {exp.company}</h2>
											<span class="rounded-full border px-3 py-1 text-sm">{exp.duration}</span>
										</div>

										<Accordion.Root type="single">
											<Accordion.Item value="item-1">
												<Accordion.Trigger>
													<span class="flex items-center gap-2">
														<ClipboardPen class="size-4" />
														Details
													</span>
												</Accordion.Trigger>
												<Accordion.Content>
													<ul class="mb-4 space-y-2">
														{#if Array.isArray(exp.description)}
															{#each exp.description as desc}
																<li class="flex items-start">
																	<span class="mt-1 mr-2">•</span>
																	<span class="text-sm">{desc}</span>
																</li>
															{/each}
														{:else}
															<li class="flex items-start">
																<span class="mt-1 mr-2">•</span>
																<span class="text-sm">{exp.description}</span>
															</li>
														{/if}
													</ul>
													<div class="flex flex-wrap gap-2">
														{#each exp.technologies as tech}
															{@const techInfo = getTechCategoryInfo(tech)}
															<Badge
																variant="outline"
																class={techInfo.color}
																title={techInfo.category}
															>
																{tech}
															</Badge>
														{/each}
													</div>
												</Accordion.Content>
											</Accordion.Item>
										</Accordion.Root>
									</div>
								{/each}
							</div>
						</Card.Content>
					</Card.Root>
				</Tabs.Content>
				<Tabs.Content value="technologies">
					<Card.Root class="bg-neutral-700">
						<Card.Content>
							<div class="grid grid-cols-3 gap-6">
								{#each technologies as tech}
									<div class="space-y-2">
										<!-- <img src={tech.icon} alt={tech.name} class="size-12" /> -->
										<Badge variant="outline" title={tech.category} class={tech.color}>
											{tech.name}
										</Badge>
										<span>
											<Progress value={tech.level} />
											{tech.level}%
										</span>
									</div>
								{/each}
							</div>
						</Card.Content>
					</Card.Root>
				</Tabs.Content>
				<Tabs.Content value="projects">
					<Card.Root class="bg-neutral-700">
						<Card.Content>
							<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
								{#each projects as project}
									<div
										class="rounded-lg border border-gray-600 p-6 transition-shadow hover:shadow-md"
									>
										<h3 class="mb-3 text-xl font-semibold">{project.name}</h3>
										<p class="mb-4">{project.description}</p>

										<div class="mb-4 flex flex-wrap gap-2">
											{#each project.technologies as tech}
												<span class="rounded bg-gray-600 px-2 py-1 text-sm">
													{tech}
												</span>
											{/each}
										</div>
									</div>
								{/each}
							</div>
						</Card.Content>
					</Card.Root>
				</Tabs.Content>
			</Tabs.Root>
		</section>
	{/if}

	<!-- Education -->
	{#if mounted}
		<section
			id="education"
			class="border-t border-neutral-600 p-8"
			in:fly={{ x: 50, duration: 600, delay: 1000 }}
		>
			<h2 class="mb-6 flex items-center text-2xl font-bold">
				<span class="mr-3"><GraduationCap /></span>
				Education
			</h2>

			<div class="space-y-6">
				{#each education as edu}
					<div class="flex flex-col p-4 md:flex-row md:items-center md:justify-between">
						<div class="flex-1">
							<h3 class="text-lg font-semibold">
								<HoverCard.Root>
									<HoverCard.Trigger
										href={edu.href}
										target="_blank"
										rel="noopener noreferrer"
										class="hover:underline">{edu.degree}</HoverCard.Trigger
									>
									<!-- <HoverCard.Content>
									<p class="max-w-xs rounded bg-gray-700 p-2 text-sm shadow-lg">
										Click to view more details
									</p>
								</HoverCard.Content> -->
								</HoverCard.Root>
							</h3>
							<p class="font-medium">{edu.institution}</p>
							{#if edu.details}
								<p class="mt-1 text-sm">{edu.details}</p>
							{/if}
						</div>
						<span class="mt-2 rounded-full border px-3 py-1 text-sm md:mt-0">
							{edu.duration}
						</span>
					</div>
				{/each}
			</div>
		</section>
	{/if}
</div>

<!-- Extra -->
<!-- <section id="extra" class=" p-8 ">
		<h2 class="mb-6 flex items-center text-2xl font-bold">
			<span class="mr-3">✨</span>
			Extra
		</h2>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each extras as extra}
				<div class="flex items-start rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
					<span class="mr-3 text-2xl">{extra.split(' ')[0]}</span>
					<span class=">{extra.substring(extra.indexOf(' ') + 1)}</span>
				</div>
			{/each}
		</div>
	</section> -->

<style>
	/* Animación CSS adicional para efectos de hover más suaves */
	img {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Animación de pulso para el icono Briefcase */
	:global(.briefcase-animate) {
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.7;
		}
	}
</style>
