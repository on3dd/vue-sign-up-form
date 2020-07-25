<template>
  <section>
    <BaseFormSection heading="Лечащий врач">
      <BaseSelect v-model="document" :options="documents" />
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
      />
    </BaseFormSection>
  </section>
</template>

<script>
	import BaseFormSection from '@/components/BaseUI/BaseForm/Section';
	import BaseInput from '@/components/BaseUI/BaseInput';
	import BaseSelect from '@/components/BaseUI/BaseSelect';

	export default {
		name: 'FormStepTwo',
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
