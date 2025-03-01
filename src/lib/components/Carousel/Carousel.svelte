<script lang="ts">
	import { onMount } from 'svelte';

	const inFrame = 'in-frame';
	const queue1 = 'queue-1';
	const queue2 = 'queue-2';
	const queue3 = 'queue-3';

	const initializedFrames = [
		{
			position: inFrame,
			img: '',
			text: ''
		},
		{
			position: queue1,
			img: '',
			text: ''
		},
		{
			position: queue2,
			img: '',
			text: ''
		},
		{
			position: queue3,
			img: '',
			text: ''
		}
	];

	/**
	 * Carousel states:
	 * no hover = auto scroll
	 * hover = pause scrolling
	 * controlled = pause scrolling
	 *
	 * pause scrolling time = 3s
	 * scrolling interval = 3s
	 */
</script>

<div class="carousel-container">
	<!-- = -->
	<div class="view-frame">
		<!-- = -->
		{#each initializedFrames as frame}
			<div class={'frame ' + frame.position} id={frame.position}>
				<img src={frame.img} alt={frame.text} />
				<h3>{frame.text}</h3>
			</div>
		{/each}
		<!-- = -->
	</div>
	<!-- = -->
</div>
