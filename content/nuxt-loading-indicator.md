# `NuxtLoadingIndicator`

Nuxt provides `NuxtLoadingIndicator` to display a progress bar on page navigation that can be customized! It has the following props

- `color`: The color of the loading bar.
- `height`: Height of the loading bar, in pixels (default 3).
- `duration`: Duration of the loading bar, in milliseconds (default 2000).
- `throttle`: Throttle the appearing and hiding, in milliseconds (default 200).

Let's use these props to customize our loading indicator.

## Code

#### `app.vue`

```vue
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#348feb" height="5" />
    <NuxtPage />
  </NuxtLayout>
</template>
```

## Result

:NuxtLoadingIndicatorDemo
