<script lang="ts">
	import { controllers } from '$lib/routing/routeController.svelte';
	import './style.css';

	let { routes } = $props();
</script>

<header class="web-header">
	<div class="logo-container">
		<img id="logo" src="" alt="Business Logo" />
	</div>
	<nav class="anchor-container">
		{#each routes as route}
			<button
				class="anchor"
				onclick={() => {
					controllers.RouteTo(route.path);
				}}
				id={route.id}
				name={route.name}
			>
				{route.text}
			</button>
		{/each}
	</nav>
</header>
