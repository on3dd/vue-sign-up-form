<template>
  <section>
    <BaseFormSection
      heading="Тип документа"
      :class="{invalid: $v.document.$dirty && !$v.document.required}"
    >
      <BaseSelect
        v-model="document"
        :options="documents"
        empty
        placeholder="Выберите тип документа.."
        :class="{invalid: $v.document.$dirty && !$v.document.required}"
        @select="validate('document')"
      />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput
        v-model="series"
        id="passport-series"
        type="numeric"
        label="Серия"
        placeholder="Введите серию документа.."
        required
      />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput
        v-model="number"
        id="passport-number"
        type="numeric"
        label="Номер"
        placeholder="Введите номер документа.."
        required
      />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput
        v-model="issuedBy"
        id="issued-by"
        label="Кем выдан"
        placeholder="Введите место выдачи документа.."
      />
    </BaseFormSection>

    <BaseFormSection>
      <BaseInput
        v-model="issueDate"
        id="issue-date"
        label="Дата выдачи *"
        placeholder="Введите дату выдачи документа.."
        :invalid="$v.issueDate.$dirty && !$v.issueDate.required"
        @input="validate('issueDate')"
      />
    </BaseFormSection>
  </section>
</template>

<script>
	import { required } from 'vuelidate/lib/validators';
	import BaseFormSection from '@/components/BaseUI/BaseForm/Section';
	import BaseInput from '@/components/BaseUI/BaseInput';
	import BaseSelect from '@/components/BaseUI/BaseSelect';
	import formStep from '@/mixins/formStep.js';

	export default {
		name: 'FormStepTwo',
		mixins: [formStep],
		components: {
			BaseFormSection,
			BaseInput,
			BaseSelect,
		},

		data: () => ({
			series: '',
			number: '',
			issuedBy: '',
			issueDate: '',
			documents: [
				'Паспорт',
				'Свидетельство о рождении',
				'Водительское удостоверение',
			],
			document: '',
		}),

		validations: {
			document: {
				required,
			},

			issueDate: {
				required,
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
