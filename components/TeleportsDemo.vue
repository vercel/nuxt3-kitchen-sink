<template>
	<div class="p-6 bg-light rounded">
		<div class="mb-4">
			Click the button below to see how teleports work! Even though this modal has a z-index of 0,
			it will appear on top of all content since we are utilizing a teleport.
		</div>
		<button @click="open = true" class="px-4 py-2 font-bold text-white bg-primary rounded-md">
			Open Modal
		</button>
		<Teleport to="body">
			<div
				v-if="open"
				class="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
			>
				<div class="z-0 flex bg-white flex-col items-center p-8 rounded-md justify-center">
					<p class="mb-4 text-xl font-bold text-center">Hello from the modal!</p>
					<button
						@click="open = false"
						class="px-4 py-2 font-bold text-white bg-primary rounded-md"
					>
						Close
					</button>
				</div>
			</div>
		</Teleport>
	</div>
</template>

<script setup>
	let open = ref(false);
	defineExpose({
		open
	});
</script>
