<template>
	<div class="ContactForm">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<div class="contactForm">
						<form id="contact-form" method="POST" noValidate>
							<div class="row formRow">
								<div class="col-6">
									<input
										type="text"
										name="name"
										class="form-control formInput"
										placeholder="Name"
										noValidate
									/>
								</div>
								<div class="col-6">
									<input
										type="email"
										name="email"
										class="form-control formInput"
										placeholder="Email address"
									/>
								</div>
							</div>

							<div class="row formRow">
								<div class="col">
									<input
										type="text"
										name="subject"
										class="form-control formInput"
										placeholder="Subject"
									/>
								</div>
							</div>

							<div class="row formRow">
								<div class="col">
									<textarea
										rows="5"
										name="message"
										class="form-control formInput"
										placeholder="Message"
									/>
								</div>
							</div>
							<button class="submit-btn" type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContactForm',
};
</script>
