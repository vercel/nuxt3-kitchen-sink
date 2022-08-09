# Data Fetching

Nuxt provides `useFetch`, `useLazyFetch`, `useAsyncData` and `useLazyAsyncData` to handle data fetching within your application.

## useFetch

You can use useFetch to universally fetch from any URL.

::CodeBlock{componentName="UseFetchDemo"}
#tab1
/pages/index.vue
#code1

```vue
<script setup>
	const { data: posts } = await useFetch('https://api.nuxtjs.dev/posts');
</script>

<template>
	<div v-for="post in posts" :key="post.id">
		<div>
			{{ post.title }}
		</div>
		<div>
			{{ post.description }}
		</div>
	</div>
</template>
```

#tab3
Result
::

## useLazyFetch

This behaves identically to useFetch with the lazy: true option set, so the async function does not block navigation.

::CodeBlock{componentName="UseLazyFetchDemo"}
#tab1
/pages/index.vue
#code1

```vue
<template>
	<div v-if="pending">Loading ...</div>
	<div v-else v-for="post in posts" :key="post.id">
		<div>
			{{ post.title }}
		</div>
		<div>
			{{ post.description }}
		</div>
	</div>
</template>

<script setup>
	const { pending, data: posts } = useLazyFetch('https://api.nuxtjs.dev/posts');
	watch(posts, (newPosts) => {
		// Because posts starts out null, you won't have access
		// to its contents immediately, but you can watch it.
	});
</script>
```

#tab3
Result
::

## useAsyncData

You can use `useAsyncData` to get access to data that resolves asynchronously. `useFetch` receives a URL and gets that data, whereas `useAsyncData` might have more complex logic. `useFetch(url)` is nearly equivalent to `useAsyncData(url, () => $fetch(url))`

::CodeBlock{componentName="UseAsyncDataDemo"}
#tab1
/server/api/count.ts
#code1

```js
let counter = 0;
export default () => {
	counter++;
	return JSON.stringify(counter);
};
```

#tab2
/pages/index.vue
#code2

```vue
<script setup>
	const { data } = await useAsyncData('count', () => $fetch('/api/count'));
</script>

<template>Page visits: {{ data }}</template>
```

#tab3
Result

::
