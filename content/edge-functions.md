# Edge Functions

## Edge Function Example

::CodeBlock
#tab1
/pages/index.vue
#code1

```vue
<script setup>
	const { data: info } = await useAsyncData(() =>
		globalThis.$fetch('/api/info', {
			headers: useRequestHeaders(['x-forwarded-for', 'x-vercel-ip-city'])
		})
	);
	const generatedAt = useState(() => new Date().toISOString());
</script>

<template>
	<div>
		<div>Hello from the Edge!</div>
		<div>
			Your City: <span>{{ info.city }}</span>
		</div>
		<div>
			Your IP address: <span>{{ info.ip }}</span>
		</div>
		<div>
			Generated at: <span>{{ generatedAt }}</span>
		</div>
	</div>
</template>
```

::

::CodeBlock

#tab1
/server/api/info.ts
#code1

```ts
export default eventHandler((event) => {
	const cityHeader = event.req.headers['x-vercel-ip-city'] as string;
	const city = cityHeader ? decodeURIComponent(cityHeader) : '-';
	const ipHeader = event.req.headers['x-forwarded-for'] as string;
	const ip = ipHeader ? ipHeader.split(',')[0] : '-';

	return {
		city,
		ip
	};
});
```

::

## Result

:EdgeDemo
