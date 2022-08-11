<script setup>
	const username = useState('username');
</script>

<template>
	<div>
		<h1>Welcome!</h1>
		<p class="mb-2">In order to enter the secret page, you need to fill your username:</p>
		<p class="mb-6">
			<input
				v-model="username"
				class="rounded-md p-1 border border-secondary"
				placeholder="Username"
			/>
		</p>
		<NuxtLink to="/private" class="rounded-md text-secondary bg-primary p-3"
			>Visit Secret page</NuxtLink
		>
	</div>
</template>
