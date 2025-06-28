<script setup lang="ts"></script>

<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__inner">
				<p class="footer__copyright">
					©
					<span>2018 «LoremIpsum.net»</span>
					Все права защищены.
				</p>
				<div class="footer__item footer__item-devider"></div>
				<a class="footer__item footer__item-payment" href="https://oplata.qiwi.com/form/loremipsum-test" target="_blank">
					<img class="footer__item-img" src="/icons/qiwi-wallet.svg" alt="qiwi wallet" />
					<span class="footer__item-name">QIWI wallet</span>
				</a>
				<a class="footer__item footer__item-payment" href="https://money.yandex.ru/to/1234567890" target="_blank">
					<img class="footer__item-img" src="/icons/yandex-money.svg" alt="yandex money" />
					<span class="footer__item-name">Yandex Money</span>
				</a>
				<a
					class="footer__item footer__item-payment"
					href="https://merchant.webmoney.ru/lmi/payment.asp?LMI_PAYEE_PURSE=R123456789012&LMI_PAYMENT_AMOUNT=100&LMI_PAYMENT_DESC=Оплата"
					target="_blank"
				>
					<img class="footer__item-img" src="/icons/web-money.svg" alt="web money" />
					<span class="footer__item-name">Web Money</span>
				</a>
				<div class="footer__item footer__item-devider"></div>
				<a class="footer__item footer__item-contact" href="mailto:info@ipsum228.com" target="_blank">
					<img class="footer__item-img" src="/icons/mail-icon.svg" alt="mail" />
					<span class="footer__item-name">info@ipsum228.com</span>
				</a>
				<a class="footer__item footer__item-contact" href="https://vk.com/loremipsum-test" target="_blank">
					<img class="footer__item-img" src="/icons/vk-icon.svg" alt="vk" />
					<span class="footer__item-name">Мы вконтакте</span>
				</a>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
	@use '../assets/scss/base/common' as *;
	@use '../assets/scss/base/mixins' as *;
	@use '../assets/scss/base/variables' as *;

	.footer {
		height: 80px;
		padding: 30px 0;
		background-color: $color-main-bg-dark;
		// .footer__inner
		&__inner {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			height: 100%;
		}
		// .footer__copyright
		&__copyright {
			font-size: rem(13);
			span {
				text-transform: uppercase;
			}
		}
		// .footer__item
		&__item {
			display: flex;
			column-gap: 10px;
			&:hover {
				.footer__item-name {
					color: $color-white;
				}
			}
		}
		// .footer__item-payment
		&__item-payment {
			align-items: flex-end;
		}
		// .footer__item-contact
		&__item-contact {
			align-items: center;
		}
		// .footer__item-devider
		&__item-devider {
			width: 1px;
			height: 18px;
			background-color: $color-main-light-grey-third;
		}
		// .footer__item-img
		&__item-img {
		}
		// .footer__item-name
		&__item-name {
			font-size: rem(13);
			color: $color-main-light-grey-third;
			transition: 0.3s ease-in-out;
		}
	}
	.container {
	}
	.footer-container {
	}

	//==========================================================================================================================================================
	// Адаптив
	@media only screen and (max-width: 1199.98px) {
	}

	@media only screen and (max-width: 991.98px) {
		.footer {
			height: unset;
			&__inner {
				flex-wrap: wrap;
				justify-content: flex-start;
				align-items: center;
				row-gap: 10px;
				column-gap: 15px;
			}
			&__copyright {
				width: 100%;
				margin-bottom: 5px;
			}
			&__item-devider:first-of-type {
				display: none;
			}
		}
	}

	@media only screen and (max-width: 767.98px) {
	}

	@media only screen and (max-width: 575.98px) {
		.footer {
			&__item-devider:last-of-type {
				display: none;
			}
		}
	}
</style>
