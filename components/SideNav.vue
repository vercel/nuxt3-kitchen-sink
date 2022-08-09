<template>
	<div class="absolute z-50 flex-none h-screen p-4 w-60 md:relative">
		<div class="w-full h-full p-5 bg-white border rounded-md shadow-lg border-light">
			<div class="flex items-center justify-between mb-6">
				<div class="flex items-center">
					<img src="/assets/logo-vercel.svg" class="h-6" />
					<div class="mx-1 font-bold">+</div>
					<img src="/assets/logo-nuxt.png" class="h-6" />
				</div>
				<img src="/assets/menu-close.png" class="h-6" @click="$emit('toggleOpen', false)" />
			</div>
			<div
				v-for="tab in tabs"
				:key="tab.path"
				:class="`${currentRoute === tab.path ? 'text-secondary font-bold' : ''} pb-2`"
			>
				<NuxtLink :to="`${tab.path}`"> {{ tab.title }} </NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['tabs', 'currentRoute']
	};
</script>
