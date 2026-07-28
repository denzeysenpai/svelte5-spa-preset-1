<script lang="ts">
	import Router from '$lib/router/Router.svelte';
	import RouteLink from '$lib/router/RouteLink.svelte';
</script>

<div class="app-container">
	<nav class="nav-bar">
		<RouteLink to="home-page" class="nav-link">Home</RouteLink>
		<RouteLink to="about-page" class="nav-link">About</RouteLink>
	</nav>

	<main class="content">
		<Router />
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: system-ui, -apple-system, sans-serif;
	}

	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.nav-bar {
		display: flex;
		gap: 1rem;
		padding: 1rem 2rem;
		background-color: #f8fafc;
		border-bottom: 1px solid #e2e8f0;
	}

	:global(.nav-link) {
		text-decoration: none;
		color: #475569;
		font-weight: 500;
		padding: 0.5rem 0.75rem;
		border-radius: 0.375rem;
		transition: all 0.2s;
	}

	:global(.nav-link:hover) {
		color: #0f172a;
		background-color: #e2e8f0;
	}

	:global(.nav-link.active) {
		color: #2563eb;
		background-color: #dbeafe;
		font-weight: 600;
	}

	.content {
		flex: 1;
		padding: 2rem;
	}
</style>
