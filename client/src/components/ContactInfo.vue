<template>
	<div class="ContactInfo">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h1 class="section-title">
						<span class="main-color">Contact</span> Me
					</h1>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-4">
					<div class="contact-info">
						<div class="phone-info">
							<font-awesome-icon
								:icon="['fa', 'phone']"
								class="contact-icon"
								fixedWidth
							/>
							<span>Give me a call:</span>
							<p>(609) 439-3423</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="contact-info">
						<div class="email-info">
							<font-awesome-icon
								:icon="['fa', 'envelope']"
								class="contact-icon"
								fixedWidth
							/>
							<span>Send me an email:</span>
							<p>keatonsentak@gmail.com</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="contact-info">
						<div class="location-info">
							<font-awesome-icon
								:icon="['fa', 'map-marker-alt']"
								class="contact-icon"
								fixed-width
							/>
							<span>Currently located:</span>
							<p>Greater Philadelphia</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContactInfo',
};
</script>
