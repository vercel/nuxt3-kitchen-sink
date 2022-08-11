# Nuxt Content

Nuxt Content reads the content/ directory in your project, parses .md, .yml, .csv and .json files to create a powerful data layer for your application. Use Vue components in Markdown with the MDC syntax.

## Install the the @nuxt/content module:

::CodeBlock
#tab1
yarn
#code1

```js
yarn add --dev @nuxt/content
```

#tab2
npm
#code2

```js
npm install --save-dev @nuxt/content
```

#tab3
pnpm
#code3

```js
pnpm add -D @nuxt/content
```

::

## Then, add @nuxt/content to the modules section of nuxt.config.ts:

::CodeBlock
#tab1
nuxt.config.ts
#code1

```js
import { defineNuxtConfig } from 'nuxt';
export default defineNuxtConfig({
	modules: ['@nuxt/content'],
	content: {
		// https://content.nuxtjs.org/api/configuration
	}
});
```

::

## Render Pages

To render content pages, add a catch-all route using the ContentDoc component:

::CodeBlock
#tab1
/pages/[...slug].vue
#code1

```vue
<template>
	<main>
		<ContentDoc />
	</main>
</template>
```

::

Now just place your markdown files inside the content/ directory in the root directory of your project. This template was built using Nuxt Content, so take a look at the code to see a working example!
