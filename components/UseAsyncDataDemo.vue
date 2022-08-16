<template>
	<div class="w-full bg-light p-6 rounded mb-8">Page visits: {{ data }}</div>
</template>

<script setup>
	const { data } = await useAsyncData('count', () => $fetch('/api/count'));
</script>
