<template>
	<div class="relative rounded-md bg-dark mt-4">
		<div class="flex items-center pt-2 pl-4 text-dark">
			<button
				:class="`${
					selected === 'tab1' ? 'bg-primary' : 'bg-light'
				} px-2 py-1 mb-2 mr-2 text-sm rounded-md`"
				@click="selected = 'tab1'"
			>
				<slot name="tab1" />
			</button>
			<button
				v-if="$slots.code2"
				:class="`${
					selected === 'tab2' ? 'bg-primary' : 'bg-light'
				} px-2 py-1 mb-2 mr-2 text-sm rounded-md`"
				@click="selected = 'tab2'"
			>
				<slot name="tab2" />
			</button>
			<button
				v-if="$slots.code3"
				:class="`${
					selected === 'tab3' ? 'bg-primary' : 'bg-light'
				} px-2 py-1 mb-2 mr-2 text-sm rounded-md`"
				@click="selected = 'tab3'"
			>
				<slot name="tab3" />
			</button>
			<button
				v-if="props.componentName"
				:class="`${
					selected === 'tab4' ? 'bg-primary' : 'bg-light'
				} px-2 py-1 mb-2 mr-2 text-sm rounded-md`"
				@click="selected = 'tab4'"
			>
				<slot name="tab4" />
			</button>
		</div>
		<div class="p-4 overflow-scroll max-h-96 text-light">
			<div v-if="selected === 'tab1'" class="text-sm leading-tight">
				<slot name="code1" />
			</div>
			<div v-if="selected === 'tab2'" class="text-sm leading-tight">
				<slot name="code2" />
			</div>
			<div v-if="selected === 'tab3'" class="text-sm leading-tight">
				<slot name="code3" />
			</div>
			<div v-if="selected === 'tab4'" class="p-6 bg-light text-dark">
				<Component v-bind:is="props.componentName"></Component>
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		componentName: {
			type: String
		}
	});
	let selected = ref('tab1');
	defineExpose({
		selected
	});
</script>
