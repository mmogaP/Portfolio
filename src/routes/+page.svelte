<script lang="ts">
	import { contactInfo, education, experiences, extras, profile, projects } from '$lib/constants';
	import { Briefcase, PackageOpen } from '@lucide/svelte';
</script>

<div class="mx-auto max-w-6xl space-y-8 px-4 py-8">
	<!-- Profile Section -->
	<section class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
		<div
			class="flex flex-col items-start space-y-6 md:flex-row md:items-center md:space-y-0 md:space-x-8"
		>
			<!-- Avatar -->
			<div class="flex-shrink-0">
				<img src={profile.avatar} alt={profile.name} class="h-32 w-32 rounded-2xl shadow-lg" />
			</div>

			<!-- Main Info -->
			<div class="flex-1">
				<h1 class="mb-2 text-4xl font-bold text-gray-900">{profile.name}</h1>
				<h2 class="mb-4 text-xl font-semibold text-blue-600">{profile.title}</h2>
				<p class="text-lg text-gray-600">{profile.bio}</p>
			</div>
		</div>

		<!-- Contact Info -->
		<div class="mt-8 border-t border-gray-100 pt-6">
			<h3 class="mb-4 text-sm font-semibold tracking-wide text-gray-500 uppercase">Contacto</h3>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<a
					href="mailto:{contactInfo.email}"
					class="flex items-center space-x-3 text-gray-600 transition-colors hover:text-blue-600"
				>
					<span class="text-blue-500">📧</span>
					<span>{contactInfo.email}</span>
				</a>
				<a
					href="tel:{contactInfo.phone}"
					class="flex items-center space-x-3 text-gray-600 transition-colors hover:text-blue-600"
				>
					<span class="text-green-500">📱</span>
					<span>{contactInfo.phone}</span>
				</a>
				<div class="flex items-center space-x-3 text-gray-600">
					<span class="text-red-500">📍</span>
					<span>{contactInfo.location}</span>
				</div>
				<!-- <a
					href={contactInfo.linkedin}
					target="_blank"
					rel="noopener"
					class="flex items-center space-x-3 text-gray-600 transition-colors hover:text-blue-600"
				>
					<span class="text-blue-600">💼</span>
					<span>LinkedIn</span>
				</a>
				<a
					href={contactInfo.github}
					target="_blank"
					rel="noopener"
					class="flex items-center space-x-3 text-gray-600 transition-colors hover:text-blue-600"
				>
					<span>🐙</span>
					<span>GitHub</span>
				</a>
				<a
					href={contactInfo.website}
					target="_blank"
					rel="noopener"
					class="flex items-center space-x-3 text-gray-600 transition-colors hover:text-blue-600"
				>
					<span class="text-purple-500">🌐</span>
					<span>Website</span>
				</a> -->
			</div>

			<div class="mt-6">
				<a
					href="/cv.pdf"
					download
					class="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
				>
					<span class="mr-2"><PackageOpen></PackageOpen></span>
					Descargar CV
				</a>
			</div>
		</div>
	</section>

	<!-- About Me -->
	<section id="about" class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
		<h2 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
			<span class="mr-3">👋</span>
			Sobre mí
		</h2>
		<div class="prose prose-lg max-w-none text-gray-600">
			<p class="mb-4">{profile.aboutme}</p>
		</div>
	</section>

	<!-- Technologies -->
	<!-- <section id="tech" class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
		<h2 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
			<span class="mr-3">🛠️</span>
			Tecnologías
		</h2>

		<div class="space-y-8">
			{#each techCategories as category}
				<div>
					<h3 class="mb-4 text-lg font-semibold text-gray-800">{category}</h3>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						{#each getTechByCategory(category) as tech}
							<div class="flex items-center justify-between rounded-lg bg-gray-50 p-3">
								<span class="font-medium text-gray-700">{tech.name}</span>
								<div class="flex items-center space-x-2">
									<div class="h-2 w-20 rounded-full bg-gray-200">
										<div
											class="h-full rounded-full bg-blue-500 transition-all duration-300"
											style="width: {tech.level}%"
										></div>
									</div>
									<span class="w-8 text-sm text-gray-500">{tech.level}%</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section> -->

	<!-- Experience -->
	<section id="experience" class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
		<h2 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
			<span class="mr-3"><Briefcase /></span>
			Experiencia
		</h2>

		<div class="space-y-8">
			{#each experiences as exp}
				<div class="border-l-4 border-blue-500 pb-6 pl-6">
					<div class="mb-3 flex flex-col md:flex-row md:items-center md:justify-between">
						<h3 class="text-xl font-semibold text-gray-900">{exp.role}</h3>
						<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500"
							>{exp.duration}</span
						>
					</div>
					<h4 class="mb-4 text-lg font-medium text-blue-600">{exp.company}</h4>

					<ul class="mb-4 space-y-2">
						<li class="flex items-start">
							<span class="mt-1 mr-2 text-blue-500">•</span>
							<span class="text-gray-600">{exp.description}</span>
						</li>
					</ul>

					<div class="flex flex-wrap gap-2">
						{#each exp.technologies as tech}
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
								{tech}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Projects -->
	<section id="projects" class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
		<h2 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
			<span class="mr-3">🚀</span>
			Proyectos
		</h2>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			{#each projects as project}
				<div class="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
					<h3 class="mb-3 text-xl font-semibold text-gray-900">{project.name}</h3>
					<p class="mb-4 text-gray-600">{project.description}</p>

					<div class="mb-4 flex flex-wrap gap-2">
						{#each project.technologies as tech}
							<span class="rounded bg-gray-100 px-2 py-1 text-sm text-gray-700">
								{tech}
							</span>
						{/each}
					</div>

					<!-- <div class="flex space-x-4">
						{#if project.github}
							<a
								href={project.github}
								target="_blank"
								rel="noopener"
								class="flex items-center text-gray-600 transition-colors hover:text-black"
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
								class="flex items-center text-blue-600 transition-colors hover:text-blue-800"
							>
								<span class="mr-1">🔗</span>
								Demo
							</a>
						{/if}
					</div> -->
				</div>
			{/each}
		</div>
	</section>

	<!-- Education -->
	<section id="education" class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
		<h2 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
			<span class="mr-3">🎓</span>
			Formación
		</h2>

		<div class="space-y-6">
			{#each education as edu}
				<div
					class="flex flex-col rounded-lg bg-gray-50 p-4 md:flex-row md:items-center md:justify-between"
				>
					<div class="flex-1">
						<h3 class="text-lg font-semibold text-gray-900">{edu.degree}</h3>
						<p class="font-medium text-blue-600">{edu.institution}</p>
						{#if edu.details}
							<p class="mt-1 text-sm text-gray-600">{edu.details}</p>
						{/if}
					</div>
					<span class="mt-2 rounded-full bg-white px-3 py-1 text-sm text-gray-500 md:mt-0">
						{edu.duration}
					</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Extra -->
	<!-- <section id="extra" class="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
		<h2 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
			<span class="mr-3">✨</span>
			Extra
		</h2>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each extras as extra}
				<div class="flex items-start rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
					<span class="mr-3 text-2xl">{extra.split(' ')[0]}</span>
					<span class="text-gray-700">{extra.substring(extra.indexOf(' ') + 1)}</span>
				</div>
			{/each}
		</div>
	</section> -->
</div>
