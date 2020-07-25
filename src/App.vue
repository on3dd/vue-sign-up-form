<template>
  <div id="app">
    <BaseForm />
  </div>
</template>

<script>
	import BaseForm from '@/components/BaseUI/BaseForm';

	export default {
		name: 'App',
		components: {
			BaseForm,
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
