<template>
  <section>
    <BaseFormSection>
      <BaseInput
        v-model="secondName"
        id="second-name"
        label="Фамилия *"
        placeholder="Введите фамилию.."
        required
      />
      <BaseInput
        v-model="firstName"
        id="first-name"
        label="Имя *"
        placeholder="Введите имя.."
        required
      />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput
        v-model="patronymic"
        id="patronymic"
        label="Отчество"
        placeholder="Введите отчество.."
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
	import BaseFormSection from '@/components/BaseUI/BaseForm/Section';
	import BaseInput from '@/components/BaseUI/BaseInput';
	import BaseInputRadio from '@/components/BaseUI/BaseInputRadio';

	export default {
		name: 'FormStepOne',
		components: {
			BaseFormSection,
			BaseInput,
			BaseInputRadio,
		},
		data: () => ({
			firstName: '',
			secondName: '',
			patronymic: '',
			gender: '',
		}),
	};
</script>

<style>
</style>
