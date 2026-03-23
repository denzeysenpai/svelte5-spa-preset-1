<script lang="ts">
</script>

<div class="cheese-container">
	<div class="cheese-card">
		<div class="cheese-icon">🧀</div>
		<h1 class="cheese-title">About Our Cheese</h1>
		<div class="cheese-content">
			<p class="cheese-text">
				Welcome to the cheesiest application on the web! We're dedicated to bringing you the finest
				digital cheese experience.
			</p>
			<div class="cheese-facts">
				<h3>🧀 Cheese Facts</h3>
				<ul>
					<li>Gouda was first mentioned in 1184</li>
					<li>There are over 1,800 types of cheese</li>
					<li>Cheddar comes from a village in England</li>
					<li>Cheese is better with friends</li>
				</ul>
			</div>
		</div>
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
		border: 3px solid #ffa500;
		border-radius: 20px;
		padding: 3rem;
		text-align: center;
		max-width: 500px;
		box-shadow:
			0 10px 30px rgba(255, 165, 0, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.cheese-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
		filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
	}

	.cheese-title {
		color: #ffa500;
		font-size: 2rem;
		margin: 0 0 1.5rem 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.cheese-content {
		text-align: left;
	}

	.cheese-text {
		color: #ffe4b5;
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.cheese-facts {
		background: rgba(244, 208, 63, 0.1);
		border-radius: 15px;
		padding: 1.5rem;
		border: 1px solid rgba(244, 208, 63, 0.3);
	}

	.cheese-facts h3 {
		color: #f4d03f;
		margin: 0 0 1rem 0;
		text-align: center;
	}

	.cheese-facts ul {
		margin: 0;
		padding-left: 1.5rem;
		color: #ffe4b5;
	}

	.cheese-facts li {
		margin-bottom: 0.5rem;
		line-height: 1.5;
	}

	.cheese-facts li::marker {
		color: #f4d03f;
	}
</style>
