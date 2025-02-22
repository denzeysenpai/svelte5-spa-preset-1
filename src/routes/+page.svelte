<script lang="ts">
	import { controllers, Page, type PageComponent } from '$lib/routing/routeController.svelte';
	import Router from '$lib/routing/router.svelte';
	import AboutPage from '$lib/views/AboutPage/AboutPage.svelte';
	import HomePage from '$lib/views/HomePage/HomePage.svelte';
	import ContactPage from '$lib/views/ContactPage/ContactPage.svelte';
	import { onMount } from 'svelte';
	let reloader = $state(false);

	// the first page added will always be the default route
	const _routes: PageComponent[] = [
		Page('home', HomePage),
		Page('about', AboutPage),
		Page('contact-us', ContactPage)
	];

	onMount(() => {});
</script>

<button
	onclick={() => {
		controllers.RouteTo('home');
	}}
>
	home
</button>
<button
	onclick={() => {
		controllers.RouteTo('about');
	}}
>
	about
</button>
<Router routes={_routes} />
