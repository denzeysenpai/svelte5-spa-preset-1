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
</script>

{#if loadIn}
	<div class="page-comp">
		<controllers.CurrentRoute />
	</div>
{/if}
