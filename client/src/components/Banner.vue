<template>
	<div class="banner">
		<div class="jumbotron jumbotron-fluid">
			<div class="banner-content">
				<h1 class="banner-name">Keaton Sentak</h1>
				<h6>Full-Stack Developer</h6>
				<Socials />
			</div>
		</div>
	</div>
</template>

<script>
import Socials from '@/components/Socials';
export default {
	name: 'Banner',
	components: {
		Socials
	}
};
</script>

<style scoped>
.banner {
	position: relative;
	height: 80vh;
}

.banner-name {
	font-weight: 700;
	font-size: 80px;
	letter-spacing: 0.5px;
}

.jumbotron {
	background: none;
	color: white;
	position: absolute;
	text-align: center;
	top: 10%;
	width: 100%;
	margin: 0;
}

.banner-content h1 {
	font-size: 75px;
}
</style>
