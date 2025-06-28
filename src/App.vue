<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';
</script>

<template>
	<div class="wrapper">
		<Header />

		<RouterView />

		<Footer />
	</div>
</template>

<style lang="scss" scoped>
	// @use './assets/scss/main.scss';
	@use './assets/scss/base/common';
	@use './assets/scss/base/mixins';
	@use './assets/scss/base/variables';
</style>
