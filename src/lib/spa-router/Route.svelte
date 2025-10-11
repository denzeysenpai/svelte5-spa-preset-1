<script lang="ts">
	import { derived } from 'svelte/store';
	import { onDestroy } from 'svelte';
	import { CurrentPath } from './exports.svelte';

	let { path, component } = $props();
	const fullPath = '/?view=' + path;
	const normalized = fullPath.replace(/\/+/g, '/');
	const active = derived(CurrentPath, ($p) => $p.startsWith(normalized));

	// svelte-ignore non_reactive_update
	let Component: any = null;
	let unsub = active.subscribe((val) => {
		Component = val ? component : null;
	});

	onDestroy(() => unsub && unsub());
</script>

{#if Component}
	<!-- svelte-ignore svelte_component_deprecated -->
	<!-- svelte-ignore slot_element_deprecated -->
	<svelte:component this={Component}>
		<slot base={normalized} />
	</svelte:component>
{/if}
