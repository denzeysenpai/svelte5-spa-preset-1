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
			<!-- = -->
			<div class="upper">
				<h1>{businessName}</h1>
				<p>{businessShortMessage}</p>
			</div>
			<!-- = -->
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
		<!-- = -->
		<div class="floating-box-foo" id="logo">
			<img src="" alt="logo element here" class="floating-logo" />
		</div>
		<!-- = -->
		<img src={Assets.LandingPageBG} alt="" srcset="" class="landing-page-bg" />
	</section>
	<!-- LANDING PAGE SECTION -->

	<!-- SUMMARY OF ABOUT US OR INTRODUCTION -->
	<section class="summary">
		<div class="content" style="flex-direction: row;">
			<div class="left-box">
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img src="" alt="Object image here" class="summary-img" />
				<span class="border" id="el1"></span>
				<span class="border" id="el2"></span>
			</div>
			<div class="right-box">
				<h1>Business summary here!</h1>
				<p class="section-typography">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo doloremque, architecto
					necessitatibus dignissimos, totam animi saepe enim accusamus modi cupiditate quisquam.
					Atque, corporis nihil.
				</p>
			</div>
		</div>
		<div class="content" style="flex-direction: row;">
			<div class="left-box">
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img src="" alt="Object image here" class="summary-img" />
				<span class="border" id="el1"></span>
				<span class="border" id="el2"></span>
			</div>
			<div class="right-box">
				<h1>Business summary here!</h1>
				<p class="section-typography">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo doloremque, architecto
					necessitatibus dignissimos, totam animi saepe enim accusamus modi cupiditate quisquam.
					Atque, corporis nihil.
				</p>
			</div>
		</div>
		<div class="content" style="flex-direction: row;">
			<div class="left-box">
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img src="" alt="Object image here" class="summary-img" />
				<span class="border" id="el1"></span>
				<span class="border" id="el2"></span>
			</div>
			<div class="right-box">
				<h1>Business summary here!</h1>
				<p class="section-typography">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo doloremque, architecto
					necessitatibus dignissimos, totam animi saepe enim accusamus modi cupiditate quisquam.
					Atque, corporis nihil.
				</p>
			</div>
		</div>
	</section>
	<!-- SUMMARY OF ABOUT US OR INTRODUCTION -->

	<!-- VISUALS -->
	<!-- VISUALS -->

	<!-- CALL TO ACTION -->
	<!-- CALL TO ACTION -->
</main>
