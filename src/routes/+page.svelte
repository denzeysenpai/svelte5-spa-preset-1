<script lang="ts">
	import Router from '$lib/spa-router/Router.svelte';
	import Route from '$lib/spa-router/Route.svelte';
	import HomePage from '$lib/views/HomePage/HomePage.svelte';
	import AboutPage from '$lib/views/AboutPage/AboutPage.svelte';
	import { Navigate } from '$lib/spa-router/exports.svelte';
</script>

<button onclick={() => Navigate('home')}>Home</button>
<button onclick={() => Navigate('about')}>About</button>

<Router>
	<Route path="home" component={HomePage} />
	<Route path="about" component={AboutPage} />
</Router>
