<template>
  <section>
    <BaseFormSection>
      <BaseInput
        v-model="postalCode"
        id="postal-code"
        label="Индекс"
        placeholder="Введите почтовый индекс.."
      />
      <BaseInput v-model="country" id="country" label="Страна" placeholder="Введите страну.." />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput v-model="area" id="area" label="Область" placeholder="Введите область.." />
      <BaseInput
        v-model="city"
        id="city"
        label="Город *"
        placeholder="Введите город.."
        :class="{invalid: $v.city.$dirty && !$v.city.required}"
        @input="validate('city')"
      />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput v-model="street" id="street" label="Улица" placeholder="Введите улицу.." />
      <BaseInput
        v-model="building"
        id="building"
        label="Дом"
        placeholder="Введите номер дома.."
        autocomplete
      />
    </BaseFormSection>
  </section>
</template>

<script>
	import { required } from 'vuelidate/lib/validators';
	import BaseFormSection from '@/components/BaseUI/BaseForm/Section';
	import BaseInput from '@/components/BaseUI/BaseInput';
	import formStep from '@/mixins/formStep.js';

	export default {
		name: 'FormStepThree',
		mixins: [formStep],
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

		validations: {
			city: {
				required,
			},
		},
	};
</script>

<style>
</style>
