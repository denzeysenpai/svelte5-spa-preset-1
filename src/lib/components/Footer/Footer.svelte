<script lang="ts">
	import { controllers } from '$lib/routing/routeController.svelte';
	import * as index from '$lib';
	import './style.css';
	import { onMount } from 'svelte';
	let { routes } = $props();
	let message = 'Add your message here!';
	let highlight = 'This is a highlight message of this website.';
	let loadIn = $state(false);
	onMount(() => {
		setTimeout(() => {
			loadIn = true;
		}, 50);
	});
</script>

{#if loadIn}
	<footer class="page-footer">
		<div class="box-container">
			<div class="box">
				<div class="upper-box">
					<div class="logo-sect">
						<img src="" alt="Business Logo" />
						<p>Business Name</p>
					</div>
					<p class="message">{message}</p>
				</div>
				<div class="contacts-container">
					<p>City, StreetName street, Country, 0000</p>
					<p>businessemail@email.com</p>
					<p>+639123456789</p>
				</div>
			</div>
			<div class="box">
				<h3>Pages</h3>
				{#each routes as route}
					<button
						class="anchor-route"
						onclick={() => {
							controllers.RouteTo(route.path);
							index._setAnchorToActive(route.id);
						}}>{route.text}</button
					>
				{/each}
			</div>
			<div class="box">
				<h3 class="highlight">{highlight}</h3>
			</div>
		</div>
		<p id="tag">@denzeysenpai - 2025</p>
	</footer>
{/if}
