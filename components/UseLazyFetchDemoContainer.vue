<template>
  <div class="p-6 rounded bg-light mb-8">
    <div v-if="!show" class="mb-4">
      Check out this demo! Notice you see a loading state while the data is
      being fetched.
    </div>
    <button
      v-if="!show"
      @click="show = true"
      class="p-3 text-sm font-medium text-dark uppercase bg-primary rounded"
    >
      Show Result
    </button>
    <UseLazyFetchDemo v-if="show" />
  </div>
</template>

<script setup>
let show = ref(false);
defineExpose({
  show,
});
</script>
