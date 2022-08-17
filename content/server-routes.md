# Server Routes

Nuxt automatically scans files inside the `~/server/api` directory to register API and server handlers with HMR support.

Each file should export a default function defined with `defineEventHandler()`, which can return JSON data, a Promise or use event.res.end() to send response.This API can now be called universally using `await $fetch('/api/hello')`.

### Code

::CodeBlock
#tab1
/server/api/hello.ts
#code1

```ts
export default defineEventHandler(() => {
	return {
		message: 'Hello, World!'
	};
});
```

::
::CodeBlock

#tab1
/pages/index.vue
#code1

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

::

### Result

:ServerRoutesDemo
