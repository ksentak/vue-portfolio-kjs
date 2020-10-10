<template>
  <div class="Socials">
    <div class="col-sm-12 text-center">
      <ul class="social-list">
        <!-- LinkedIn -->
        <li class="social-inline-item">
          <a href="https://www.linkedin.com/in/ksentak/" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" fixed-width />
          </a>
        </li>
        <!-- GitHub -->
        <li class="social-inline-item">
          <a href="https://github.com/ksentak" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" fixed-width />
          </a>
        </li>
        <!-- Stack Overflow -->
        <li class="social-inline-item">
          <a href="https://stackoverflow.com/story/ksentak" target="_blank">
            <font-awesome-icon :icon="['fab', 'stack-overflow']" fixed-width />
          </a>
        </li>
        <!-- Email -->
        <li class="social-inline-item">
          <a href="https://medium.com/@ksentak" target="_blank">
            <font-awesome-icon :icon="['fab', 'medium']" fixed-width />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Socials',
};
</script>
