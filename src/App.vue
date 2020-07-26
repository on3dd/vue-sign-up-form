<template>
  <div id="app">
    <BaseForm :options="options" @next-page="handleFormNextPage" @submit="handleFormSubmit">
      <component
        ref="child"
        :is="currentComponent"
        :invalid="invalid"
        @invalid-change="handleInvalidChange"
      />
    </BaseForm>
  </div>
</template>

<script>
	import BaseForm from '@/components/BaseUI/BaseForm';
	import FormStepOne from '@/components/FormStepOne';
	import FormStepTwo from '@/components/FormStepTwo';
	import FormStepThree from '@/components/FormStepThree';
	import FormStepFour from '@/components/FormStepFour';

	export default {
		name: 'App',
		components: {
			BaseForm,
			FormStepOne,
			FormStepTwo,
			FormStepThree,
			FormStepFour,
		},

		data: () => ({
			options: {
				steps: {
					items: ['Основное', 'Подробности', 'Адрес', 'Паспорт'],
					current: 3,
				},
				heading: {
					title: 'Создание клиента',
					description: 'Заполните данную форму, чтобы создать нового клиента!',
				},
			},
			invalid: true,
		}),

		computed: {
			currentComponent() {
				switch (this.options.steps.current) {
					case 0:
						return FormStepOne;
					case 1:
						return FormStepTwo;
					case 2:
						return FormStepThree;
					default:
						return FormStepFour;
				}
			},
		},

		methods: {
			handleInvalidChange(val) {
				console.log(this.invalid, val);
				this.invalid = val;
			},

			handleFormNextPage() {
				if (this.invalid) {
					return this.$refs.child.touch();
				}

				this.options = {
					heading: this.options.heading,
					steps: {
						items: this.options.steps.items,
						current: this.options.steps.current + 1,
					},
				};

				this.invalid = true;
			},

			handleFormSubmit() {
				if (this.invalid) {
					return this.$refs.child.touch();
        }

				console.log('form submitted');
			},
		},
	};
</script>

<style>
	@import './scss/main.scss';

	#app {
		display: flex;
		padding: 15px;
		justify-content: center;
		align-items: center;
		min-height: inherit;
	}
</style>
