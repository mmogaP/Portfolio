<script lang="ts">
	import { contactInfo, education, experiences, extras, profile, projects } from '$lib/constants';
	import { Blocks, Briefcase, ClipboardPen, PackageOpen } from '@lucide/svelte';
	import TimelineNav from '$lib/components/Timeline.svelte';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<!-- Navegación Timeline -->
<TimelineNav />

<div class="mx-auto max-w-4xl space-y-8 px-4 py-8">
	<!-- Profile Section -->
	<section id="profile" class="p-8">
		<div class="grid space-x-10 md:grid-cols-[1fr_auto]">
			<!-- Main Info -->
			<!-- {#if }
                
            {/if} -->
			<div class="content-center">
				<Briefcase class="mb-4 size-16" />
				<h1 class="pb-6 text-4xl font-bold">{profile.name}</h1>
				<h2 class="pb-2 text-xl font-semibold">{profile.title}</h2>
				<p class="text-sm">{profile.aboutme}</p>
			</div>
			<!-- Avatar -->
			<div class="flex items-center justify-center">
				<img
					src={profile.avatar}
					alt={profile.name}
					class="size-72 rounded-2xl object-cover shadow-lg grayscale"
				/>
			</div>
		</div>
	</section>

	<!-- contact info -->
	<!-- <section id="contact" class="border-t border-neutral-600 p-8">
		<div class="pt-6">
			<h2 class="mb-4 text-2xl font-semibold tracking-wide uppercase">Contact</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<a
					href="mailto:{contactInfo.email}"
					class="hover: flex items-center space-x-3 transition-colors"
				>
					<span class="">📧</span>
					<span>{contactInfo.email}</span>
				</a>

				<div class="flex items-center space-x-3">
					<span class="text-red-500">📍</span>
					<span>{contactInfo.location}</span>
				</div>
			</div>
		</div>
	</section> -->

	<!-- Experience -->
	<section id="experience" class="border-t border-neutral-600 p-8">
		<!-- <h2 class="mb-6 flex items-center text-2xl font-bold">
			<span class="mr-3"><Briefcase /></span>
			Experience
		</h2> -->

		<Tabs.Root value="account" class="w-full">
			<Tabs.List class="bg-neutral-700">
				<Tabs.Trigger value="account"
					><span><ClipboardPen /></span>
					Experience</Tabs.Trigger
				>
				<Tabs.Trigger value="password"><span><Blocks /></span>Technologies</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="account">
				<Card.Root class="bg-neutral-700">
					<!-- <Card.Header>
						<Card.Title>Card Title</Card.Title>
						<Card.Description>Card Description</Card.Description>
					</Card.Header> -->
					<Card.Content>
						<div class="space-y-8">
							{#each experiences as exp}
								<div class="">
									<div class="mb-3 flex flex-col md:flex-row md:items-center md:justify-between">
										<h3 class="text-xl font-semibold">{exp.role}</h3>
										<span class="rounded-full bg-gray-600 px-3 py-1 text-sm">{exp.duration}</span>
									</div>
									<h4 class="mb-4 text-lg font-medium">{exp.company}</h4>

									<ul class="mb-4 space-y-2">
										<li class="flex items-start">
											<span class="mt-1 mr-2">•</span>
											<span class="">{exp.description}</span>
										</li>
									</ul>

									<div class="flex flex-wrap gap-2">
										{#each exp.technologies as tech}
											<span class="rounded-full bg-gray-600 px-3 py-1 text-sm font-medium">
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
			<Tabs.Content value="password">Change your password here.</Tabs.Content>
		</Tabs.Root>
	</section>

	<!-- Projects -->
	<section id="projects" class="border-t border-neutral-600 p-8">
		<h2 class="mb-6 flex items-center text-2xl font-bold">
			<span class="mr-3">🚀</span>
			Projects
		</h2>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			{#each projects as project}
				<div class="rounded-lg border border-gray-600 p-6 transition-shadow hover:shadow-md">
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
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			{#each projects as project}
				<div class="rounded-lg border border-gray-600 p-6 transition-shadow hover:shadow-md">
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
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			{#each projects as project}
				<div class="rounded-lg border border-gray-600 p-6 transition-shadow hover:shadow-md">
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
	</section>

	<!-- Education -->
	<section id="education" class="p-8">
		<h2 class="mb-6 flex items-center text-2xl font-bold">
			<span class="mr-3">🎓</span>
			Formación
		</h2>

		<div class="space-y-6">
			{#each education as edu}
				<div class="flex flex-col p-4 md:flex-row md:items-center md:justify-between">
					<div class="flex-1">
						<h3 class="text-lg font-semibold">{edu.degree}</h3>
						<p class="font-medium">{edu.institution}</p>
						{#if edu.details}
							<p class="mt-1 text-sm">{edu.details}</p>
						{/if}
					</div>
					<span class="mt-2 rounded-full bg-gray-600 px-3 py-1 text-sm md:mt-0">
						{edu.duration}
					</span>
				</div>
			{/each}
			{#each education as edu}
				<div class="flex flex-col p-4 md:flex-row md:items-center md:justify-between">
					<div class="flex-1">
						<h3 class="text-lg font-semibold">{edu.degree}</h3>
						<p class="font-medium">{edu.institution}</p>
						{#if edu.details}
							<p class="mt-1 text-sm">{edu.details}</p>
						{/if}
					</div>
					<span class="mt-2 rounded-full bg-gray-600 px-3 py-1 text-sm md:mt-0">
						{edu.duration}
					</span>
				</div>
			{/each}
			{#each education as edu}
				<div class="flex flex-col p-4 md:flex-row md:items-center md:justify-between">
					<div class="flex-1">
						<h3 class="text-lg font-semibold">{edu.degree}</h3>
						<p class="font-medium">{edu.institution}</p>
						{#if edu.details}
							<p class="mt-1 text-sm">{edu.details}</p>
						{/if}
					</div>
					<span class="mt-2 rounded-full bg-gray-600 px-3 py-1 text-sm md:mt-0">
						{edu.duration}
					</span>
				</div>
			{/each}
		</div>
	</section>
</div>

<!-- <a
					href={contactInfo.linkedin}
					target="_blank"
					rel="noopener"
					class="flex items-center space-x-3 transition-colors hover:"
				>
					<span class="">💼</span>
					<span>LinkedIn</span>
				</a>
				<a
					href={contactInfo.github}
					target="_blank"
					rel="noopener"
					class="flex items-center space-x-3 transition-colors hover:"
				>
					<span>🐙</span>
					<span>GitHub</span>
				</a>
				<a
					href={contactInfo.website}
					target="_blank"
					rel="noopener"
					class="flex items-center space-x-3 transition-colors hover:"
				>
					<span class="text-purple-500">🌐</span>
					<span>Website</span>
				</a> -->

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

<!-- <div class="flex space-x-4">
						{#if project.github}
							<a
								href={project.github}
								target="_blank"
								rel="noopener"
								class="flex items-center transition-colors hover:text-black"
							>
								<span class="mr-1">🐙</span>
								Código
							</a>
						{/if}
						{#if project.demo}
							<a
								href={project.demo}
								target="_blank"
								rel="noopener"
								class="flex items-center  transition-colors hover:"
							>
								<span class="mr-1">🔗</span>
								Demo
							</a>
						{/if}
					</div> -->

<!-- About Me -->
<!-- <section id="about" class=" p-8 ">
		<h2 class="mb-6 flex items-center text-2xl font-bold">
			<span class="mr-3">👋</span>
			Sobre mí
		</h2>
		<div class="prose prose-lg max-w-none">
			<p class="mb-4">{profile.aboutme}</p>
		</div>
	</section> -->

<!-- Technologies -->
<!-- <section id="tech" class=" p-8 ">
		<h2 class="mb-6 flex items-center text-2xl font-bold">
			<span class="mr-3">🛠️</span>
			Tecnologías
		</h2>

		<div class="space-y-8">
			{#each techCategories as category}
				<div>
					<h3 class="mb-4 text-lg font-semibold">{category}</h3>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						{#each getTechByCategory(category) as tech}
							<div class="flex items-center justify-between rounded-lg bg-gray-50 p-3">
								<span class="font-medium">{tech.name}</span>
								<div class="flex items-center space-x-2">
									<div class="h-2 w-20 rounded-full bg-gray-200">
										<div
											class="h-full rounded-full bg-blue-500 transition-all duration-300"
											style="width: {tech.level}%"
										></div>
									</div>
									<span class="w-8 text-sm">{tech.level}%</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section> -->
