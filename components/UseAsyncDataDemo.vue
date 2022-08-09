<script setup>
	const { data } = await useAsyncData('count', () => $fetch('/api/count'));
</script>

<template>Page visits: {{ data }}</template>
