<template>
	<div class="formSection">
		<h3 v-if="label" class="formSection__title">
			{{ label }}
		</h3>
		<FormFields
			v-if="fields"
			v-model="model"
			:fields="fields"
			class-name="formSection__content"
			@input="handleChange($event)"
		/>
	</div>
</template>
<script>
export default {
	name: "FormSection",
	props: {
		name: {
			type: String,
			default: null
		},
		label: {
			type: String,
			default: null
		},
		fields: {
			type: Object,
			default: () => ({})
		},
		value: {
			type: Object,
			default: () => ({})
		}
	},
	data: () => ({
		model: null
	}),
	watch: {
		value (v) {
			this.model = v;
		}
	},
	created () {
		this.model = this.value;
	},
	mounted () {
		this.model = this.value;
	},
	methods: {
		handleChange (value) {
			this.$emit("input", {
				...(this.model || {}),
				...value
			});
		}
	}
}
</script>
<style lang="scss">
	.formSection {
		display: flex;
		flex-direction: column;

		&__title {
			text-align: center;
		}

		&__content {
			display: grid;
			grid-template-areas: ". . .";
		}
	}
</style>
