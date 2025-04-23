<script lang="ts">
	import { onMount } from 'svelte';
	import { controllers, type PageComponent } from './routeController.svelte';

	let { routes } = $props();
	let loadIn = $state(false);
	let reload = $state(false);

	onMount(() => {
		controllers.InitializeRoutes(routes, () => {
			reload = !reload;
		});
		controllers.FetchRouteFromUrl();
		loadIn = true;
	});

	$effect(() => {
		reload = reload;
		loadIn = false;
		loadIn = true;
	});

	/**
	 * Code in this file should not be edited to avoid breaking
	 */
</script>

{#if loadIn}
	<div class="page-comp">
		<controllers.CurrentRoute />
	</div>
{/if}
