<script lang="ts">
	import {
		education,
		experiences,
		profile,
		projects,
		technologyCategories,
	} from '$lib/constants';
	import { BadgeCheckIcon, ExternalLink } from '@lucide/svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { onMount } from 'svelte';
	import { getTechCategoryInfo } from '$lib/techUtils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// ── mount & badge ──────────────────────────────────────────
	let mounted = $state(false);
	let showBadge = $state(false);

	onMount(() => {
		mounted = true;
		setTimeout(() => (showBadge = true), 900);
	});

	// ── stats count-up ─────────────────────────────────────────
	const statTargets = [
		{ end: 3,  suffix: '+', label: 'Years\nExperience'     },
		{ end: 57, suffix: '+', label: 'Technologies\nIn My Stack' },
		{ end: 4,  suffix: '',  label: 'Companies\nWorked With' },
		{ end: 2,  suffix: '+', label: 'Projects\nHighlighted'  },
	];
	let statValues = $state([0, 0, 0, 0]);

	onMount(() => {
		setTimeout(() => {
			const duration = 1400;
			let start: number | null = null;
			function tick(ts: number) {
				if (!start) start = ts;
				const p = Math.min((ts - start) / duration, 1);
				const eased = p * p;
				statValues = statTargets.map((s) => Math.round(eased * s.end));
				if (p < 1) requestAnimationFrame(tick);
			}
			requestAnimationFrame(tick);
		}, 500);
	});

	// ── tabs ───────────────────────────────────────────────────
	let activeTab = $state<'exp' | 'skills' | 'projects'>('exp');

	// ── skills filter ──────────────────────────────────────────
	let selectedCat = $state('all');
	const cats = Object.keys(technologyCategories);

	// ── project dialog ─────────────────────────────────────────
	let openProject = $state<number | null>(null);
</script>

