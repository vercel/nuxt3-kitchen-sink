# Server Routes

Nuxt automatically scans files inside the `~/server/api` directory to register API and server handlers with HMR (Hot Module Reloading) support.

Each file should export a default function defined with `defineEventHandler()`, which can return JSON data, a `Promise`, or use event.res.end() to send response. This API can now be called universally using `await $fetch('/api/hello')`.

#### `/server/api/hello.ts`

```ts
export default defineEventHandler(() => {
  return {
    message: 'Hello, World!',
  };
});
```

#### `/pages/index.vue`

```vue
<script setup>
let data = await $fetch('/api/hello');
</script>

<template>
  <div>
    <div>Returned JSON:</div>
    <div>
      {{ data }}
    </div>
  </div>
</template>
```

### Result

:ServerRoutesDemo
