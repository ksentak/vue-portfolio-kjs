<template>
	<div class="info">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1 class="section-title">
						<span class="main-color">About</span> Me
					</h1>
				</div>
			</div>
			<div class="row text-md-left text-center">
				<div class="col-md-6 mb-3">
					<img
						src="@/assets/img/profile-headshot.jpg"
						class="img-fluid profile-picture"
						alt="Profile Headshot"
					/>
				</div>
				<div class="col-md-6 about-section">
					<p class="about-text">
						A Full-Stack Developer and graduate of both Rutgers University and
						the University of Pennsylvania LPS Coding Bootcamp looking to
						contribute long-term organizational value through my knowledge of
						both front and back-end technologies. Well-versed in various web
						technologies such as JavaScript, Node.js, React.js, MongoDB and
						MySQL used to generate fully functional websites, web applications,
						and databases. Equipped to work collaboratively in a team setting to
						ensure optimal results for user and technology centered designs.
					</p>
					<a href="@/assets/files/Keaton_Sentak_Resume.pdf" target="_blank">
						<button class="resume-btn mt-2 mb-3">Download Resume</button>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Info',
	};
</script>

<style scoped>
	.profile-picture {
		height: 350px;
		width: 415px;
		border-radius: 6px;
	}

	.about-text {
		line-height: 28px;
	}

	.resume-btn {
		background-color: var(--secondary);
		color: #fff !important;
		padding: 18px 40px;
		border: 2px solid var(--primary);
		border-radius: 100px;
	}

	.resume-btn:hover {
		background-color: var(--primary);
	}
</style>