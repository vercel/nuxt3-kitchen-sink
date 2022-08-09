<template>
	<div>
		<div class="mb-6">
			Nuxt provides <code>useFetch</code>, <code>useLazyFetch</code>, <code>useAsyncData</code> and
			<code>useLazyAsyncData</code> to handle data fetching within your application.
		</div>
		<section class="mb-6">
			<div class="mb-4 text-2xl font-bold"><code>useFetch</code></div>
			<div class="mb-4">You can use useFetch to universally fetch from any URL.</div>
			<PageTabs @selected="exmpleOne = $event" />
			<div v-if="exmpleOne === 'example'">
				<CodeBlock width="full" :tabs="useFetchCode" />
			</div>
			<div v-else class="w-full p-2 my-4 overflow-auto bg-gray-100 rounded-md max-h-64">
				<div v-for="post in posts" :key="post.id" class="mb-2">
					<div class="font-bold">
						{{ post.title }}
					</div>
					<div class="text-sm leading-tight">
						{{ post.description }}
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="mb-4 text-2xl font-bold"><code>useLazyFetch</code></div>
			<div class="mb-4">
				This composable behaves identically to useFetch with the lazy: true option set. In other
				words, the async function does not block navigation. That means you will need to handle the
				situation where the data is null (or whatever value you have provided in a custom default
				factory function).
			</div>
			<PageTabs @selected="exmpleTwo = $event" />
			<div v-if="exmpleTwo === 'example'" class="w-full p-2 my-4 bg-gray-100 rounded-md">
				... this will be the demo code
			</div>
			<div v-else class="w-full p-2 my-4 overflow-auto bg-gray-100 rounded-md max-h-64">
				<div v-if="pending">Loading ...</div>
				<div v-else>
					<div v-for="post in posts2" :key="post.id">
						<!-- do something -->
					</div>
				</div>
				<!-- <div v-for="post in posts" :key="post.id" class="mb-2">
					<div class="font-bold">
						{{ post.title }}
					</div>
					<div class="text-sm leading-tight">
						{{ post.description }}
					</div>
				</div> -->
			</div>
		</section>
		<section>
			<div class="mb-4 text-2xl font-bold"><code>useAsyncData</code></div>
			<div class="mb-4">
				Within your pages, components and plugins you can use useAsyncData to get access to data
				that resolves asynchronously.
			</div>
			<PageTabs @selected="exmpleTwo = $event" />
			<div v-if="exmpleTwo === 'example'" class="w-full p-2 my-4 bg-gray-100 rounded-md">
				... this will be the demo code
			</div>
			<div v-else class="w-full p-2 my-4 overflow-auto bg-gray-100 rounded-md max-h-64">
				<div v-if="pending">Loading ...</div>
				<div v-else>
					<div v-for="post in posts2" :key="post.id">
						<!-- do something -->
					</div>
				</div>
				<!-- <div v-for="post in posts" :key="post.id" class="mb-2">
					<div class="font-bold">
						{{ post.title }}
					</div>
					<div class="text-sm leading-tight">
						{{ post.description }}
					</div>
				</div> -->
			</div>
		</section>
	</div>
</template>

<script setup>
	const { data: posts } = await useFetch('https://api.nuxtjs.dev/posts');
	const { pending, data: posts2 } = useLazyFetch('https://api.nuxtjs.dev/posts');
	watch(posts2, (newPosts) => {
		console.log(posts2);
		// Because posts starts out null, you won't have access
		// to its contents immediately, but you can watch it.
	});
</script>
<script>
	export default {
		data() {
			return {
				codeSample: '<html></html>',
				exmpleOne: 'example',
				exmpleTwo: 'example',
				useFetchCode: [
					{
						title: 'useFetch',
						code: `
						<div>&lt;script setup&gt;</div>
						<div class="ml-4">const { data: posts } = await useFetch('https://api.nuxtjs.dev/posts')</div>
						<div>&lt;/script&gt;</div>
						<div class="mt-2">&lt;template&gt;</div>
						<div class="ml-4">&lt;div v-for="post in posts" :key="post.id"&gt;</div>
						<div class="ml-8">&lt;div&gt;</div>
						<div class="ml-10"> {{ post.title }} </div>
						<div class="ml-8">&lt;/div&gt;</div>
						<div class="ml-8">&lt;div&gt;</div>
						<div class="ml-10"> {{ post.description }} </div>
						<div class="ml-8">&lt;/div&gt;</div>
						<div class="ml-4">&lt;/div&gt;</div>
						<div>&lt;/template&gt;</div>
						`
					}
				]
			};
		}
	};
</script>
