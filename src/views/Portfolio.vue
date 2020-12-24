<template>
	<div class="portfolio">
		<Projects />
	</div>
</template>

<script>
	import Projects from '@/components/Projects.vue';
	export default {
		name: 'Portfolio',
		components: {
			Projects,
		},
	};
</script>