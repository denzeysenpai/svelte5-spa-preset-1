<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Routes } from './routes.svelte';
	import { RouteTo, VIEW_PREFIX } from '.';
	import { page } from '$app/state';

	let { children } = $props();

	function isActive(routePath: string): boolean {
		const currentView = page.url.searchParams.get('view');
		return currentView === routePath;
	}

	function navigateTo(path: string) {
		RouteTo(path);
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="app-header">
	<nav class="nav-container">
		{#each Routes as route}
			<button
				class="nav-link"
				class:active={isActive(route.path)}
				onclick={() => navigateTo(route.path)}
			>
				{route.path.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
			</button>
		{/each}
	</nav>
</header>

<main class="app-content">
	{@render children?.()}
</main>

<style>
	.app-header {
		background: linear-gradient(135deg, #f4d03f 0%, #ffa500 100%);
		padding: 1rem 2rem;
		border-bottom: 4px solid #d2691e;
		box-shadow: 0 4px 15px rgba(139, 69, 19, 0.4);
	}

	.nav-container {
		display: flex;
		gap: 1.5rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.nav-link {
		background: rgba(255, 255, 255, 0.2);
		border: 2px solid transparent;
		color: #8b4513;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		padding: 0.6rem 1.2rem;
		border-radius: 25px;
		transition: all 0.2s ease;
		text-transform: capitalize;
		backdrop-filter: blur(5px);
	}

	.nav-link:hover {
		color: #5c2e0c;
		background: rgba(255, 255, 255, 0.4);
		border-color: #8b4513;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
	}

	.nav-link.active {
		color: #fff8dc;
		background: #8b4513;
		border-color: #5c2e0c;
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.app-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}
</style>
