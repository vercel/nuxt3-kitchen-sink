<template>
  <div class="">
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="mb-4">
        <div class="mb-1 font-bold">
          {{ post.title }}
        </div>
        <div class="text-sm">
          {{ post.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { pending, data: posts } = useLazyFetch('https://api.nuxtjs.dev/posts');
watch(posts, (newPosts) => {
  console.log(newPosts);
  // Because posts starts out null, you won't have access
  // to its contents immediately, but you can watch it.
});
</script>
