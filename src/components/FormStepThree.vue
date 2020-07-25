<template>
  <section>
    <BaseFormSection>
      <BaseInput
        v-model="postalCode"
        id="postal-code"
        label="Индекс"
        placeholder="Введите почтовый индекс.."
      />
      <BaseInput
        v-model="country"
        id="country"
        label="Страна"
        placeholder="Введите страну.."
      />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput v-model="area" id="area" label="Область" placeholder="Введите область.." />
      <BaseInput v-model="city" id="city" label="Город *" placeholder="Введите город.." />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput
        v-model="street"
        id="street"
        label="Улица"
        placeholder="Введите улицу.."
      />
      <BaseInput
        v-model="building"
        id="building"
        label="Дом"
        placeholder="Введите номер дома.."
        autocomplete=""
      />
    </BaseFormSection>
  </section>
</template>

<script>
	import BaseFormSection from '@/components/BaseUI/BaseForm/Section';
	import BaseInput from '@/components/BaseUI/BaseInput';

	export default {
		name: 'FormStepThree',
		components: {
			BaseFormSection,
			BaseInput,
		},
		data: () => ({
			postalCode: '',
      country: '',
      area: '',
      city: '',
      street: '',
      building: '',
		}),
	};
</script>

<style>
</style>
