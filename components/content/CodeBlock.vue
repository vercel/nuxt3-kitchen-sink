<template>
	<div class="relative rounded-md bg-secondary mt-4">
		<div class="flex items-center pt-2 pl-4 text-dark mb-4">
			<div class="bg-primary px-2 mr-2 text-sm rounded-md">
				<slot name="tab1" />
			</div>
		</div>
		<div class="px-4 pb-4 overflow-scroll max-h-96 text-light">
			<div class="text-sm leading-tight">
				<slot name="code1" />
			</div>
		</div>
	</div>
</template>
