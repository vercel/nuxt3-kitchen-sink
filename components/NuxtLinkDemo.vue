<template>
  <div class="w-full bg-light p-6 rounded">
    <div class="mb-6">
      <div class="mb-2 font-bold">Basic Usage</div>
      <div class="mb-4 leading-tight">
        Let's visit an external website using Nuxt-Link! Click the link below to
        open nuxt.com in a new tab. This link is usinf the rel and target
        attributes.
      </div>
      <NuxtLink
        class="p-3 text-sm font-medium text-dark uppercase bg-primary rounded"
        to="https://nuxtjs.org"
        target="_blank"
        rel="noopener"
      >
        Nuxt Website
      </NuxtLink>
    </div>
    <div>
      <div class="mb-2 font-bold">Internal Routing</div>

      <div class="mb-4 leading-tight">
        This link will route to the /routing page within this application. Click
        the link below to experience how it works!
      </div>
      <NuxtLink
        class="p-3 text-sm font-medium text-dark uppercase bg-primary rounded"
        to="/"
      >
        Routing Page
      </NuxtLink>
    </div>
  </div>
</template>
