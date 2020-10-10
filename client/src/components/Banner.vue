<template>
  <div class="Banner">
    <Particles class="particles" params="{paramConfig}" />
    <div class="jumbotron jumbotron-fluid">
      <div class="banner-content">
        <h1><span class="color-theme">Keaton</span> Sentak</h1>
        <h6>Full-Stack Developer</h6>
        <Socials />
      </div>
    </div>
  </div>
</template>

<script>
import Socials from '@/components/Socials.vue';

export default {
  name: 'Banner',
  components: {
    Socials,
  },
};
</script>
