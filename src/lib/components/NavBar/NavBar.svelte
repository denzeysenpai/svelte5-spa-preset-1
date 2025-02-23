<script lang="ts">
	import { controllers } from '$lib/routing/routeController.svelte';
	import { onMount } from 'svelte';
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

	const anchors = [
		{
			mobile: 'home_id_mobile',
			desktop: 'home_id'
		},
		{
			mobile: 'contact_us_id_mobile',
			desktop: 'contact_us_id'
		},
		{
			mobile: 'about_id_mobile',
			desktop: 'about_id'
		}
	];

	function _setAnchorToActive(id: string) {
		anchors.forEach((anchor) => {
			if (id == anchor.desktop || id == anchor.mobile) {
				const anch1 = document.querySelector('#' + anchor.desktop);
				const anch2 = document.querySelector('#' + anchor.mobile);

				if (anch1 && anch2) {
					if (!anch1.classList.contains('active')) anch1.classList.toggle('active');
					if (!anch2.classList.contains('active')) anch2.classList.toggle('active');
				}
			} else {
				const anch1 = document.querySelector('#' + anchor.desktop);
				const anch2 = document.querySelector('#' + anchor.mobile);

				if (anch1 && anch2) {
					if (anch1.classList.contains('active')) anch1.classList.toggle('active');
					if (anch2.classList.contains('active')) anch2.classList.toggle('active');
				}
			}
		});
	}
	onMount(() => {
		_setAnchorToActive(controllers.CurrentPath + '_id');
	});
</script>

<div class="page-base">
	<header class="web-header" id="desktop-only">
		<div class="logo-container">
			<div class="logo-sect">
				<p>Business Name</p>
				<img id="logo" src="" alt="Business Logo" />
			</div>
		</div>
		<nav class="anchor-container">
			{#each routes as route}
				<button
					class="anchor"
					onclick={() => {
						controllers.RouteTo(route.path);
						_setAnchorToActive(route.id);
					}}
					id={route.id}
					name={route.name}
				>
					{route.text}
				</button>
			{/each}
		</nav>
	</header>
	<div class="content-and-mobile-nav" id="content-page-dynamic">
		<div class="content">
			<span class="nav-bar-spacer" id="desktop-only">spacer</span>
			{@render children()}
		</div>
		<nav class="mobile-anchor-container" id="mobile-only">
			<div class="anchor-container">
				{#each routes as route}
					<button
						class="mobile-anchor"
						onclick={() => {
							route.handler();
							_mobileNavHandler();
							_setAnchorToActive(route.id + '_mobile');
						}}
						id={route.id + '_mobile'}
						name={'Mobile ' + route.name}
					>
						{route.text}
					</button>
				{/each}
			</div>
		</nav>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class="mobile-nav-toggle" onclick={_mobileNavHandler} id="mobile-only">
			<span id="bars"></span>
			<span id="bars"></span>
			<span id="bars"></span>
		</button>
	</div>
</div>
