<template>
  <div class="p-6 bg-light rounded">
    <div class="mb-4">
      Click the button below to see how teleports work! If you inspect the modal
      element, you will see that it is inserted directly into our body tag,
      rather than being nested within parent elements.
    </div>
    <button
      @click="open = true"
      class="p-3 text-sm font-medium text-dark uppercase bg-primary rounded"
    >
      Open Modal
    </button>
    <ClientOnly>
      <Teleport to="body">
        <div
          v-if="open"
          class="z-50 absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div
            class="z-0 flex bg-white flex-col items-center p-8 rounded-md justify-center"
          >
            <p class="mb-4 text-xl font-bold text-center">
              Hello from the modal!
            </p>
            <button
              @click="open = false"
              class="p-3 text-sm font-medium text-dark uppercase bg-primary rounded"
            >
              Close
            </button>
          </div>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup>
let open = ref(false);
defineExpose({
  open,
});
</script>
