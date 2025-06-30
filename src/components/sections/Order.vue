<script setup lang="ts">
	import OrderPlanBlock from './order-blocks/OrderPlanBlock.vue';
	import OrederFormBlock from './order-blocks/OrederFormBlock.vue';
</script>

<template>
	<section class="order" id="order">
		<div class="order__bg section-bg">
			<img class="order__img" src="/images/order-bg.png" alt="" />
		</div>
		<div class="container order__container">
			<div class="order__inner">
				<h2 class="order__title">
					Оформление
					<span class="title--blue">Заказа</span>
				</h2>
				<p class="order__descr">Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>

				<OrderPlanBlock />
				<OrederFormBlock />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	@use '../../assets/scss/base/common' as *;
	@use '../../assets/scss/base/mixins' as *;
	@use '../../assets/scss/base/variables' as *;

	.order {
		position: relative;
		min-height: 920px;
		padding: 121px 0 151px;
		background-color: $color-bg-1;
		// .order__bg
		&__bg {
		}
		// .order__img
		&__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		// .order__container
		&__container {
			position: relative;
			z-index: 10;
		}
		// .order__inner
		&__inner {
			display: flex;
			flex-direction: column;
			max-width: 1170px;
		}
		// .order__title
		&__title {
			font-weight: 900;
			font-size: rem(36);
			text-transform: uppercase;
			text-align: center;
			margin-bottom: 30px;
		}
		// .order__descr
		&__descr {
			font-size: rem(18);
			color: $color-light-grey-1;
			text-align: center;
			margin-bottom: 80px;
		}
		// .order__plan
		&__plan {
		}
		// .order__form
		&__form {
		}
	}

	//==========================================================================================================================================================
	// Адаптив
	@media only screen and (max-width: 1199.98px) {
		.order {
			padding: 100px 0;
			&__title {
				font-size: rem(34);
			}
			&__descr {
				margin-bottom: 60px;
			}
		}
	}

	@media only screen and (max-width: 991.98px) {
		.order {
			padding: 90px 0;
			&__title {
				font-size: rem(32);
			}
			&__descr {
				margin-bottom: 40px;
			}
		}
	}

	@media only screen and (max-width: 767.98px) {
		.order {
			padding: 80px 0;
			&__descr {
				margin-bottom: 30px;
			}
		}
	}

	@media only screen and (max-width: 575.98px) {
		.order {
			padding: 70px 0;
			&__title {
				font-size: rem(30);
			}
			&__descr {
				font-size: rem(16);
			}
		}
	}
</style>
