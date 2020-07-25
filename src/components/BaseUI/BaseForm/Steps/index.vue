<template>
  <div class="steps">
    <ul class="steps__list">
      <li v-for="(item, idx) in options" :key="idx" :class="itemClasses(idx)">
        <StepsItem :idx="idx + 1" :title="item" :type="itemType(idx)" />
      </li>
    </ul>
  </div>
</template>

<script>
	import StepsItem from '@/components/BaseUI/BaseForm/Steps/Item';

	export default {
		name: 'BaseFormSteps',
		components: {
			StepsItem,
		},
		props: {
			options: {
				type: Array,
				required: true,
				default: () => [],
			},
			current: {
				type: Number,
				required: false,
				default: 0,
			},
		},
		methods: {
			itemType(idx) {
				if (idx < this.current) return 'previous';
				else if (idx === this.current) return 'active';
				else return '';
			},

			itemClasses(idx) {
				const type = this.itemType(idx);
				const prop = `steps__item-${type}`;
				return {
					steps__item: true,
					[prop]: type,
				};
			},
		},
	};
</script>

<style scoped lang="scss">
	.steps__list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0;
		/* margin-bottom: 1rem; */
		padding: 1.5rem 0;
		/* padding: 30px; */
		list-style: none;
	}

	.steps__item {
		position: relative;
		flex: 1;
	}

	.steps__item:before {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		bottom: 0;
		left: -50%;
		background: linear-gradient(
			270deg,
			var(--border-color) 50%,
			var(--steps-color) 0
		);
		background-size: 200% 100%;
		background-position: 100% 100%;
		z-index: -1;
	}

	.steps__item:not(:first-of-type):before {
		height: 0.2em;
		top: 1rem;
	}

	.steps__item-active:before,
	.steps__item-previous:before {
		background-position: 0% 100%;
	}
</style>
