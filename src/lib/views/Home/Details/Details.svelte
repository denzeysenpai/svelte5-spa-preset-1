<script lang="ts">
</script>

<div class="cheese-container">
	<div class="cheese-card">
		<div class="cheese-icon">🧀</div>
		<h1 class="cheese-title">Cheese Details</h1>
		<div class="detail-grid">
			<div class="detail-item">
				<span class="detail-label">Type:</span>
				<span class="detail-value">Extra Sharp Cheddar</span>
			</div>
			<div class="detail-item">
				<span class="detail-label">Origin:</span>
				<span class="detail-value">Somerset, England</span>
			</div>
			<div class="detail-item">
				<span class="detail-label">Aging:</span>
				<span class="detail-value">18 months</span>
			</div>
			<div class="detail-item">
				<span class="detail-label">Texture:</span>
				<span class="detail-value">Firm & Crumbly</span>
			</div>
			<div class="detail-item">
				<span class="detail-label">Flavor:</span>
				<span class="detail-value">Rich & Nutty</span>
			</div>
		</div>
		<div class="cheese-badge">Premium Selection</div>
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
		border: 3px solid #d2691e;
		border-radius: 20px;
		padding: 3rem;
		text-align: center;
		max-width: 500px;
		box-shadow:
			0 10px 30px rgba(210, 105, 30, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.cheese-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
		filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
	}

	.cheese-title {
		color: #d2691e;
		font-size: 2rem;
		margin: 0 0 1.5rem 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.detail-grid {
		display: grid;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.detail-item {
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 1rem;
		background: rgba(255, 248, 220, 0.05);
		border-radius: 10px;
		border: 1px solid rgba(210, 105, 30, 0.2);
	}

	.detail-label {
		color: #ffa500;
		font-weight: 600;
	}

	.detail-value {
		color: #fff8dc;
	}

	.cheese-badge {
		display: inline-block;
		background: linear-gradient(135deg, #ffd700 0%, #ffa500 100%);
		color: #5c2e0c;
		padding: 0.5rem 1.5rem;
		border-radius: 20px;
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
		box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
	}
</style>
