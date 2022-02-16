<script context="module">
	import marked from 'marked';

	export async function load({ fetch }) {
		const url = 'documentation.md';
		const res = await fetch(url);
		const text = await res.text();

		if (res.ok) {
			return {
				props: {
					documentation: await marked(text)
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import { onMount } from 'svelte';

	export let documentation;
	let headings = [];

	onMount(() => {
		for (const h1 of document.querySelectorAll('h1')) {
			headings = [...headings, { text: h1.textContent, link: h1.id }];
		}

		current = window.location.hash.substring(1);
	});

	let current;
	$: current && history.replaceState(undefined, undefined, `#${current}`);

	function handleScroll() {
		for (const h1 of document.querySelectorAll('h1')) {
			if (h1.getBoundingClientRect().top < 200) {
				current = h1.id;
			}
		}
	}
</script>

<svelte:head>
	<title>Hellō Documentation</title>
</svelte:head>

<div class="flex text-charocal h-screen overflow-hidden">
	<aside class="flex-shrink-0 pt-16 h-screen w-64 p-4 bg-charcoal text-white overflow-y-auto">
		<div>
			<ul class="space-y-6 mt-4">
				{#each headings as { text, link }}
					<li>
						<a
							href="#{link}"
							on:click={() => (current = link)}
							class="text-sm {link !== current ? 'opacity-50' : ''}">{text}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</aside>

	<main class="py-24 w-full overflow-y-auto" on:scroll={handleScroll}>
		<div class="container max-w-3xl mx-auto">
			<div class="prose prose-headings:text-charcoal max-w-none">
				{@html documentation}
			</div>
		</div>
	</main>
</div>

<style>
	main {
		scroll-padding-top: 120px;
	}
</style>
