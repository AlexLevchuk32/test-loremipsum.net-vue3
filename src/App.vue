<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import { storeToRefs } from 'pinia';
	import { useOverlayStore } from '@/stores/Overlay';
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';

	const overlayStore = useOverlayStore();
	const { isMenuOpen } = storeToRefs(overlayStore);
</script>

<template>
	<div class="wrapper">
		<Header />

		<RouterView />

		<Footer />

		<div :class="['overlay', { active: isMenuOpen }]" @click="isMenuOpen = false"></div>
	</div>
</template>

<style lang="scss" scoped>
	// @use './assets/scss/main.scss';
	@use './assets/scss/base/common';
	@use './assets/scss/base/mixins';
	@use './assets/scss/base/variables';
</style>
