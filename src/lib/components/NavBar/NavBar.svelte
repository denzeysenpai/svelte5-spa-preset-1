<script lang="ts">
	import { controllers } from '$lib/routing/routeController.svelte';
	import { onMount } from 'svelte';
	import * as index from '$lib';
	import './style.css';

	let { routes, children } = $props();
	const initialize = () => {
		let _Page: any = $state();
		return {
			toggle() {
				if (!_Page) {
					const Page = document.querySelector('#content-page-dynamic') as HTMLDivElement;
					_Page = Page;
				}
				_Page.classList.toggle('active');
			}
		};
	};
	const controller = initialize();
	function _mobileNavHandler() {
		controller.toggle();
	}

	onMount(() => {
		index._setAnchorToActive(controllers.CurrentPath + '_id');
	});
</script>

<div class="page-base">
	<header class="web-header" id="desktop-only">
		<!-- = -->
		<div class="logo-container">
			<!-- = -->
			<div class="logo-sect">
				<p>Business Name</p>
				<img id="logo" src="" alt="Business Logo" />
			</div>
			<!-- = -->
		</div>
		<!-- = -->
		<nav class="anchor-container">
			<!-- = -->
			{#each routes as route}
				<button
					class="anchor"
					onclick={() => {
						controllers.RouteTo(route.path);
						index._setAnchorToActive(route.id);
					}}
					id={route.id}
					name={route.name}
				>
					{route.text}
				</button>
			{/each}
			<!-- = -->
		</nav>
	</header>
	<div class="content-and-mobile-nav" id="content-page-dynamic">
		<!-- = -->
		<div class="content">
			<span class="nav-bar-spacer" id="desktop-only">spacer</span>
			{@render children()}
		</div>
		<!-- = -->
		<nav class="mobile-anchor-container" id="mobile-only">
			<!-- = -->
			<div class="anchor-container">
				{#each routes as route}
					<button
						class="mobile-anchor"
						onclick={() => {
							route.handler();
							_mobileNavHandler();
							index._setAnchorToActive(route.id + '_mobile');
						}}
						id={route.id + '_mobile'}
						name={'Mobile ' + route.name}
					>
						{route.text}
					</button>
				{/each}
			</div>
			<!-- = -->
		</nav>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class="mobile-nav-toggle" onclick={_mobileNavHandler} id="mobile-only">
			<span id="bars"></span>
			<span id="bars"></span>
			<span id="bars"></span>
		</button>
	</div>
</div>
