<script lang="ts">
	import { onMount } from 'svelte';
	import { UpdatePath } from './exports.svelte';
	let { children } = $props();

	window.addEventListener('popstate', UpdatePath);
</script>

{@render children()}
