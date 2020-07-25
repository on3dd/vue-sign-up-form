<template>
  <label class="checkbox-wrapper" @click="handleClick">
    <input type="checkbox" class="checkbox" :checked="checked" />
    <span class="checkmark" />

    <span v-if="label" class="text">{{label}}</span>
  </label>
</template>

<script>
	export default {
		name: 'BaseInputCheckbox',
		model: {
			prop: 'checked',
			event: 'input',
		},
		props: {
			label: {
				type: String,
				requied: true,
			},
			checked: {
				type: Boolean,
				default: false,
			},
		},
		methods: {
			handleClick() {
				this.$emit('input', this.checked);
			},
		},
	};
</script>

<style scoped lang="scss">
	.checkbox-wrapper {
		display: inline-flex;
		align-items: center;
		position: relative;
		cursor: pointer;
	}

	.checkbox {
    position: absolute;
    margin: 0;
		/* opacity: 0; */
		/* height: 0;
    width: 0; */
    height: 22px;
		width: 22px;
	}

	.checkmark {
		display: block;
		position: relative;
		// position: absolute;
		// top: 0;
		// left: 0;
		height: 22px;
		width: 22px;
		background-color: #ffffff;
		border: 2px solid var(--bg-color-secondary);
		border-radius: 2px;
		// transition: all .2s ease-out;
		&:hover {
			background-color: rgba(0, 0, 0, 0.05);
		}
	}

	/* When the checkbox is checked, add a blue background */
	.checkbox:checked ~ .checkmark {
		background-color: var(--primary-color);
		border-color: var(--primary-color);
	}

	/* Create the checkmark/indicator (hidden when not checked) */
	.checkmark:after {
		content: '';
		position: absolute;
		display: none;
	}

	/* Show the checkmark when checked */
	.checkbox:checked ~ .checkmark:after {
		display: block;
	}

	/* Style the checkmark/indicator */
	.checkmark:after {
		position: absolute;
		left: 4px;
		top: 0px;
		width: 7px;
		height: 11px;
		border: solid var(--bg-color);
		border-width: 0 2px 2px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	.text {
		margin-left: 10px;
		line-height: 24px;
	}
</style>
