import About from '$lib/views/About/About.svelte';
import Details from '$lib/views/Home/Details/Details.svelte';
import Home from '$lib/views/Home/Home.svelte';
import type { RouteObject } from '.';

// currently allows one child depth
export const Routes: RouteObject[] = [
	{
		path: 'home-page',
		component: Home,
		children: [
			{
				path: 'details',
				component: Details
			}
		]
	},
	{
		path: 'about-page',
		component: About
	}
];
