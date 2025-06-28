<script setup lang="ts">
	import { ref } from 'vue';

	const selectOpen = ref(false);
	const selectedOption = ref<string>('Выберите тип системы');

	const options = [
		'Sed ut perspiciatis',
		'Nemo enim ipsam',
		'Et harum quidem',
		'Temporibus autem',
		'Itaque earum rerum',
		'Sed ut perspiciatis',
		'Nemo enim ipsam',
		'Et harum quidem',
		'Temporibus autem',
		'Itaque earum rerum',
		'Sed ut perspiciatis',
		'Nemo enim ipsam',
		'Et harum quidem',
		'Temporibus autem',
		'Itaque earum rerum',
	];

	const rangeValue = ref<number>(75);

	const selectItem = (option: string) => {
		selectedOption.value = option;
		selectOpen.value = false;
	};
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
				<div class="order__form">
					<form class="order-form" action="#" method="POST">
						<div class="order-form__row">
							<div class="order-form__item">
								<div
									:class="['order-form__select custom-select', { open: selectOpen }]"
									@click="selectOpen = !selectOpen"
									tabindex="0"
								>
									<div class="custom-select__header">
										<div class="custom-select__current">{{ selectedOption }}</div>
									</div>
									<div class="custom-select__list">
										<div
											class="custom-select__item"
											v-for="(option, index) in options"
											:key="index"
											@click.stop="selectItem(option)"
										>
											{{ option }}
										</div>
									</div>
								</div>
								<select
									class="order-form__select defaulth-select"
									name="order-form__select"
									id="order-form__select"
									placeholder="Выберите тип системы"
									tabindex="-1"
								>
									<option v-for="(option, index) in options" :key="index" :selected="option === selectedOption">
										{{ option }}
									</option>
								</select>
							</div>
							<div class="order-form__item">
								<input
									class="order-form__input"
									id="order-form__input"
									name="order-form__input"
									type="email"
									placeholder="Ваш e-mail"
									required
									tabindex="1"
								/>
							</div>
							<div class="order-form__item">
								<input
									class="order-form__input"
									id="order-form__name"
									name="order-form__name"
									type="text"
									placeholder="Ваше имя"
									required
									tabindex="2"
								/>
							</div>
						</div>
						<div class="order-form__row">
							<div class="order-form__item">
								<label class="order-form__range-label" for="order-form__range">
									Sed ut perspiciatis, unde omnis iste natus
									<span class="order-form__range-percent">{{ rangeValue }} %</span>
								</label>
								<input
									class="order-form__range"
									id="order-form__range"
									name="order-form__range"
									type="range"
									min="0"
									max="100"
									value="75"
									v-model="rangeValue"
									tabindex="3"
								/>
							</div>
							<div class="order-form__item">
								<input class="order-form__file" id="order-form__file" name="order-form__file" type="file" tabindex="4" />
								<label class="order-form__file-label" for="order-form__file">
									<span class="order-form__file-icon">
										<img class="order-form__file-img" src="/icons/file-upload.svg" alt="file icon" />
									</span>
									Прикрепить файл
								</label>
							</div>
						</div>
						<div class="order-form__row">
							<button class="order-form__send-btn" type="submit" tabindex="4">Отправить</button>
						</div>
					</form>
				</div>
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
		background-color: $color-main-bg;
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
			color: $color-main-white-dark;
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
			background-color: $color-main-blue;
			border-radius: 100%;
			border: 5px solid $color-main-blue-dark;
			cursor: pointer;
			transition: 0.3s ease-in-out;
			&:hover {
				background-color: $color-main-white;
				.item-icon {
					background-color: $color-main-blue;
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
			background-color: $color-main-light-grey-second;
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
		background-color: $color-main-white;
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

	.order-form {
		display: flex;
		flex-direction: column;
		width: 100%;
		// .order-form__row
		&__row {
			display: flex;
			&:nth-child(1) {
				column-gap: 30px;
				margin-bottom: 30px;
				.order-form__item {
					display: flex;
					align-items: center;
					flex: 1 1 370px;
					height: 48px;
					font-size: rem(18);
					color: $color-main-light-black;
					padding: 10px;
					border: 1px solid $color-main-white;
					border-radius: 3px;
					background-color: $color-main-white-muted;
					transition: 0.3s ease-in-out;
					.order-form__input {
						width: 100%;
						height: 100%;
						background-color: unset;
						&:focus {
							color: $color-main-white-muted;
						}
					}
					.order-form__input::placeholder {
						color: $color-main-light-black;
					}
					&:has(.order-form__select.custom-select) {
						padding: 0;
						border: none;
					}
					&:has(.order-form__select.custom-select.open) {
						background-color: unset;
					}
					&:has(.order-form__input:focus) {
						background-color: $color-main-bg-transparent;
					}
				}
			}
			&:nth-child(2) {
				column-gap: 30px;
				margin-bottom: 40px;
				.order-form__item:has(.order-form__range-label) {
					display: flex;
					flex-direction: column;
					row-gap: 5px;
					width: 100%;
				}
				.order-form__item:has(.order-form__file-label) {
					// flex: 1 0 370px;
				}
			}
			&:nth-child(3) {
				justify-content: center;
			}
			// .order-form__item
			&__item {
			}
		}
		// .order-form__select
		&__select {
		}
		// .order-form__input
		&__input {
		}
		// .order-form__range-label
		&__range-label {
			display: flex;
			font-size: rem(18);
			.order-form__range-percent {
				margin-left: auto;
				color: $color-main-white-muted;
			}
		}
		// .order-form__range
		&__range {
			width: 100%;
			margin-top: 16px;
			height: 6px;
			background: $color-main-white-muted-second;
			border-radius: 5px;
			appearance: none;
			outline: none;
			&::-webkit-slider-thumb {
				width: 24px;
				height: 24px;
				border: 3px solid $color-main-blue-dark;
				border-radius: 50%;
				background: $color-main-light-blue;
				appearance: none;
				cursor: pointer;
			}
		}

		// .order-form__file
		&__file {
			display: none;
		}
		// .order-form__file-label
		&__file-label {
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 10px;
			padding: 10px;
			max-width: 370px;
			min-width: 370px;
			width: 100%;
			height: 48px;
			font-weight: 600;
			font-size: rem(15);
			text-transform: uppercase;
			color: #272733;
			border: 2px solid $color-main-white;
			border-radius: 3px;
			background-color: $color-main-white;
			transition: 0.3s ease-in-out;
			&:hover {
				border: 2px solid $color-main-blue;
				background-color: $color-main-white-muted-second;
			}
		}
		// .order-form__file-icon
		&__file-icon {
		}
		// .order-form__file-img
		&__file-img {
			// display: none;
		}
		// .order-form__send-btn
		&__send-btn {
			max-width: 370px;
			width: 100%;
			height: 48px;
			padding: 15px 10px;
			font-weight: 600;
			font-size: rem(15);
			text-transform: uppercase;
			text-align: center;
			border: 1px solid $color-main-white;
			border-radius: 4px;
			background-color: $color-main-blue;
			transition: 0.3s ease-in-out;
			&:hover {
				color: $color-main-blue;
				border: 1px solid $color-main-blue;
				background-color: $color-main-white;
			}
		}
	}
	.custom-select {
		position: relative;
		width: 100%;
		height: 100%;
		border: 1px solid $color-main-white;
		border-radius: 3px;
		cursor: pointer;
		// .custom-select__header
		&__header {
			display: flex;
			align-items: center;
			padding: 10px;
			height: 100%;
			&::after {
				content: '';
				position: absolute;
				right: 10px;
				width: 9px;
				height: 6px;
				mask-image: url('/icons/select-icon.svg');
				mask-repeat: no-repeat;
				mask-size: contain;
				mask-position: center center;
				background-color: $color-main-light-black;
				transition: 0.3s ease-in-out;
			}
		}
		// .custom-select__current
		&__current {
		}
		// .custom-select__list
		&__list {
			position: absolute;
			top: 48px;
			left: 0;
			right: 0;
			width: 100%;
			max-height: 180px;
			padding: 3px 10px;
			color: $color-main-white;
			outline: 1px solid #3d4050;
			border-radius: 0 0 3px 3px;
			overflow: hidden;
			overflow-y: scroll;
			background-color: $color-main-bg-transparent;
			scrollbar-color: #3e9cdc #3d4050;
			scrollbar-width: thin;
			opacity: 0;
			visibility: hidden;
			transition: 0.3s ease-in-out;
		}
		// .custom-select__item
		&__item {
			font-size: rem(18);
			line-height: 189%;
			cursor: pointer;
			transition: 0.3s ease-in-out;
			&:hover {
				color: $color-main-light-blue;
			}
		}
		&.open {
			&.custom-select {
				// border: 1px solid #3d4050;
				// border: 1px solid $color-white;
				border-radius: 3px 3px 0px 0px;
				background-color: $color-main-bg-light;
				transition: 0.3s ease-in-out;
			}
			.custom-select__header {
				color: $color-main-white;
				&::after {
					transform: rotate(-180deg);
					background-color: $color-main-white;
				}
			}
			.custom-select__list {
				opacity: 1;
				visibility: visible;
			}
		}
	}

	.defaulth-select {
		display: none;
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
			.order-plan {
				&__item {
					flex: 0 1 179px;
				}
				&__dots-item:nth-child(-n + 2) {
					display: none;
				}
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
			.order-form {
				.order-form__row:nth-child(1) {
					flex-wrap: wrap;
					justify-content: space-between;
					row-gap: 15px;
					.order-form__item {
						flex: 0 1 345px;
					}
					.order-form__item:nth-child(3) {
						flex-basis: 100%;
					}
				}
				.order-form__row:nth-child(2) {
					flex-wrap: nowrap;
					.order-form__range-label {
						font-size: rem(16);
					}
					.order-form__file-label {
						max-width: 345px;
						min-width: 345px;
					}
				}
				.order-form__row:nth-child(3) {
					.order-form__send-btn {
						max-width: 100%;
					}
				}
			}
		}
	}

	@media only screen and (max-width: 767.98px) {
		.order {
			padding: 80px 0;
			&__descr {
				margin-bottom: 30px;
			}
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
			.order-form {
				.order-form__row:nth-child(1) {
					margin-bottom: 20px;
					.order-form__item {
						flex-basis: 100%;
						height: 41px;
					}
				}
				.order-form__row:nth-child(2) {
					flex-wrap: wrap;
					row-gap: 25px;
					margin-bottom: 20px;
					.order-form__item {
						flex: 0 1 100%;
						height: 41px;
					}
					.order-form__file-label {
						min-width: 100%;
						height: 41px;
					}
				}
				.order-form__send-btn {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 41px;
				}
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

			.order-form {
				.order-form__row:nth-child(1) {
					margin-bottom: 15px;
				}
				.order-form__row:nth-child(2) {
					margin-bottom: 15px;
					.order-form__range-label {
						font-size: rem(13);
					}
				}
			}
		}
	}
</style>
