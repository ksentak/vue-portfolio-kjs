<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	:root {
		--primary: #ff4a57;
		--secondary: #1f2235;
		--secondary-light: #282c45;
	}

	body {
		font-family: Poppins;
		background: var(--secondary);
		color: #dfdfdf;
		line-height: 26px;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		word-wrap: break-word;
		color: #fff;
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
		transition: 0.3s ease;
	}

	a:hover {
		color: var(--primary);
	}

	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
	}

	.main-color {
		color: var(--primary);
	}

	.section-title {
		margin-bottom: 20px;
	}

	ul,
	ol {
		padding-left: 20px;
	}

	.red-btn {
		background-color: var(--primary);
		color: #fff !important;
		padding: 15px 50px;
		border: 2px solid var(--primary);
		border-radius: 100px;
		margin-bottom: 25px;
	}
</style>
