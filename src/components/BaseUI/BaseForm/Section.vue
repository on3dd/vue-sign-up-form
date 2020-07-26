<template>
  <section class="section">
    <span v-if="heading" class="section__heading">{{ heading }}</span>

    <div class="section__row">
      <slot />
    </div>
  </section>
</template>

<script>
	export default {
		name: 'BaseFormSection',
		props: {
			heading: {
				type: String,
				required: false,
				default: '',
			},
		},
	};
</script>

<style scoped lang="scss">
	@import '../../../scss/breakpoints';

	.section {
		margin-bottom: 1rem;
	}

	.section.invalid .section__heading {
		color: var(--font-color-invalid);
	}

	.section__row {
		@media screen and (min-width: $tablet-min-width) {
			display: flex;
			flex-wrap: nowrap;
		}
	}

	.section__row > div {
		margin-bottom: 1rem;

		@media screen and (min-width: $tablet-min-width) {
			display: flex;
			flex: 1;
			margin-bottom: 0;

			&:not(:last-of-type) {
				margin-right: 1rem;
			}
		}
	}

	.section__heading {
		display: block;
		font-weight: 500;
		margin-bottom: 0.5rem;
		transition: color 0.1s ease-out;
	}

	.section__row > ul {
		margin: 0;
		padding-left: 1rem;
		list-style: none;
	}

	.section__row > ul > li {
		line-height: 2rem;
	}
</style>
