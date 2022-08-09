<template>
	<div class="w-full">
		<div class="mb-6">
			<div class="mb-2 font-bold">Basic Usage</div>
			<div class="mb-4 leading-tight">
				Let's visit an external website using Nuxt-Link! Click the link below to open nuxt.com in a
				new tab. This link is usinf the rel and target attributes.
			</div>
			<NuxtLink
				class="p-2 text-sm font-medium text-white uppercase bg-blue-400 rounded"
				to="https://nuxtjs.org"
				target="_blank"
				rel="noopener"
			>
				Nuxt Website
			</NuxtLink>
		</div>
		<div>
			<div class="mb-2 font-bold">Internal Routing</div>

			<div class="mb-4 leading-tight">
				This link will route to the /routing page within this application. Click the link below to
				experience how it works!
			</div>
			<NuxtLink
				class="p-2 text-sm font-medium text-white uppercase bg-blue-400 rounded"
				to="/routing"
			>
				Routing Page
			</NuxtLink>
		</div>
	</div>
</template>
