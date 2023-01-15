# `NuxtLink`

`<NuxtLink>` is a drop-in replacement for the `<a>` tag. It intelligently determines whether the link is internal or external and renders it accordingly with available optimizations (prefetching, default attributes, etc.) You can use it just like a normal link tag, adding target and rel attributes.

## Code

#### `/pages/index.vue`

```vue
<template>
  <div>
    <div>Basic Usage</div>
    <div>
      Let's visit an external website using Nuxt-Link! Click the link below to
      open nuxt.com in a new tab. This link is usinf the rel and target
      attributes.
    </div>
    <NuxtLink to="https://nuxtjs.org" target="_blank" rel="noopener">
      Nuxt Website
    </NuxtLink>

    <div>Internal Routing</div>
    <div>
      This link will route to the /routing page within this application. Click
      the link below to experience how it works!
    </div>
    <NuxtLink to="/routing"> Routing Page </NuxtLink>
  </div>
</template>
```

## Result

:NuxtLinkDemo
