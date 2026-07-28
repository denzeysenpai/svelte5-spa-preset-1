<script lang="ts">
	import { onMount } from 'svelte';
	import { currentRoute, refreshRouteFromLocation, type RouteDefinition } from './index';
	import NotFound from './NotFound.svelte';

	interface Props {
		routes?: RouteDefinition[];
	}

	let { routes }: Props = $props();

	const handlePopState = () => {
		refreshRouteFromLocation(routes);
	};

	onMount(() => {
		refreshRouteFromLocation(routes);
		window.addEventListener('popstate', handlePopState);
		return () => window.removeEventListener('popstate', handlePopState);
	});
</script>

{#if $currentRoute && $currentRoute.component}
	<!-- svelte-ignore svelte_component_deprecated -->
	<svelte:component this={$currentRoute.component} />
{:else}
	<NotFound />
{/if}
