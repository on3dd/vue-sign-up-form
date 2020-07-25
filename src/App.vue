<template>
  <div id="app">
    <BaseForm :options="options" @next="handleFormNext">
      <FormStepOne v-if="options.steps.current === 0" />
      <FormStepTwo v-else-if="options.steps.current === 1" />
      <FormStepThree v-else-if="options.steps.current === 2" />
      <FormStepFour v-else-if="options.steps.current === 3" />
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
					current: 0,
				},
				heading: {
					title: 'Создание клиента',
					description: 'Заполните данную форму, чтобы создать нового клиента!',
				},
			},
		}),

		methods: {
			handleFormNext() {
				this.options = {
					heading: this.options.heading,
					steps: {
						items: this.options.steps.items,
						current: this.options.steps.current + 1,
					},
				};
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
