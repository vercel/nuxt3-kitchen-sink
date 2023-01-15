<template>
  <div class="w-full bg-light p-6 rounded mb-8">
    <div class="mb-4 font-medium text-lg">
      Refresh the page and watch this number increase!
    </div>
    <div>
      Page visits:
      <span class="text-primary font-bold text-lg">{{ data }}</span>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('count', () => $fetch('/api/count'));
</script>
