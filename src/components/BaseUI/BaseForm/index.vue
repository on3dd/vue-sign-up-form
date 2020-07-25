<template>
  <div class="signup-form">
    <form class="form" action>
      <h2 class="form__title">Создание клиента</h2>
      <p class="form__description">Заполните данную форму, чтобы создать нового клиента!</p>

      <BaseDivider />

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
    </form>
  </div>
</template>

<script>
	import BaseDivider from '@/components/BaseUI/BaseDivider';
	import BaseFormSection from '@/components/BaseUI/BaseForm/Section';
	import BaseInput from '@/components/BaseUI/BaseInput';
	import BaseInputRadio from '@/components/BaseUI/BaseInputRadio';
	import BaseInputCheckbox from '@/components/BaseUI/BaseInputCheckbox';
	import BaseSelect from '@/components/BaseUI/BaseSelect';

	export default {
		name: 'BaseForm',
		components: {
			BaseDivider,
			BaseFormSection,
			BaseInput,
			BaseInputRadio,
			BaseInputCheckbox,
			BaseSelect,
		},
		data: () => ({
			firstName: '',
			secondName: '',
			patronymic: '',
			birthDate: '',
			phone: '',
			gender: '',
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

<style scoped lang="scss">
	.form {
		padding: 30px;
		max-width: 550px;
		border-radius: 5px;
		background-color: var(--bg-color);
		box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.25);
	}

	.form__title {
		margin: 0;
		margin-bottom: 0.5rem;
		font-size: 2rem;
		font-weight: 600;
	}

	.form__description {
		margin: 0;
		margin-bottom: 1rem;
	}
</style>
