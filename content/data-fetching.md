# Data Fetching

Nuxt provides `useFetch`, `useLazyFetch`, `useAsyncData` and `useLazyAsyncData` to handle data fetching within your application.

## useFetch

You can `useFetch` to universally fetch data from any URL.

### Code

#### `/pages/index.vue`

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

### Result

:UseFetchDemo

## useLazyFetch

This behaves identically to useFetch with the `lazy: true` option set, so the async function does not block navigation.

### Code

#### `/pages/index.vue`

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

### Result

:UseLazyFetchDemoContainer

## useAsyncData

You can use `useAsyncData` to get access to data that resolves asynchronously. `useFetch` receives a URL and gets that data, whereas `useAsyncData` might have more complex logic. `useFetch(url)` is nearly equivalent to `useAsyncData(url, () => $fetch(url))`

### Code

#### `/server/api/count.ts`

```ts
let counter = 0;
export default defineEventHandler(() => {
  counter++;
  return JSON.stringify(counter);
});
```

#### `/pages/index.vue`

```vue
<script setup>
const { data } = await useAsyncData('count', () => $fetch('/api/count'));
</script>

<template>
  <div>Page visits: {{ data }}</div>
</template>
```

### Result

:UseAsyncDataDemo
