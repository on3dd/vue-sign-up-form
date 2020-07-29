<template>
  <section>
    <BaseFormSection>
      <BaseInput
        v-model="secondName"
        id="second-name"
        label="Фамилия *"
        placeholder="Введите фамилию.."
        autocomplete="given-name"
        :invalid="$v.secondName.$dirty && !$v.secondName.required"
        @input="validate('secondName')"
      />
      <BaseInput
        v-model="firstName"
        id="first-name"
        label="Имя *"
        placeholder="Введите имя.."
        autocomplete="family-name"
        :invalid="$v.firstName.$dirty && !$v.firstName.required"
        @input="validate('firstName')"
      />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput
        v-model="patronymic"
        id="patronymic"
        label="Отчество"
        placeholder="Введите отчество.."
        autocomplete="additional-name"
      />
    </BaseFormSection>

    <BaseFormSection heading="Пол">
      <ul>
        <li>
          <BaseInputRadio id="male" value="male" label="Мужской" v-model="gender" />
        </li>
        <li>
          <BaseInputRadio id="female" value="female" label="Женский" v-model="gender" />
        </li>
      </ul>
    </BaseFormSection>
  </section>
</template>

<script>
	import { required } from 'vuelidate/lib/validators';
	import BaseFormSection from '@/components/BaseUI/BaseForm/Section';
	import BaseInput from '@/components/BaseUI/BaseInput';
	import BaseInputRadio from '@/components/BaseUI/BaseInputRadio';
	import formStep from '@/mixins/formStep.js';

	export default {
    name: 'FormStepOne',
    mixins: [formStep],
		components: {
			BaseFormSection,
			BaseInput,
			BaseInputRadio,
		},

		data: () => ({
			secondName: '',
			firstName: '',
			patronymic: '',
			gender: '',
		}),

		validations: {
			secondName: {
				required,
			},
			firstName: {
				required,
			},
		},
	};
</script>

<style>
</style>
