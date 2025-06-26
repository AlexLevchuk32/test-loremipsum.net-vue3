<script setup lang="ts">
	import { RouterLink } from 'vue-router';
</script>

<template>
	<header class="header">
		<div class="container header__container">
			<div class="header__inner">
				<div class="header__logo">
					<a class="header__logo-link" href="#">
						LoremIpsum.
						<span class="header__logo--blue">Net</span>
					</a>
				</div>

				<nav class="header__menu">
					<RouterLink class="header__menu-item" to="/">Home</RouterLink>
					<RouterLink class="header__menu-item" to="/business">Business</RouterLink>
					<RouterLink class="header__menu-item" to="/about">About</RouterLink>
					<RouterLink class="header__menu-item" to="/prices">Prices</RouterLink>
					<RouterLink class="header__menu-item" to="/order">Order</RouterLink>
				</nav>

				<button class="header__burger-btn">
					<span class="header__burger-line"></span>
					<span class="header__burger-line"></span>
					<span class="header__burger-line"></span>
				</button>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
	@import '../assets/scss/main.scss';

	.header {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		height: 100px;
		background-color: $color-bg-1;
		z-index: 20;
		// .header__container
		&__container {
			height: 100%;
		}
		// .header__inner
		&__inner {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100%;
		}
		// .header__logo
		&__logo {
			font-family: 'Raleway', sans-serif;
			font-weight: 800;
			font-size: rem(28);
			text-transform: uppercase;
			cursor: pointer;
		}
		// .header__logo-link
		&__logo-link {
		}
		// .header__logo--blue
		&__logo--blue {
			color: $color-blue-2;
		}
		// .header__menu
		&__menu {
			display: flex;
			column-gap: 60px;
			padding-top: 8px;
			font-weight: 600;
			font-size: rem(13);
			text-transform: uppercase;
		}
		// .header__menu-item
		&__menu-item {
			position: relative;
			transition: 0.3s ease-in-out;
			&:hover {
				color: $color-blue-2;
			}
			&::before {
				content: '';
				position: absolute;
				left: 0;
				bottom: -8px;
				width: 110%;
				height: 3px;
				background-color: $color-blue-2;
				transform: translateX(-5%);
				opacity: 0;
				// width: 0%;
				transition: 0.4s ease-in-out;
			}
			&.active::before {
				opacity: 1;
				// width: 110%;
			}
		}
		// .header__burger
		&__burger-btn {
			display: none;
		}
		// .header__burger-line
		&__burger-line {
		}
	}
</style>
