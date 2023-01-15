# Edge Functions

[Edge Functions](http://vercel.com/edge) allow you to deliver content to your site's visitors with speed and personalization. They are deployed globally on Vercel's Edge Network and enable you to move server-side logic to the Edge, close to your visitors.

#### `/pages/index.vue`

```vue
<script setup>
const { data: info } = await useAsyncData(() =>
  globalThis.$fetch('/api/info', {
    headers: useRequestHeaders(['x-forwarded-for', 'x-vercel-ip-city']),
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

#### `/server/api/info.ts`

```ts
export default eventHandler((event) => {
  const cityHeader = event.req.headers['x-vercel-ip-city'] as string;
  const city = cityHeader ? decodeURIComponent(cityHeader) : '-';
  const ipHeader = event.req.headers['x-forwarded-for'] as string;
  const ip = ipHeader ? ipHeader.split(',')[0] : '-';

  return {
    city,
    ip,
  };
});
```

## Result

:EdgeDemo
