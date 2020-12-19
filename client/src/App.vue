<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/portfolio">Portfolio</router-link> |
    <router-link to="/contact">Contact</router-link> |
  </div>
  <router-view />
</template>

<style>
:root {
  --primary: #000000;
  --primary-darken: #000000;
  --secondary: #ffffff;
  --secondary-darken: #ffffff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background: var(--secondary);
  color: var(--primary);
  line-height: 26px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  color: var(--primary);
}

h1:not(:last-child),
h2:not(:last-child),
h3:not(:last-child),
h4:not(:last-child),
h5:not(:last-child),
h6:not(:last-child) {
  margin-bottom: 25px;
}

a {
  text-decoration: none;
  -webkit-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  transition: 0.3s ease;
}

a:hover {
  color: #ff2c2c;
}

a:hover,
a:focus,
a:active {
  color: inherit;
  text-decoration: none;
}

a:focus {
  outline: inherit;
}

a:hover,
a:active {
  outline: 0;
}

/*.main-color {
  color: #ff4a57;
}*/

.section-title {
  margin-bottom: 20px;
}

ul,
ol {
  padding-left: 20px;
}

li > ul,
li > ol {
  margin-bottom: 0;
  margin-left: 15px;
}

/*.error-btn {
  background-color: #ff4a57;
  color: #fff !important;
  padding: 15px 50px;
  border: 2px solid #ff4a57;
  border-radius: 100px;
  margin-bottom: 25px;
}*/
</style>
