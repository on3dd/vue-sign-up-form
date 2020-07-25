<template>
  <section>
    <BaseFormSection>
      <BaseInput
        v-model="birthDate"
        id="birth-date"
        label="Дата рождения *"
        placeholder="Введите дату рождения.."
        required
      />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput
        v-model="phoneNumber"
        id="phone-number"
        type="numeric"
        label="Номер телефона *"
        placeholder="Введите номер телефона.."
        required
      />
    </BaseFormSection>

    <BaseFormSection heading="Группа клиентов">
      <ul>
        <li>
          <BaseInputCheckbox v-model="group.vip" label="VIP" />
        </li>
        <li>
          <BaseInputCheckbox v-model="group.problem" label="Проблемные" />
        </li>
        <li>
          <BaseInputCheckbox v-model="group.oms" label="ОМС" />
        </li>
      </ul>
    </BaseFormSection>

    <BaseFormSection heading="Лечащий врач">
      <BaseSelect v-model="doctor" :options="doctors" />
    </BaseFormSection>
  </section>
</template>

<script>
	import BaseFormSection from '@/components/BaseUI/BaseForm/Section';
	import BaseInput from '@/components/BaseUI/BaseInput';
	import BaseInputCheckbox from '@/components/BaseUI/BaseInputCheckbox';
	import BaseSelect from '@/components/BaseUI/BaseSelect';

	export default {
		name: 'FormStepTwo',
		components: {
			BaseFormSection,
			BaseInput,
			BaseInputCheckbox,
			BaseSelect,
    },

		data: () => ({
			birthDate: '',
			phone: '',
			group: {
				vip: false,
				problem: false,
				oms: false,
			},
			doctors: ['Иванов', 'Захаров', 'Чернышева'],
			doctor: '',
    }),

		computed: {
			phoneNumber: {
				get() {
					return this.phone ? this.phone : '+7';
				},

				set(val) {
					this.phone = val || '+7';
				},
			},
		},
	};
</script>

<style>
</style>
