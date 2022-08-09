# `NuxtLoadingIndicator`

Nuxt provides <NuxtLoadingIndicator> to display a progress bar on page navigation.

::CodeBlock{componentName="NuxtLoadingIndicatorDemo"}
#tab1
/pages/index.vue
#code1

```vue
<template>
	<NuxtLayout>
		<NuxtLoadingIndicator />
		<NuxtPage />
	</NuxtLayout>
</template>
```

#tab3
Result
::

The loading indicator can be customized! It has the following props

- color: The color of the loading bar.
- height: Height of the loading bar, in pixels (default 3).
- duration: Duration of the loading bar, in milliseconds (default 2000).
- throttle: Throttle the appearing and hiding, in milliseconds (default 200).

Let's customize it using these props.

::CodeBlock{componentName="NuxtLoadingIndicatorDemo"}
#tab1
/pages/index.vue
#code1

```vue
<template>
	<NuxtLayout>
		<NuxtLoadingIndicator color="#348feb" height="5" />
		<NuxtPage />
	</NuxtLayout>
</template>
```

#tab3
Result
::
