import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

export const useOverlayStore = defineStore('overlay', () => {
	const route = useRoute();
	const isMenuOpen = ref(false);

	watch(
		() => route.path,
		() => {
			isMenuOpen.value = false;
		},
	);

	return { route, isMenuOpen };
});
