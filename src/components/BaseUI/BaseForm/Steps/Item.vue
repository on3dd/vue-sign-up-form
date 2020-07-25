<template>
  <div :class="stepClasses">
    <div class="step__idx">
      <span>{{ idx }}</span>
    </div>
    <div class="step__title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'BaseFormStepsItem',
		props: {
			idx: {
				type: Number,
				required: true,
			},
			title: {
				type: String,
				required: true,
			},
			type: {
				type: String,
				required: false,
				default: '',
			},
		},
		computed: {
			stepClasses() {
				return {
					step: true,
					[this.type]: this.type,
				};
			},
		},
	};
</script>

<style scoped lang="scss">
	.step {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--font-color-alternative);
	}

	.step__idx {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 2rem;
		width: 2rem;
		margin-bottom: 0.25rem;
		font-weight: 600;
		background-color: var(--steps-bg-color);
		border: 0.2rem solid var(--body-color);
    border-radius: 50%;
    transition: all .2s ease-out;
  }

	.step.active .step__idx {
		color: var(--steps-color);
		background-color: var(--bg-color);
		border-color: var(--steps-color);
		box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.1);
	}

	.step.previous .step__idx {
		background-color: var(--steps-color);
	}

	.step__title {
		font-weight: 600;
	}
</style>
