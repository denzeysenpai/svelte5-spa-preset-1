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
		setTimeout(() => {
			loadIn = true;
		}, 0);
	});
</script>

{#if loadIn}
	<div class="page-comp">
		<controllers.CurrentRoute />
	</div>
{/if}

<style>
	.page-comp {
		animation-name: fadeIn;
		animation-duration: 0.5s;
		margin-top: 60px;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
