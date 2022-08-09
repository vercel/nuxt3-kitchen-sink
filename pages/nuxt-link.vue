<template>
	<div>
		<div>
			Nuxt provides <code>&lt;NuxtLink&gt;</code> component to handle any kind of links within your
			application.
		</div>
		<PageTabs @selected="exampleView = $event" />
		<div v-if="exampleView === 'example'">
			<CodeBlock width="full" :tabs="code" />
		</div>
		<div v-else class="w-full p-2 my-4 overflow-auto bg-gray-100 rounded-md max-h-64">
			<NuxtLink to="https://nuxtjs.org"> Nuxt website </NuxtLink>
			<!-- <NuxtLink to="/routing"> Routing Page </NuxtLink> -->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				exampleView: 'example',
				code: [
					{
						code: `
						<div>&lt;NuxtLink to="https://nuxtjs.org"&gt;</div>
                        <div class="ml-4">Nuxt website</div>
						<div>&lt;/NuxtLink&gt;</div>
						`,
						title: 'Basic Usage'
					},
					{
						code: `
						<div>&lt;NuxtLink to="/routing"&gt;</div>
                        <div class="ml-4">Routing Page</div>
						<div>&lt;/NuxtLink&gt;</div>
						`,
						title: 'Internal Routing'
					}
				]
			};
		}
	};
</script>
