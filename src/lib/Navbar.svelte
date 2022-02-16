<script>
	import { browser } from '$app/env';
	import { page } from '$app/stores';

	const links = [
		{
			text: '',
			link: '/'
		},
		{
			text: 'Console',
			link: 'https://console.hello.coop' //TODO: local or prod
		},
		{
			text: 'Documentation',
			link: '/documentation'
		},
		{
			text: 'FAQs',
			link: '/faqs'
		}
	];

	let showLinks = false;
</script>

<nav
	class="fixed w-full top-0 z-50 h-12 px-4 text-white bg-charcoal flex items-center justify-between"
>
	<div class="inline-flex items-center">
		<button on:click={() => (showLinks = !showLinks)}>
			{#if showLinks}
				<!-- Close icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{:else}
				<!-- Hamburger menu -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			{/if}
		</button>
		<span class="ml-2 font-medium"
			>Hellō {browser && links.find((i) => i.link === $page.url.pathname).text}</span
		>
	</div>
</nav>

{#if showLinks}
	<ul class="fixed top-12 z-50 bg-charcoal text-white p-4 space-y-4 w-64 inline-block">
		{#each links as { text, link }}
			{#if link !== $page.url.pathname && link !== '/'}
				<li>
					<a href={link} on:click={() => (showLinks = false)}>{text}</a>
				</li>
			{/if}
		{/each}
	</ul>
	<div
		on:click={() => (showLinks = false)}
		class="fixed top-0 z-40 bg-black bg-opacity-20 w-full h-full"
	/>
{/if}
