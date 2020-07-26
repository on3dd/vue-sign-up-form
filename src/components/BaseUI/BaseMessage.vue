<template>
  <div class="message" ref="message">
    <div :class="headClasses">
      <h5 class="message__title">{{title}}</h5>
      <button class="message__close" @click="handleButtonClick">
        <img src="@/assets/images/icons/cross.svg" alt="Cross icon" />
      </button>
    </div>

    <div class="message__body">
      <span class="message__text">
        <slot />
      </span>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'BaseMessage',
		props: {
			title: {
				type: String,
				required: false,
				default: '',
			},
			color: {
				type: String,
				required: false,
				default: 'default',
			},
		},

		computed: {
			headClasses() {
				return {
					message__head: true,
					[this.color]: this.color,
				};
			},
		},

		methods: {
			handleButtonClick() {
				this.$refs.message.classList.remove('active');
			},

			show() {
				this.$refs.message.classList.add('active');

				setTimeout(() => {
					this.$refs.message.classList.remove('active');
				}, 5000);
			},
		},
	};
</script>

<style scoped lang="scss">
	@import '../../scss/breakpoints.scss';

	.message {
		position: fixed;
		top: 10%;
		right: calc(-100% + 15px * 2 - 50px);
		width: calc(100% - 15px * 2);
		max-width: 300px;
		border-radius: 5px;
		background-color: var(--bg-color);
		box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.25);
		transition: right 0.5s ease-out;

		&.active {
			right: 2.5%;

			@media screen and (max-width: $smartphone-max-width) {
				top: 5%;
				right: 50%;
				transform: translateX(50%);
			}
		}
	}

	.message__head {
		display: flex;
		padding: 10px 20px;
		justify-content: space-between;
		align-items: center;
		border-radius: 5px 5px 0 0;
		background-color: var(--font-color);

		&.primary {
			color: var(--heading-color);
			background-color: var(--primary-color);
		}
	}

	.message__title {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
	}

	.message__close {
		display: flex;
		align-items: center;
		margin: 0;
		padding: 5px;
		border: none;
		border-radius: 50%;
		background-color: hsla(0, 0, 100, 0.2);
		cursor: pointer;

		&:hover {
			background-color: hsla(0, 0, 100, 0.3);
		}
	}

	.message__body {
		padding: 20px;
	}
</style>
