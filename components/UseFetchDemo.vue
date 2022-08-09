<template>
	<div class="">
		<div v-for="post in posts" :key="post.id" class="mb-4">
			<div class="mb-1 font-bold">
				{{ post.title }}
			</div>
			<div class="text-sm">
				{{ post.description }}
			</div>
		</div>
	</div>
</template>

<script setup>
	const { data: posts } = await useFetch('https://api.nuxtjs.dev/posts');
</script>
