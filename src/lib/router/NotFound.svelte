<script lang="ts">
	import { routeTo } from './index';
</script>

<div class="not-found">
	<h1>404</h1>
	<h2>Page Not Found</h2>
	<p>The page you are looking for does not exist or has been moved.</p>
	<button onclick={() => routeTo('home-page')}>Return Home</button>
</div>

<style>
	.not-found {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
		text-align: center;
		padding: 2rem;
		font-family: system-ui, -apple-system, sans-serif;
	}

	h1 {
		font-size: 5rem;
		margin: 0;
		color: #e11d48;
		font-weight: 800;
	}

	h2 {
		font-size: 1.75rem;
		margin: 0.5rem 0 1rem 0;
		color: #1f2937;
	}

	p {
		color: #6b7280;
		margin-bottom: 1.5rem;
		max-width: 400px;
	}

	button {
		padding: 0.625rem 1.25rem;
		background-color: #2563eb;
		color: white;
		border: none;
		border-radius: 0.375rem;
		font-weight: 500;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	button:hover {
		background-color: #1d4ed8;
	}
</style>
