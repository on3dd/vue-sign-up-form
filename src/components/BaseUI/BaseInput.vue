<template>
  <div :class="{'input-wrapper': true, 'invalid': invalid}">
    <label class="input-label" :for="id">
      <span class="input-label__text" v-if="label">{{label}}</span>
      <input
        v-model="value"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        class="input"
      />
    </label>
    <span v-if="invalid" class="errors">Поле должно быть заполнено</span>
  </div>
</template>

<script>
	export default {
		name: 'BaseInput',
		model: {
			prop: 'modelValue',
			event: 'input',
		},
		props: {
			label: {
				type: String,
				required: false,
			},
			id: {
				type: String,
				required: false,
			},
			type: {
				type: String,
				required: false,
				default: 'text',
			},
			placeholder: {
				type: String,
				required: false,
				default: '',
			},
			required: {
				type: Boolean,
				required: false,
				default: false,
			},
			modelValue: {
				type: String,
				default: '',
			},
			autocomplete: {
				type: String,
				required: false,
				default: 'on',
			},
			invalid: {
				type: Boolean,
				required: false,
				default: false,
			},
		},
		computed: {
			value: {
				get() {
					return this.modelValue;
				},

				set(val) {
					this.$emit('input', val);
				},
			},
		},
	};
</script>

<style scoped lang="scss">
	@import '../../scss/input';

	.input-wrapper {
		position: relative;
		height: 100%;
		width: inherit;
	}

	.input-label {
		display: block;
		height: 100%;
		width: 100%;
	}

	.input-label__text {
		display: block;
		font-weight: 500;
		margin-bottom: 0.5rem;
		transition: color 0.1s ease-out;
	}

	.input {
		@include input;
	}

	.input-wrapper.invalid .input-label {
		color: var(--font-color-invalid);
	}

	.input-wrapper.invalid .input {
		background-color: var(--input-bg-color-invalid);

		&:hover {
			background-color: var(--input-bg-color-invalid-hover);
		}

		&:focus {
			background-color: var(--input-bg-color-invalid-focus);
		}
	}
</style>
