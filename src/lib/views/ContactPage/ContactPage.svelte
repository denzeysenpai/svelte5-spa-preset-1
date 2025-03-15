<script lang="ts">
	import './style.css';
</script>

<div class="contacts-page">
	<div class="content">
		<h1>Contact us!</h1>
		<form class="grid">
			<div class="box">
				<h2>Some quirky header here!</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam molestias est
					corrupti aspernatur dignissimos similique. Recusandae porro libero saepe non repudiandae
					ab deleniti omnis unde, dicta hic quo blanditiis eius, harum consequatur similique! Animi
					sit veniam iste non! Dignissimos sit minima assumenda dicta nobis sequi laudantium debitis
					hic totam.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sunt doloribus odit
					minus aliquam rem ab pariatur molestiae laudantium aspernatur hic, veritatis, soluta earum
					fugit unde sed, tenetur totam iusto.
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, voluptatum? Possimus
					distinctio quidem voluptatem deserunt!
				</p>
			</div>
			<div class="box">
				<div class="row">
					<div class="cell">
						<label for="fName">First Name</label>
						<input type="text" id="fName" name="fName" placeholder="First Name" />
					</div>
					<div class="cell">
						<label for="lName">Last Name</label>
						<input type="text" id="lName" name="lName" placeholder="Last Name" />
					</div>
				</div>
				<div class="row">
					<div class="cell">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Your email address" />
					</div>
				</div>
				<div class="row">
					<div class="cell">
						<label for="message">Message</label>
						<textarea id="message" name="message" placeholder="Your message here!"></textarea>
					</div>
				</div>
				<div class="row">
					<div class="cell">
						<button type="submit">
							<p>Submit</p>
							<span class="button-effect" id="mask"></span>
							<span class="button-effect" id="bg"></span>
						</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
