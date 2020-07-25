<template>
  <div class="input-wrapper">
    <label class="input-label" :for="id">
      <span class="input-label__text" v-if="label">{{label}}</span>
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :required="required"
        :autocomplete="autocomplete"
        class="input"
        ref="input"
        @input="handleInput"
      />
    </label>
  </div>
</template>

<script>
	export default {
		name: 'BaseInput',
		model: {
			prop: 'value',
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
			value: {
				type: String,
				default: '',
			},
			autocomplete: {
				type: String,
				required: false,
				default: 'on',
			},
		},
		methods: {
			handleInput() {
				this.$emit('input', this.$refs.input.value);
			},
		},
	};
</script>

<style scoped lang="scss">
	@import '../../scss/input';

	.input-wrapper {
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
	}

	.input {
		@include input;
	}
</style>
