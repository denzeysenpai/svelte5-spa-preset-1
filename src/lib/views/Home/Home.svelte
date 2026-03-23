<script lang="ts">
	import { RouteTo } from '../../../routes';
	import { page } from '$app/state';
</script>

<div class="cheese-container">
	<div class="cheese-card">
		<div class="cheese-icon">🧀</div>
		<h1 class="cheese-title">Welcome to the Cheese Zone</h1>
		<p class="cheese-description">
			This is the home of all things cheesy and delicious. Explore our gouda content below!
		</p>
		<button class="cheese-button" onclick={() => RouteTo('home-page', 'details')}>
			🧀 View Cheese Details
		</button>
	</div>
</div>

<style>
	.cheese-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 60vh;
	}

	.cheese-card {
		background: linear-gradient(145deg, #3d3221 0%, #2c2416 100%);
		border: 3px solid #f4d03f;
		border-radius: 20px;
		padding: 3rem;
		text-align: center;
		max-width: 500px;
		box-shadow:
			0 10px 30px rgba(244, 208, 63, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.cheese-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
		filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
	}

	.cheese-title {
		color: #f4d03f;
		font-size: 2rem;
		margin: 0 0 1rem 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.cheese-description {
		color: #ffe4b5;
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	.cheese-button {
		background: linear-gradient(135deg, #f4d03f 0%, #ffa500 100%);
		color: #5c2e0c;
		border: none;
		padding: 1rem 2rem;
		font-size: 1.1rem;
		font-weight: 700;
		border-radius: 30px;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(244, 208, 63, 0.4);
	}

	.cheese-button:hover {
		transform: translateY(-3px) scale(1.02);
		box-shadow: 0 8px 25px rgba(244, 208, 63, 0.6);
		background: linear-gradient(135deg, #ffd700 0%, #ff8c00 100%);
	}

	.cheese-button:active {
		transform: translateY(-1px);
	}
</style>
