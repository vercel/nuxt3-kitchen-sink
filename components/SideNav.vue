<template>
  <div class="absolute z-30 flex-none w-64 h-screen p-4 md:relative">
    <div
      class="w-full h-full p-5 bg-white border rounded-md shadow-lg border-light"
    >
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <img src="/logo-vercel.svg" class="h-6" />
          <div class="mx-1 font-bold">+</div>
          <img src="/logo-nuxt.png" class="h-5" />
        </div>
        <img
          src="/menu-close.png"
          class="h-6"
          @click="$emit('toggleOpen', false)"
        />
      </div>
      <div
        v-for="tab in tabs"
        :key="tab.path"
        :class="`${
          currentRoute === tab.path ? 'text-secondary font-bold' : ''
        } pb-2`"
      >
        <NuxtLink :to="`${tab.path}`"> {{ tab.title }} </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tabs', 'currentRoute'],
};
</script>
