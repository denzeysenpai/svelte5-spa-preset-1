import About from '$lib/views/About/About.svelte';
import Details from '$lib/views/Home/Details/Details.svelte';
import Home from '$lib/views/Home/Home.svelte';
import type { RouteDefinition } from '$lib/router';

export const Routes: RouteDefinition[] = [
	{
		path: 'home-page',
		name: 'Home',
		component: Home,
		children: [
			{
				path: 'details',
				name: 'Details',
				component: Details
			}
		]
	},
	{
		path: 'about-page',
		name: 'About',
		component: About
	}
];
