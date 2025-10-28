<script lang="ts">
	import { page } from '$app/state';
	import { RouteTo, VIEW_PREFIX, type RouteObject } from '.';
	import { Routes } from './routes.svelte';

	let lastPath = $state('');
	let component = $state<__sveltets_2_IsomorphicComponent | undefined>(undefined);

	$effect(() => {
		const currentPage = page.url.searchParams.get('view') ?? '';
		const currentChild = page.url.searchParams.get('sub') ?? '';

		if (!currentChild && !currentPage) {
			const firstRoute = Routes[0];
			if (firstRoute) RouteTo(firstRoute.path);
			return;
		}

		if (lastPath !== currentPage || lastPath !== currentChild) {
			lastPath = currentPage || currentChild;
			component = undefined;

			const walk = (obj: RouteObject) => {
				if (obj.path === currentPage || obj.path === currentChild) {
					if (obj.children && currentChild && obj.path !== currentChild) {
						obj.children.forEach(walk);
					} else {
						component = obj.component;
					}
				}
			};

			Routes.forEach(walk);
		}
	});
</script>

{#if component}
	<!-- svelte-ignore svelte_component_deprecated -->
	<svelte:component this={component} />
{:else}
	<p>Page not found</p>
{/if}
