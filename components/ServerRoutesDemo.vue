<script setup>
let data = await $fetch('/api/hello');
</script>

<template>
  <div class="bg-light p-6 rounded">
    <div class="mb-4 font-medium text-lg">Returned JSON:</div>
    <div class="text-primary p-4 rounded bg-dark">
      {{ data }}
    </div>
  </div>
</template>
