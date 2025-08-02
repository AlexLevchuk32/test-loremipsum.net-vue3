<script setup lang="ts">
	import { ref, onMounted } from 'vue';

	const mainBannerRef = ref<HTMLElement | null>(null);

	onMounted(() => {
		if (mainBannerRef.value) {
			mainBannerRef.value.classList.add('main-banner--animated');
		}
	});
</script>

<template>
	<section class="main-banner" ref="mainBannerRef">
		<div class="main-banner__bg section-bg">
			<img class="main-banner__img" src="/images/main-bg.webp" loading="lazy" alt="main background" />
			<img class="main-banner__img-small" src="/images/main-bg-2.webp" loading="lazy" alt="main background" />
		</div>
		<div class="container main-banner__container">
			<div class="main-banner__inner">
				<h1 class="main-banner__title">
					<span class="title--blue">Lorem ipsum</span>
					dolor sit
					<br />
					amet consectetur
					<span class="title--blue">adipiscing</span>
				</h1>
				<div class="main-banner__content">
					<div class="main-banner__list-ttitle">At vero eos et accusamus et iusto odio dignissimos ducimus!</div>
					<ul class="main-banner__list">
						<li class="main-banner__list-item">- Totam rem aperiam eaque ipsa</li>
						<li class="main-banner__list-item">- Sit voluptatem accusantium doloremque laudantium</li>
						<li class="main-banner__list-item">- Sed ut perspiciatis, unde omnis iste natus error</li>
					</ul>
				</div>
				<div class="main-banner__buttons">
					<a class="main-banner__btn btn btn--blue" href="#order">заказать</a>
					<a class="main-banner__btn btn btn--white" href="#">подробнее</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	@use '../../assets/scss/base/common' as *;
	@use '../../assets/scss/base/mixins' as *;
	@use '../../assets/scss/base/variables' as *;

	.main-banner {
		position: relative;
		padding: 203px 0;
		min-height: 850px;
		// min-height: 100vh;
		// .main-banner__bg
		&__bg {
		}
		// .main-banner__img
		&__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__img-small {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: none;
		}
		// .main-banner__container
		&__container {
			position: relative;
			z-index: 10;
		}
		// .main-banner__inner
		&__inner {
			max-width: 780px;
		}
		// .main-banner__title
		&__title {
			font-weight: 700;
			font-size: rem(48);
			line-height: normal;
			text-transform: uppercase;
			color: $color-black;
			margin-bottom: 80px;
		}
		// .main-banner__content
		&__content {
			margin-bottom: 80px;
		}
		// .main-banner__list-ttitle
		&__list-ttitle {
			font-weight: 700;
			font-size: rem(20);
			line-height: 1;
			color: $color-black;
			margin-bottom: 10px;
		}
		// .main-banner__list
		&__list {
			display: flex;
			flex-direction: column;
			row-gap: 5px;
		}
		// .main-banner__list-item
		&__list-item {
			font-size: rem(20);
			line-height: 1;
			color: $color-black;
		}
		// .main-banner__buttons
		&__buttons {
			display: flex;
			column-gap: 30px;
		}
		// .main-banner__btn
		&__btn {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 15px 10px;
			max-width: 183px;
			min-width: 183px;
			width: 100%;
			height: 43px;
			font-size: rem(13);
			line-height: normal;
			text-transform: uppercase;
			text-align: center;
			border-radius: 4px;
			cursor: pointer;
			transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
			box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
			&:hover {
				box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);
			}
			&:active {
				transform: translateY(2px);
				box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8);
			}
		}
	}

	.main-banner--animated {
		.main-banner__title {
			animation-name: fade-in;
			animation-duration: 0.6s;
			animation-timing-function: ease-in-out;
		}
		.main-banner__content {
			animation-name: fade-in;
			animation-duration: 0.7s;
			animation-timing-function: ease-in-out;
		}
		.main-banner__buttons {
			animation-name: fade-in;
			animation-duration: 0.8s;
			animation-timing-function: ease-in-out;
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
			transform: translateX(25%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	//==========================================================================================================================================================
	// Адаптив
	@media only screen and (max-width: 1199.98px) {
		.main-banner {
			&__title {
				font-size: rem(42);
				margin-bottom: 60px;
				br {
					display: none;
				}
			}
		}
	}

	@media only screen and (max-width: 991.98px) {
		.main-banner {
			&__title {
				font-size: rem(38);
			}
		}
	}

	@media only screen and (max-width: 767.98px) {
		.main-banner {
			padding: 140px 0;
			min-height: unset;

			&__title {
				font-size: rem(38);
				margin-bottom: 30px;
			}
			&__content {
				margin-bottom: 30px;
			}
			&__list-ttitle {
				font-size: rem(18);
			}
			&__list-item {
				font-size: rem(18);
			}
		}
	}

	@media (max-width: 575.98px) {
		.main-banner {
			&__img {
				// display: none;
				object-position: 60% center;
			}
			&__img-small {
				// display: block;
			}
			&__title {
				font-size: rem(32);
			}
			&__buttons {
				flex-direction: column;
				row-gap: 15px;
			}
			&__btn {
				max-width: 100%;
			}
		}
	}
</style>
