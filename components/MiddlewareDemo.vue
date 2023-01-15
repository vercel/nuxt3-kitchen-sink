<script setup>
const username = useState('username');
</script>

<template>
  <div class="bg-light rounded p-6 mb-6">
    <h1>Welcome!</h1>
    <p class="mb-2">
      In order to enter the secret page, you need to fill your username:
    </p>
    <p class="mb-6">
      <input
        v-model="username"
        class="rounded-md p-1 border border-secondary"
        placeholder="Username"
      />
    </p>
    <NuxtLink
      to="/private"
      class="p-3 text-sm font-medium text-dark uppercase bg-primary rounded"
      >Visit Secret page</NuxtLink
    >
  </div>
</template>
