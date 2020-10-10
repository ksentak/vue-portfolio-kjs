<template>
  <div class="Navbar">
    <nav class="navbar navbar-expand-sm">
      <div class="container">
        <button
          class="navbar-toggler ml-auto"
          type="button"
          aria-controls="navbarMobile"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarMobile">
          <ul id="menu-primary" class="navbar-nav ml-auto">
            <li>
              <router-link exact to="/" class="nav-Link"> Home </router-link>
            </li>
            <li>
              <router-link exact to="/about" class="nav-Link">
                About
              </router-link>
            </li>
            <li>
              <router-link exact to="/portfolio" class="nav-Link">
                Portfolio
              </router-link>
            </li>
            <li>
              <router-link exact to="/contact" class="nav-Link">
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
.navbar-nav .router-link-exact-active {
  color: #ff4a57;
}
</style>
