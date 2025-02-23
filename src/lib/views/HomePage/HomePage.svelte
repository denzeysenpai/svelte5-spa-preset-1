<script lang="ts">
	import * as Assets from '../../assets/assets.svelte';
	import './style.css';
	let businessName = 'Business Name';
	let businessShortMessage = 'Add your short message here!';
</script>

<main class="main-page-content">
	<!-- LANDING PAGE SECTION -->
	<section class="landing-page">
		<div class="floating-box-foo" id="actions">
			<div class="upper">
				<h1>{businessName}</h1>
				<p>{businessShortMessage}</p>
			</div>
			<div class="lower">
				<button id="action-1">
					<p>Action 1</p>
					<span class="button-effect" id="mask"></span>
					<span class="button-effect" id="bg"></span>
				</button>
				<button id="action-2">
					<p>Action 2</p>
					<span class="button-effect" id="mask"></span>
					<span class="button-effect" id="bg"></span>
				</button>
			</div>
		</div>
		<div class="floating-box-foo" id="logo">
			<img src="" alt="logo element here" class="floating-logo" />
		</div>
		<img src={Assets.LandingPageBG} alt="" srcset="" class="landing-page-bg" />
	</section>
	<!-- LANDING PAGE SECTION -->

	<!-- SUMMARY OF ABOUT US OR INTRODUCTION -->
	<!-- SUMMARY OF ABOUT US OR INTRODUCTION -->

	<!-- VISUALS -->
	<!-- VISUALS -->

	<!-- CALL TO ACTION -->
	<!-- CALL TO ACTION -->
</main>
