<template>
	<div class="Projects">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1 class="section-title">
						<span class="main-color">Portfolio</span> Projects
					</h1>
				</div>
			</div>

			<div class="row text-center">
				<!-- Project 1 -->
				<div class="col-lg-4 col-md-6">
					<div class="portfolio-item mx-auto">
						<div
							class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
						>
							<div
								class="portfolio-item-caption-content text-center text-white"
							>
								<font-awesome-icon :icon="['fa', 'plus']" size="3x" />
							</div>
						</div>
						<img
							class="img-fluid portfolio-img"
							src="../assets/img/react-colors.png"
							alt="React-Colors"
						/>
						<p class="project-title">React Colors</p>
					</div>
				</div>

				<!-- Project 2 -->
				<div class="col-lg-4 col-md-6">
					<div class="portfolio-item mx-auto">
						<div
							class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
						>
							<div
								class="portfolio-item-caption-content text-center text-white"
							>
								<font-awesome-icon :icon="['fa', 'plus']" size="3x" />
							</div>
						</div>
						<img
							class="img-fluid portfolio-img"
							src="../assets/img/react-auth.png"
							alt="React-Auth"
						/>
						<p class="project-title">React User Authentication</p>
					</div>
				</div>

				<!-- Project 3 -->
				<div class="col-lg-4 col-md-6">
					<div class="portfolio-item mx-auto">
						<div
							class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
						>
							<div
								class="portfolio-item-caption-content text-center text-white"
							>
								<font-awesome-icon :icon="['fa', 'plus']" size="3x" />
							</div>
						</div>
						<img
							class="img-fluid portfolio-img"
							src="../assets/img/liberty-beans.png"
							alt="Liberty Beans Coffee"
						/>
						<p class="project-title">Liberty Beans Coffee</p>
					</div>
				</div>

				<!-- Project 4 -->
				<div class="col-lg-4 col-md-6">
					<div class="portfolio-item mx-auto">
						<div
							class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
						>
							<div
								class="portfolio-item-caption-content text-center text-white"
							>
								<font-awesome-icon :icon="['fa', 'plus']" size="3x" />
							</div>
						</div>
						<img
							class="img-fluid portfolio-img"
							src="../assets/img/GoogleBooks.png"
							alt="Google Books App"
						/>
						<p class="project-title">Google Books</p>
					</div>
				</div>

				<!-- Project 5 -->
				<div class="col-lg-4 col-md-6">
					<div class="portfolio-item mx-auto">
						<div
							class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
						>
							<div
								class="portfolio-item-caption-content text-center text-white"
							>
								<font-awesome-icon :icon="['fa', 'plus']" size="3x" />
							</div>
						</div>
						<img
							class="img-fluid portfolio-img"
							src="../assets/img/omega.png"
							alt="Omega"
						/>
						<p class="project-title">Omega</p>
					</div>
				</div>

				<!-- Project 6 -->
				<div class="col-lg-4 col-md-6">
					<div class="portfolio-item mx-auto">
						<div
							class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
						>
							<div
								class="portfolio-item-caption-content text-center text-white"
							>
								<font-awesome-icon :icon="['fa', 'plus']" size="3x" />
							</div>
						</div>
						<img
							class="img-fluid portfolio-img"
							src="../assets/img/time_machine.png"
							alt="Time Machine"
						/>
						<p class="project-title">Time Machine</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Projects',
};
</script>
