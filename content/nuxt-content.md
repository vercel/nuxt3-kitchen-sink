# Nuxt Content

Nuxt Content reads the `content/` directory in your project, parses `.md`, `.yml`, `.csv` and `.json` files to create a powerful data layer for your application. Use Vue components in Markdown with the MDC syntax.

## Install the the `@nuxt/content` module:

#### `yarn`

```js
yarn add --dev @nuxt/content
```

#### `npm`

```js
npm install --save-dev @nuxt/content
```

#### `pnpm`

```js
pnpm add -D @nuxt/content
```

## Then, add @nuxt/content to the modules section of nuxt.config.ts:

#### `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
});
```

## Render Pages

To render content pages, add a catch-all route using the ContentDoc component:

#### `/pages/\[...slug\].vue`

```vue
<template>
  <main>
    <ContentDoc />
  </main>
</template>
```

Now just place your markdown files inside the content/ directory in the root directory of your project. This template was built using Nuxt Content, so take a look at the code to see a working example!
