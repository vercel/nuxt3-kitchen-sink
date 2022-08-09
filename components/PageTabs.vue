<template>
	<div class="flex items-center mb-4">
		<div
			@click="(selected = 'example'), $emit('selected', selected)"
			:class="`${selected === 'example' ? 'bg-blue-300' : ''} font-medium px-1  mr-2 rounded`"
		>
			Example
		</div>
		<div
			@click="(selected = 'result'), $emit('selected', selected)"
			:class="`${selected === 'result' ? 'bg-blue-300' : ''} font-medium px-1 rounded`"
		>
			Result
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: 'example'
			};
		}
	};
</script>
