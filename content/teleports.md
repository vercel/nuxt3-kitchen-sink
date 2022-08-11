# Teleports

Vue 3 provides the &lt;Teleport&gt; component which allows content to be rendered elsewhere in
the DOM, outside of the Vue application. The to target of &lt;Teleport&gt; expects a CSS
selector string or an actual DOM node. Nuxt currently has SSR support for teleports to body
only, with client-side support for other targets using a &lt;ClientOnly&gt; wrapper.

:Teleports

<!-- ::CodeBlock{componentName="TeleportsDemo"}
#tab1
/pages/index.vue
#code1

```vue
<template>
	<button @click="open = true">Open Modal</button>
	<Teleport to="body">
		<div v-if="open" class="modal">
			<p>Hello from the modal!</p>
			<button @click="open = false">Close</button>
		</div>
	</Teleport>
</template>
```

#tab3
Result
:: -->
