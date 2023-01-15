# Teleports

Vue 3 provides the `Teleport` component which allows content to be rendered elsewhere in the DOM, outside of the Vue application. The target of `Teleport` expects a CSS
selector string or an actual DOM node. Nuxt currently has SSR support for teleports to body only, with client-side support for other targets using a `ClientOnly` wrapper.

## Code

#### `/pages/index.vue`

```vue
<template>
  <button @click="open = true">Open Modal</button>
  <ClientOnly>
    <Teleport to="body">
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </Teleport>
  </ClientOnly>
</template>
```

## Result

:TeleportsDemo