<!-- ── Hero ──────────────────────────────────────────────────── -->
<section id="hero" class="hero-section" style="padding: 5rem 2rem 4rem; border-bottom: 1px solid #dddbd5;">
	{#if mounted}
		<div
			class="hero-grid"
			style="max-width: 72rem; margin: 0 auto; display: flex; gap: 5rem; align-items: center; justify-content: space-between;"
		>
			<!-- Left -->
			<div class="anim-left hero-text" style="animation-delay: 0.1s; flex: 1; min-width: 0;">
				<h1
					style="font-size: clamp(3.2rem,9vw,6.5rem); font-weight: 700; line-height: 0.92; letter-spacing: -0.04em; margin-bottom: 1.75rem; user-select: none;"
				>
					MAURICIO<br />
					MORAGA<br />
					<span
						style="font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-weight: 400; letter-spacing: -0.02em; font-size: 0.85em;"
					>
						Michaud
					</span>
				</h1>

				{#if showBadge}
					<div class="anim-up" style="margin-bottom: 1rem; display: flex; align-items: center; gap: 6px; font-size: 11px; color: #3b82f6;">
						<BadgeCheckIcon size={14} />
						<span style="font-weight: 600; letter-spacing: 0.04em;">VERIFIED</span>
					</div>
				{/if}

				<h2
					style="font-size: 0.88rem; font-weight: 400; color: #888; margin-bottom: 1rem; letter-spacing: 0.04em;"
				>
					<em
						style="font-family: 'Playfair Display', Georgia, serif; font-style: italic; color: #444;"
						>{profile.title}</em
					>
				</h2>

				<div style="width: 36px; height: 1px; background: #ccc; margin-bottom: 1.25rem;"></div>

				<p
					class="anim-fade"
					style="animation-delay: 0.5s; font-size: 0.72rem; color: #999; line-height: 1.85; max-width: 44ch; margin-bottom: 2.25rem;"
				>
					{profile.aboutme}
				</p>

				<div class="anim-up" style="animation-delay: 0.6s; display: flex; gap: 10px; flex-wrap: wrap;">
					<button
						class="btn-ink"
						onclick={() => {
							const el = document.getElementById('experience');
							if (el) window.scrollTo({ top: el.offsetTop - 52, behavior: 'smooth' });
						}}
					>
						View my work →
					</button>
					<a class="btn-ghost" href="mailto:mmoraga.m3@gmail.com">Get in touch</a>
				</div>
			</div>

			<!-- Photo -->
			<div class="anim-right hero-photo-wrap" style="animation-delay: 0.25s; flex: 1;">
				<div style="line-height: 0;">
					<img
						src={profile.avatar}
						alt={profile.name}
						class="hero-photo"
						style="width: 100%; aspect-ratio: 4/5; object-fit: cover; object-position: center top; display: block; max-height: 80vh;"
					/>
				</div>
			</div>
		</div>
	{/if}
</section>

<!-- ── Stats Bar ───────────────────────────────────────────────── -->
{#if mounted}
	<div style="background: #111; color: #f5f4f0;">
		<div
			class="stats-grid"
			style="max-width: 72rem; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr);"
		>
			{#each statTargets as stat, i (stat.label)}
				<div style="border-right: {i < 3 ? '1px solid #222' : 'none'}; padding: 2rem 1.5rem;">
					<div
						style="font-size: clamp(2.2rem,5vw,3.5rem); font-weight: 700; line-height: 1; letter-spacing: -0.04em; margin-bottom: 8px;"
					>
						{statValues[i]}{stat.suffix}
					</div>
					<div
						style="font-size: 10px; color: #aaa; text-transform: uppercase; letter-spacing: 0.1em; line-height: 1.5; white-space: pre-line;"
					>
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}

<!-- ── Experience & Skills ────────────────────────────────────── -->
{#if mounted}
	<section id="experience" class="reveal section-pad" style="padding: 4rem 2rem; border-top: 1px solid #dddbd5; animation-delay: 0.1s;">
		<div style="max-width: 72rem; margin: 0 auto;">
			<!-- Section pill -->
			<div style="display: inline-flex; align-items: center; padding: 5px 12px; border: 1px solid #d8d5d0; font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 2.5rem;">
				Experience &amp; Skills
			</div>

			<!-- Tabs -->
			<div class="tabs-row" style="border-bottom: 1px solid #dddbd5; display: flex;">
				{#each [['exp','Experience'],['skills','Skills'],['projects','Projects']] as [id, label] (id)}
					<button
						onclick={() => (activeTab = id as typeof activeTab)}
						style="
							padding: 11px 18px; background: none; border: none; border-bottom: 1.5px solid {activeTab === id ? '#111' : 'transparent'};
							cursor: pointer; font-family: inherit; font-size: 11px; margin-bottom: -1px;
							color: {activeTab === id ? '#111' : '#aaa'}; font-weight: {activeTab === id ? 600 : 400};
							transition: color 0.15s, border-color 0.15s;
						"
					>{label}</button>
				{/each}
			</div>

			<!-- Experience Tab -->
			{#if activeTab === 'exp'}
				<div style="padding: 2rem 0;">
					{#each experiences as exp (exp.company)}
						<div style="border-bottom: 1px solid #e8e5e0;">
							<div
								class="exp-row"
								style="display: grid; grid-template-columns: 1.2fr 1.4fr auto; gap: 1rem; align-items: start; padding: 1.1rem 0; cursor: auto;"
							>
								<span style="font-size: 11px; font-weight: 600; color: #111;">{exp.company}</span>
								<span style="font-size: 11px; color: #666;">{exp.role}</span>
								<span style="font-size: 10px; color: #aaa; white-space: nowrap;">{exp.duration}</span>
							</div>
							<Accordion.Root type="single">
								<Accordion.Item value="details">
									<Accordion.Trigger>
										<span style="font-size: 11px; color: #aaa; cursor: pointer;">Details</span>
									</Accordion.Trigger>
									<Accordion.Content>
										<div style="padding-bottom: 1.25rem;">
											<ul style="margin-bottom: 1rem; display: flex; flex-direction: column; gap: 8px;">
												{#if Array.isArray(exp.description)}
													{#each exp.description as desc (desc)}
														<li style="display: flex; align-items: flex-start; gap: 10px; font-size: 11px; color: #777; line-height: 1.75;">
															<span style="color: #bbb; flex-shrink: 0; margin-top: 2px;">+</span>
															<span>{desc}</span>
														</li>
													{/each}
												{:else}
													<li style="display: flex; align-items: flex-start; gap: 10px; font-size: 11px; color: #777; line-height: 1.75;">
														<span style="color: #bbb; flex-shrink: 0;">+</span>
														<span>{exp.description}</span>
													</li>
												{/if}
											</ul>
											<div style="display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: {exp.gif ? '1rem' : '0'};">
												{#each exp.technologies as tech (tech)}
													<span class="skill-pill">{tech}</span>
												{/each}
											</div>
											{#if exp.gif}
												<img
													src={exp.gif}
													alt="Demo"
													style="max-width: 100%; opacity: 0.85; border: 1px solid #ddd;"
												/>
											{/if}
										</div>
									</Accordion.Content>
								</Accordion.Item>
							</Accordion.Root>
						</div>
					{/each}
				</div>
			{/if}

			<!-- Skills Tab -->
			{#if activeTab === 'skills'}
				<div style="padding: 2rem 0;">
					<div style="display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 1.75rem;">
						{#each ['all', ...cats] as cat (cat)}
							<button
								onclick={() => (selectedCat = cat)}
								style="
									padding: 3px 10px; border: 1px solid {selectedCat === cat ? '#111' : '#d8d5d0'};
									background: transparent; color: {selectedCat === cat ? '#111' : '#aaa'};
									font-size: 10px; font-family: inherit; text-transform: capitalize;
									cursor: pointer; transition: all 0.15s;
								"
							>{cat}</button>
						{/each}
					</div>
					{#each cats.filter((c) => selectedCat === 'all' || c === selectedCat) as cat (cat)}
						<div style="margin-bottom: 1.25rem;">
							<div style="font-size: 9px; color: #bbb; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px;">{cat}</div>
							<div style="display: flex; flex-wrap: wrap; gap: 5px;">
								{#each technologyCategories[cat as keyof typeof technologyCategories].techs as tech (tech.name)}
									<span class="skill-pill">
										{tech.name}
										<span style="color: #ccc; margin-left: 3px;">{tech.level[0]}</span>
									</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			{/if}

			<!-- Projects Tab -->
			{#if activeTab === 'projects'}
				<div style="padding: 2rem 0;">
					{#each projects as project, i (project.name)}
						<button
							onclick={() => (openProject = i)}
							style="
								width: 100%; display: flex; justify-content: space-between; align-items: center;
								padding: 1.1rem 0; background: none; border: none; border-bottom: 1px solid #e8e5e0;
								cursor: pointer; font-family: inherit; font-size: 11px; color: #111; text-align: left;
								transition: opacity 0.15s;
							"
							onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.55')}
							onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
						>
							<span>{project.name}</span>
							<ExternalLink size={12} style="color: #ccc; flex-shrink: 0;" />
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</section>
{/if}

<!-- Project Dialog -->
{#if openProject !== null}
	{@const p = projects[openProject]}
	<Dialog.Root open={true} onOpenChange={(o) => { if (!o) openProject = null; }}>
		<Dialog.Content style="background: #fff; border: 1px solid #dddbd5; color: #111; max-width: 420px;">
			<Dialog.Header>
				<Dialog.Title style="font-size: 0.95rem; font-weight: 600;">{p.name}</Dialog.Title>
				<Dialog.Description style="font-size: 11px; color: #777; line-height: 1.65;">{p.description}</Dialog.Description>
			</Dialog.Header>
			<div style="text-align: center; padding-top: 0.5rem;">
				<div style="font-size: 10px; color: #aaa; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Stack</div>
				<div style="display: flex; flex-wrap: wrap; gap: 5px; justify-content: center; margin-bottom: 1.25rem;">
					{#each p.technologies as tech (tech)}
						{@const info = getTechCategoryInfo(tech)}
						<span class="skill-pill" title={info.category}>{tech}</span>
					{/each}
				</div>
				{#if p.link}
					<a
						href={p.link}
						target="_blank"
						rel="noopener noreferrer"
						class="btn-ink"
						style="margin: 0 auto; font-size: 10px; padding: 8px 20px;"
					>
						View Project →
					</a>
				{/if}
			</div>
		</Dialog.Content>
	</Dialog.Root>
{/if}

<!-- ── Education ──────────────────────────────────────────────── -->
{#if mounted}
	<section
		id="education"
		class="reveal section-pad"
		style="padding: 4rem 2rem; animation-delay: 0.2s; background: #efede9; border-top: 1px solid #dddbd5;"
	>
		<div style="max-width: 72rem; margin: 0 auto;">
			<div style="display: inline-flex; align-items: center; padding: 5px 12px; border: 1px solid #d8d5d0; font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 2.5rem;">
				Education
			</div>
			<div>
				{#each education as edu, i (edu.institution)}
					<div
						style="
							display: flex; justify-content: space-between; align-items: flex-start;
							flex-wrap: wrap; gap: 10px; padding: 1.25rem 0;
							border-bottom: {i < education.length - 1 ? '1px solid #dddbd5' : 'none'};
						"
					>
						<div style="flex: 1;">
							<h3 style="font-size: 0.88rem; font-weight: 600; margin-bottom: 5px;">
								<a
									href={edu.href}
									target="_blank"
									rel="noopener noreferrer"
									style="color: #111; text-decoration: none; transition: opacity 0.18s;"
									onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.55')}
									onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
								>{edu.degree}</a>
							</h3>
							<p style="font-size: 11px; color: #888; margin-bottom: 8px;">{edu.institution}</p>
							{#if edu.details}
								<p style="font-size: 11px; color: #aaa; line-height: 1.65; max-width: 60ch;">{edu.details}</p>
							{/if}
						</div>
						<span style="font-size: 10px; color: #bbb; white-space: nowrap; padding-top: 2px;">{edu.duration}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- ── Blog ───────────────────────────────────────────────────── -->
{#if mounted}
	{@const featured = data.posts.find((p) => p.featured)}
	{@const regular = data.posts.filter((p) => !p.featured)}
	<section
		id="blog"
		class="reveal section-pad"
		style="padding: 4rem 2rem 5rem; animation-delay: 0.3s; border-top: 1px solid #dddbd5;"
	>
		<div style="max-width: 72rem; margin: 0 auto;">
			<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">
				<div style="display: inline-flex; align-items: center; padding: 5px 12px; border: 1px solid #d8d5d0; font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 0.12em;">
					Blog
				</div>
			</div>

			{#if featured}
				<a
					href="/blog/{featured.slug}"
					style="display: block; text-decoration: none; color: inherit; border-top: 2px solid #111; padding-top: 1.75rem; margin-bottom: 2.5rem; transition: opacity 0.2s;"
					onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
					onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
				>
					<div style="font-size: 9px; color: #aaa; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 14px;">Featured</div>
					<h3 style="font-size: clamp(1.1rem,2.5vw,1.5rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; margin-bottom: 12px; max-width: 20ch;">{featured.title}</h3>
					<p style="font-size: 12px; color: #999; line-height: 1.75; max-width: 55ch; margin-bottom: 1.25rem;">{featured.excerpt}</p>
					<div style="display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 14px;">
						{#each featured.tags as tag (tag)}
							<span class="skill-pill">{tag}</span>
						{/each}
					</div>
					<div style="display: flex; gap: 12px; font-size: 10px; color: #bbb;">
						{#if featured.readTime}<span>{featured.readTime} read</span><span>·</span>{/if}
						<span>{featured.date}</span>
					</div>
				</a>
			{/if}

			<div
				class="blog-grid"
				style="display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-top: 1px solid #dddbd5;"
			>
				{#each regular as post, i (post.title)}
					<a
						href="/blog/{post.slug}"
						class={i === 0 ? 'blog-border' : ''}
						style="display: block; text-decoration: none; color: inherit; padding: 1.75rem; border-right: {i === 0 ? '1px solid #dddbd5' : 'none'}; transition: background 0.2s;"
						onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.background = '#efede9')}
						onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
					>
						<div style="display: flex; gap: 12px; font-size: 10px; color: #bbb; margin-bottom: 10px;">
							{#if post.readTime}<span>{post.readTime} read</span><span>·</span>{/if}
							<span>{post.date}</span>
						</div>
						<h3 style="font-size: 0.85rem; font-weight: 600; margin-bottom: 8px; line-height: 1.35;">{post.title}</h3>
						<p style="font-size: 11px; color: #aaa; line-height: 1.7; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">{post.excerpt}</p>
						<div style="display: flex; gap: 4px; margin-top: 12px; flex-wrap: wrap;">
							{#each post.tags as tag (tag)}
								<span class="skill-pill">{tag}</span>
							{/each}
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}
