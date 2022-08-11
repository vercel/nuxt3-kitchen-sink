<template>
	<CodeBlock componentName="TeleportsDemo">
		<template v-slot:tab1>
			<p>/pages/index.vue</p>
		</template>
		<template v-slot:tab4>
			<p>Result</p>
		</template>
		<template v-slot:code1>
			<pre>{{ code }}</pre>
		</template>
	</CodeBlock>
</template>

<script>
	import d from 'dedent';

	export default {
		data() {
			return {
				code: d`<template>
                        <button @click="open = true">Open Modal</button>
                        <Teleport to="body">
                            <div v-if="open" class="modal">
                                <p>Hello from the modal!</p>
                                <button @click="open = false">Close</button>
                            </div>
                        </Teleport>
                    </template>`
			};
		}
	};
</script>
