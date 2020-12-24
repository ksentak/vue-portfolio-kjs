<template>
	<div class="contact">
		<ContactInfo />
		<ContactForm />
	</div>
</template>

<script>
	import ContactInfo from '@/components/ContactInfo.vue';
	import ContactForm from '@/components/ContactForm.vue';
	export default {
		name: 'Contact',
		components: {
			ContactInfo,
			ContactForm,
		},
	};
</script>