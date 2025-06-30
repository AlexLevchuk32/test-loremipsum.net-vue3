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
	<div class="order__form">
		<form class="order-form" action="#" method="POST">
			<div class="order-form__row">
				<div class="order-form__item">
					<div :class="['order-form__select custom-select', { open: selectOpen }]" @click="selectOpen = !selectOpen" tabindex="0">
						<div class="custom-select__header">
							<div class="custom-select__current">{{ selectedOption }}</div>
						</div>
						<div class="custom-select__list">
							<div class="custom-select__item" v-for="(option, index) in options" :key="index" @click.stop="selectItem(option)">
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
</template>

<style lang="scss" scoped>
	@use '../../../assets/scss/base/common' as *;
	@use '../../../assets/scss/base/mixins' as *;
	@use '../../../assets/scss/base/variables' as *;

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
					color: $color-bg-1;
					padding: 10px;
					border: 1px solid $color-white;
					border-radius: 3px;
					background-color: $color-white-muted-1;
					transition: 0.3s ease-in-out;
					.order-form__input {
						width: 100%;
						height: 100%;
						background-color: unset;
						&:focus {
							color: $color-white-muted-1;
						}
					}
					.order-form__input::placeholder {
						color: $color-bg-1;
					}
					&:has(.order-form__select.custom-select) {
						padding: 0;
						border: none;
					}
					&:has(.order-form__select.custom-select.open) {
						background-color: unset;
					}
					&:has(.order-form__input:focus) {
						background-color: $color-bg-muted-2;
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
				color: $color-white-muted-1;
			}
		}
		// .order-form__range
		&__range {
			width: 100%;
			margin-top: 16px;
			height: 6px;
			background: $color-white-muted-2;
			border-radius: 5px;
			appearance: none;
			outline: none;
			&::-webkit-slider-thumb {
				width: 24px;
				height: 24px;
				border: 3px solid $color-blue-3;
				border-radius: 50%;
				background: $color-blue-2;
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
			border: 2px solid $color-white;
			border-radius: 3px;
			background-color: $color-white;
			transition: 0.3s ease-in-out;
			&:hover {
				border: 2px solid $color-blue-1;
				background-color: $color-white-muted-2;
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
			border: 1px solid $color-white;
			border-radius: 4px;
			background-color: $color-blue-1;
			transition: 0.3s ease-in-out;
			&:hover {
				color: $color-blue-1;
				border: 1px solid $color-blue-1;
				background-color: $color-white;
			}
		}
	}
	.custom-select {
		position: relative;
		width: 100%;
		height: 100%;
		border: 1px solid $color-white;
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
				background-color: $color-bg-1;
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
			color: $color-white;
			outline: 1px solid #3d4050;
			border-radius: 0 0 3px 3px;
			overflow: hidden;
			overflow-y: scroll;
			background-color: $color-bg-muted-2;
			scrollbar-color: $color-blue-1 $color-bg-3;
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
				color: $color-blue-2;
			}
		}
		&.open {
			&.custom-select {
				// border: 1px solid #3d4050;
				// border: 1px solid $color-white;
				border-radius: 3px 3px 0px 0px;
				background-color: $color-bg-2;
				transition: 0.3s ease-in-out;
			}
			.custom-select__header {
				color: $color-white;
				&::after {
					transform: rotate(-180deg);
					background-color: $color-white;
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
					color: $color-bg-1;
					padding: 10px;
					border: 1px solid $color-white;
					border-radius: 3px;
					background-color: $color-white-muted-1;
					transition: 0.3s ease-in-out;
					.order-form__input {
						width: 100%;
						height: 100%;
						background-color: unset;
						&:focus {
							color: $color-white-muted-1;
						}
					}
					.order-form__input::placeholder {
						color: $color-bg-1;
					}
					&:has(.order-form__select.custom-select) {
						padding: 0;
						border: none;
					}
					&:has(.order-form__select.custom-select.open) {
						background-color: unset;
					}
					&:has(.order-form__input:focus) {
						background-color: $color-bg-muted-2;
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
				color: $color-white-muted-1;
			}
		}
		// .order-form__range
		&__range {
			width: 100%;
			margin-top: 16px;
			height: 6px;
			background: $color-white-muted-2;
			border-radius: 5px;
			appearance: none;
			outline: none;
			&::-webkit-slider-thumb {
				width: 24px;
				height: 24px;
				border: 3px solid $color-blue-3;
				border-radius: 50%;
				background: $color-blue-2;
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
			border: 2px solid $color-white;
			border-radius: 3px;
			background-color: $color-white;
			transition: 0.3s ease-in-out;
			&:hover {
				border: 2px solid $color-blue-1;
				background-color: $color-white-muted-2;
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
			border: 1px solid $color-white;
			border-radius: 4px;
			background-color: $color-blue-1;
			transition: 0.3s ease-in-out;
			&:hover {
				color: $color-blue-1;
				border: 1px solid $color-blue-1;
				background-color: $color-white;
			}
		}
	}
	.custom-select {
		position: relative;
		width: 100%;
		height: 100%;
		border: 1px solid $color-white;
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
				background-color: $color-bg-1;
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
			color: $color-white;
			outline: 1px solid #3d4050;
			border-radius: 0 0 3px 3px;
			overflow: hidden;
			overflow-y: scroll;
			background-color: $color-bg-muted-2;
			scrollbar-color: $color-blue-1 $color-bg-3;
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
				color: $color-blue-2;
			}
		}
		&.open {
			&.custom-select {
				// border: 1px solid #3d4050;
				// border: 1px solid $color-white;
				border-radius: 3px 3px 0px 0px;
				background-color: $color-bg-2;
				transition: 0.3s ease-in-out;
			}
			.custom-select__header {
				color: $color-white;
				&::after {
					transform: rotate(-180deg);
					background-color: $color-white;
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
	@media only screen and (max-width: 991.98px) {
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

	@media only screen and (max-width: 767.98px) {
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

	@media only screen and (max-width: 575.98px) {
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
</style>
