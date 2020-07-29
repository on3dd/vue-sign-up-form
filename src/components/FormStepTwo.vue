<template>
  <section>
    <BaseFormSection>
      <BaseInput
        v-model="birthDate"
        id="birth-date"
        label="Дата рождения *"
        placeholder="Введите дату рождения.."
        autocomplete="bday"
        :invalid="$v.birthDate.$dirty && !$v.birthDate.required"
        @input="validate('birthDate')"
      />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput
        v-model="phoneNumber"
        id="phone-number"
        type="numeric"
        label="Номер телефона"
        placeholder="Введите номер телефона.."
        autocomplete="tel"
      />
    </BaseFormSection>

    <BaseFormSection
      heading="Группа клиентов *"
      :class="{invalid: $v.group.$dirty && !$v.group.atLeastOneMustBeChecked}"
    >
      <ul>
        <li>
          <BaseInputCheckbox v-model="group.vip" label="VIP" @input="validate('group')" />
        </li>
        <li>
          <BaseInputCheckbox v-model="group.problem" label="Проблемные" @input="validate('group')" />
        </li>
        <li>
          <BaseInputCheckbox v-model="group.oms" label="ОМС" @input="validate('group')" />
        </li>
      </ul>
    </BaseFormSection>

    <BaseFormSection heading="Лечащий врач">
      <BaseSelect v-model="doctor" :options="doctors" empty placeholder="Выберите врача.." />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInputCheckbox v-model="dontSendMessages" label="Не отправлять смс" />
    </BaseFormSection>
  </section>
</template>

<script>
	import { required } from 'vuelidate/lib/validators';
	import BaseFormSection from '@/components/BaseUI/BaseForm/Section';
	import BaseInput from '@/components/BaseUI/BaseInput';
	import BaseInputCheckbox from '@/components/BaseUI/BaseInputCheckbox';
	import BaseSelect from '@/components/BaseUI/BaseSelect';
	import formStep from '@/mixins/formStep.js';
	import { atLeastOneMustBeChecked } from '@/shared/validators.js';

	export default {
		name: 'FormStepTwo',
		mixins: [formStep],
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
      vip: false,
			doctors: ['Иванов', 'Захаров', 'Чернышева'],
			doctor: '',
			dontSendMessages: false,
		}),

		validations: {
			birthDate: {
				required,
			},

			group: {
				required,
				atLeastOneMustBeChecked,
			},
		},

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
