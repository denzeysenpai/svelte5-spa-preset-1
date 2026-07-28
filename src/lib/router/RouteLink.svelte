<script lang="ts">
	import type { Snippet } from 'svelte';
	import { routeTo, buildViewUrl, currentRoute, normalizeRouteKey } from './index';

	interface Props {
		to: string;
		replace?: boolean;
		child?: string;
		class?: string;
		children?: Snippet;
	}

	let { to, replace = false, child, class: className = '', children }: Props = $props();

	function handleClick(event: MouseEvent) {
		if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
			return;
		}
		event.preventDefault();
		routeTo(to, replace, child);
	}

	let isActive = $derived(
		$currentRoute ? normalizeRouteKey($currentRoute.path) === normalizeRouteKey(to) : false
	);
</script>

<a
	href={buildViewUrl(to, child)}
	onclick={handleClick}
	class={`${className} ${isActive ? 'active' : ''}`.trim()}
>
	{@render children?.()}
</a>
