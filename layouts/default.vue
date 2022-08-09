<template>
	<div class="md:flex">
		<SideNav
			v-if="toggleOpen"
			:tabs="tabs"
			:currentRoute="currentRoute"
			@toggleOpen="toggleOpen = $event"
		/>
		<div v-else class="p-8">
			<img @click="toggleOpen = true" src="/assets/menu-open.png" class="h-7" />
		</div>
		<div class="w-full max-h-screen overflow-y-auto md:pt-16 px-9 pb-9">
			<slot />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				toggleOpen: true,
				tabs: [
					// {
					// 	title: 'Auto Imports',
					// 	path: 'auto-imports'
					// },
					// {
					// 	title: 'Routing',
					// 	path: 'routing'
					// },
					// {
					// 	title: 'Layouts',
					// 	path: 'layouts'
					// },
					// {
					// 	title: 'Server Routes',
					// 	path: 'server-routes'
					// },

					{
						title: 'Teleports',
						path: '/teleports'
					},
					{
						title: 'Middleware',
						path: '/middleware'
					},
					{
						title: 'Nuxt on the Edge',
						path: '/edge-functions'
					},
					{
						title: 'Nuxt Loading Indicator',
						path: '/nuxt-loading-indicator'
					},
					// {
					// 	title: 'Typescript',
					// 	path: 'typescript'
					// },
					// {
					// 	title: 'Error handling',
					// 	path: 'error-handling'
					// },
					{
						title: 'Image Optimization',
						path: '/image'
					},
					{
						title: 'Nuxt Link',
						path: '/nuxt-link-component'
					},
					{
						title: 'Nuxt Content',
						path: '/nuxt-content'
					},
					{
						title: 'Data Fetching',
						path: '/data-fetching'
					}
				]
			};
		},
		computed: {
			currentRoute() {
				console.log(this.$route);
				return this.$route.path;
			},
			currentTab() {
				return this.tabs.find((tab) => {
					return tab.path === this.currentRoute;
				});
			}
		}
	};
</script>
