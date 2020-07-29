<template>
  <div class="signup-form">
    <template v-if="options.steps.items">
      <Steps :options="options.steps.items" :current="options.steps.current" />
    </template>

    <form class="form" action ref="form">
      <template v-if="options.heading.title">
        <h2 class="form__title">{{ options.heading.title }}</h2>

        <template v-if="options.heading.description">
          <p class="form__description">{{ options.heading.description }}</p>
        </template>

        <BaseDivider />
      </template>

      <slot />

      <button class="form__button" @click.prevent="handleSubmitButtonClick">{{ submitButtonText }}</button>
    </form>
  </div>
</template>

<script>
	import Steps from '@/components/BaseUI/BaseForm/Steps';
	import BaseDivider from '@/components/BaseUI/BaseDivider';

	export default {
		name: 'BaseForm',
		components: {
			Steps,
			BaseDivider,
		},

		props: {
			options: {
				type: Object,
				required: false,
				default: () => {},
			},
		},

		computed: {
			isCurrentExualToMax() {
				return this.options.steps.current === this.options.steps.items.length - 1;
			},

			submitButtonText() {
				return this.isCurrentExualToMax ? 'Создать' : 'Далее';
			},
		},

		methods: {
			handleSubmitButtonClick() {
				this.isCurrentExualToMax ? this.handleSubmit() : this.handleNext();
			},

			handleSubmit() {
        this.$emit('submit');
			},

			handleNext() {
				this.$emit('next-page');
			},
		},
	};
</script>

<style scoped lang="scss">
	.form {
		padding: 30px;
		max-width: 550px;
		border-radius: 5px;
		background-color: var(--bg-color);
		box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.25);
	}

	.form__title {
		margin: 0;
		margin-bottom: 0.5rem;
		font-size: 2rem;
		font-weight: 600;
	}

	.form__description {
		margin: 0;
		margin-bottom: 1rem;
	}

	.form__button {
		min-width: 140px;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
		color: var(--heading-color);
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.5rem;
		text-align: center;
		vertical-align: middle;
		border: none;
		border-radius: 5px;
		background-color: var(--primary-color);
		box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.25);
		cursor: pointer;
		transition: 0.1s background-color ease-out;

		&:hover {
			background-color: var(--secondary-color);
		}
	}
</style>
