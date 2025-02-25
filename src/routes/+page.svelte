<script lang="ts">
	import { controllers, Page, type PageComponent } from '$lib/routing/routeController.svelte';
	import Router from '$lib/routing/router.svelte';
	import AboutPage from '$lib/views/AboutPage/AboutPage.svelte';
	import HomePage from '$lib/views/HomePage/HomePage.svelte';
	import ContactPage from '$lib/views/ContactPage/ContactPage.svelte';
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	let reloader = $state(false);

	/**
	 * Returns an object of a page component
	 * @param _id ID of the routing button
	 * @param _path Path to route to
	 * @param _name Name of the route
	 * @param _text Display text of the button
	 */
	const _navBarRoute = (_id: string, _path: string, _name: string, _text: string) => {
		return {
			id: _id,
			path: _path,
			name: _name,
			text: _text,
			handler: () => {
				controllers.RouteTo(_path);
			}
		};
	};
	// the first page added will always be the default route
	const _routes: PageComponent[] = [
		Page('home', HomePage),
		Page('about', AboutPage),
		Page('contact_us', ContactPage)
	];

	const _navBarRoutes = [
		_navBarRoute('home_id', 'home', 'Home Button', 'Home'),
		_navBarRoute('about_id', 'about', 'About Button', 'About'),
		_navBarRoute('contact_us_id', 'contact_us', 'Contact Us Button', 'Contact Us')
	];

	onMount(() => {});
</script>

<div class="page">
	<NavBar routes={_navBarRoutes}>
		<Router routes={_routes} />
		<Footer routes={_navBarRoutes} />
	</NavBar>
</div>
