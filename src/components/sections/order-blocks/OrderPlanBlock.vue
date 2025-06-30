<script setup lang="ts"></script>

<template>
	<div class="order__plan order-plan">
		<div class="order-plan__list">
			<div class="order-plan__item">
				<div class="order-plan__item-icon">
					<img class="order-plan__item-img" src="/icons/search-offer.svg" alt="search offer" />
					<div class="item-icon item-icon__search"></div>
				</div>
				<p class="order-plan__item-descr">Lorem ipsum dolor sit amet</p>
			</div>
			<div class="order-plan__dots">
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
			</div>
			<div class="order-plan__item">
				<div class="order-plan__item-icon">
					<img class="order-plan__item-img" src="/icons/order-discount.svg" alt="search offer" />
					<div class="item-icon item-icon__discount"></div>
				</div>
				<p class="order-plan__item-descr">Сonsecteturadipiscing elit</p>
			</div>
			<div class="order-plan__dots">
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
			</div>
			<div class="order-plan__item">
				<div class="order-plan__item-icon">
					<img class="order-plan__item-img" src="/icons/send-order.svg" alt="search offer" />
					<div class="item-icon item-icon__order"></div>
				</div>
				<p class="order-plan__item-descr">Sed do eiusmod tempor</p>
			</div>
			<div class="order-plan__dots">
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
			</div>
			<div class="order-plan__item">
				<div class="order-plan__item-icon">
					<img class="order-plan__item-img" src="/icons/confirm-order.svg" alt="search offer" />
					<div class="item-icon item-icon__confirm"></div>
				</div>
				<p class="order-plan__item-descr">Esse cillum dolore eu fugiat</p>
			</div>
			<div class="order-plan__dots">
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
				<span class="order-plan__dots-item"></span>
			</div>
			<div class="order-plan__item">
				<div class="order-plan__item-icon">
					<img class="order-plan__item-img" src="/icons/order-payment.svg" alt="search offer" />
					<div class="item-icon item-icon__payment"></div>
				</div>
				<p class="order-plan__item-descr">Excepteur sint occaecat cupidatat non proident</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use '../../../assets/scss/base/common' as *;
	@use '../../../assets/scss/base/mixins' as *;
	@use '../../../assets/scss/base/variables' as *;

	.order-plan {
		margin-bottom: 80px;
		// .order-plan__list
		&__list {
			display: flex;
			justify-content: space-between;
			// column-gap: 30px;
		}
		// .order-plan__item
		&__item {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 1 0 209px;
			row-gap: 20px;
			padding: 0 10px;
		}
		// .order-plan__item-icon
		&__item-icon {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100px;
			height: 100px;
			max-width: 100px;
			max-height: 100px;
			background-color: $color-blue-1;
			border-radius: 100%;
			border: 5px solid $color-blue-3;
			cursor: pointer;
			transition: 0.3s ease-in-out;
			&:hover {
				background-color: $color-white;
				.item-icon {
					background-color: $color-blue-1;
				}
			}
		}
		// .order-plan__item-img
		&__item-img {
			display: none;
		}
		// .order-plan__item-descr
		&__item-descr {
			width: 100%;
			text-align: center;
		}
		// .order-plan__dots
		&__dots {
			max-width: 110px;
			display: flex;
			column-gap: 20px;
			padding-top: 47px;
			margin-left: -40px;
			margin-right: -40px;
		}
		// .order-plan__dots-item
		&__dots-item {
			display: block;
			width: 6px;
			height: 6px;
			border-radius: 100%;
			background-color: $color-light-grey-2;
		}
	}

	.item-icon {
		position: relative;
		z-index: 20;
		width: 34px;
		height: 34px;
		mask-position: center center;
		mask-repeat: no-repeat;
		mask-size: contain;
		background-color: $color-white;
		transition: 0.3s ease-in-out;
		// .item-icon__search
		&__search {
			mask-image: url('/public/icons/search-offer.svg');
		}
		// .item-icon__discount
		&__discount {
			mask-image: url('/public/icons/order-discount.svg');
		}
		// .item-icon__order
		&__order {
			mask-image: url('/public/icons/send-order.svg');
		}
		// .item-icon__confirm
		&__confirm {
			mask-image: url('/public/icons/confirm-order.svg');
		}
		// .item-icon__payment
		&__payment {
			mask-image: url('/public/icons/order-payment.svg');
		}
	}

	//==========================================================================================================================================================
	// Адаптив
	@media only screen and (max-width: 1199.98px) {
		.order-plan {
			&__item {
				flex: 0 1 179px;
			}
			&__dots-item:nth-child(-n + 2) {
				display: none;
			}
		}
	}

	@media only screen and (max-width: 991.98px) {
		.order-plan {
			&__list {
				flex-wrap: wrap;
				row-gap: 30px;
			}
			&__item {
				flex-direction: row;
				flex-basis: 50%;
			}
			&__item-icon {
				min-width: 80px;
				min-height: 80px;
				max-width: 80px;
				max-height: 80px;
				width: 100%;
				height: auto;
			}
			&__dots {
				display: none;
			}
		}
	}

	@media only screen and (max-width: 767.98px) {
		.order-plan {
			margin-bottom: 40px;
			&__list {
				// flex-direction: column;
				row-gap: 30px;
			}
			&__item {
				column-gap: 10px;
			}
			&__item-descr {
				text-align: left;
			}
		}
	}

	@media only screen and (max-width: 575.98px) {
		.order-plan {
			&__list {
				flex-direction: column;
				row-gap: 15px;
			}
			&__item-icon {
				min-width: 60px;
				min-height: 60px;
				max-width: 60px;
				max-height: 60px;
				width: 100%;
				height: auto;
				.item-icon {
					width: 24px;
					height: 24px;
				}
			}
		}
	}
</style>
