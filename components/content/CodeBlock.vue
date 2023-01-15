<template>
  <div class="relative mt-4 rounded-md bg-secondary">
    <div class="flex items-center pt-2 pl-4 mb-4 text-dark">
      <div class="px-2 mr-2 text-sm rounded-md bg-primary">
        <slot name="tab1" />
      </div>
    </div>
    <div class="px-4 pb-4 overflow-scroll max-h-96 text-light">
      <div class="text-sm leading-tight">
        <slot name="code1" />
      </div>
    </div>
  </div>
</template>
