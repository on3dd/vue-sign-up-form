<template>
  <div class="select-wrapper">
    <div class="select">
      <div ref="current" :class="currentClasses" @click="handleCurrentClick">
        {{value}}
        <img
          src="@/assets/images/icons/arrow.svg"
          alt="Arrow icon"
          class="select__icon"
          ref="icon"
        />
      </div>
      <div :class="listClasses">
        <div
          v-for="(item, idx) in options"
          :key="idx"
          @click="changeCurrent(item)"
          :class="itemClasses(item)"
        >{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'BaseSelect',
		model: {
			prop: 'modelValue',
			event: 'select',
		},

		props: {
			options: {
				type: Array,
				required: false,
				default: () => [],
			},
			empty: {
				type: Boolean,
				required: false,
				default: false,
			},
			placeholder: {
				type: String,
				required: false,
				default: '',
			},
			modelValue: {
				type: String,
				default: '',
			},
		},

		data: () => ({
			value: '',
			isActive: false,
		}),

		created() {
			if (this.modelValue) {
				this.value = this.modelValue;
			} else if (this.empty) {
				this.value = this.placeholder;
			} else if (this.options.length) {
				this.value = this.options[0];
			}
		},

		mounted() {
			document.addEventListener('click', (evt) => {
				if (
					this.isActive &&
					evt.target !== this.$refs.current &&
					evt.target !== this.$refs.icon
				) {
					this.handleCurrentClick();
				}
			});
		},

		watch: {
			modelValue(value) {
				this.value = value;
			},
		},

		computed: {
			currentClasses() {
				return {
					select__current: true,
					placeholder: !this.options.includes(this.value),
				};
			},

			listClasses() {
				return {
					select__items: true,
					active: this.isActive,
				};
			},
		},

		methods: {
			handleCurrentClick() {
				this.$refs.current.classList.toggle('active');

				this.isActive = !this.isActive;
			},

			changeCurrent(el) {
				this.value = el;
				this.$emit('select', this.value);
			},

			itemClasses(item) {
				return {
					select__item: true,
					current: item === this.value,
				};
			},
		},
	};
</script>

<style scoped lang="scss">
	@import '../../scss/input';

	.select {
		position: relative;
		width: 100%;
		height: inherit;
		cursor: pointer;
	}

	.select__current {
		@include input;

		display: flex;
		align-items: center;
		position: relative;
		height: 40px;
		line-height: calc(40px - 1em);

		&.active {
			border-radius: 5px 5px 0 0;
		}

		&.placeholder {
			color: var(--font-color-secondary);
		}
	}

	.select__icon {
		position: absolute;
		top: 50%;
		right: 16px;
		transform: translateY(-50%);
	}

	.select__items {
		position: absolute;
		top: 40px;
		left: 0px;
		display: none;
		width: 100%;
		z-index: 100;
		max-height: 250px;
		overflow-y: auto;
		overflow-x: hidden;
		border-radius: 0 0 5px 5px;
		box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.25);

		&.active {
			display: block;
		}
	}

	.select__item {
		@include input;

		height: 40px;
		width: inherit;
		padding: 0.375rem 0.75rem;
		line-height: calc(40px - 1em);
		background-color: var(--bg-color);
		border-radius: 0;
		border: none;
		border-top: 1px solid rgba(0, 0, 0, 0.1);

		&:last-child {
			border-radius: 0 0 5px 5px;
		}

		&.current {
			color: var(--font-color);
		}
	}

	.select-wrapper.invalid .select__current {
		/* color: var(--font-color-invalid); */
		background-color: var(--input-bg-color-invalid);

		&:hover {
			background-color: var(--input-bg-color-invalid-hover);
		}

		&:focus {
			background-color: var(--input-bg-color-invalid-focus);
		}
	}
</style>
