<template>
  <main>
    <ContentDoc />
  </main>
</template>

<style>
pre {
  @apply p-6 mb-8 font-mono text-sm rounded-b-lg bg-dark text-light;
}
body {
  margin: 8px;
  line-height: normal;
}

p {
  margin: 1em 0;
}

hr {
  border: 1px inset;
  box-sizing: border-box;
  margin: 0.5em auto;
}

h1 {
  font-size: 2em;
  font-weight: bold;
  margin: 0.67em 0;
}

h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin: 0.83em 0;
}

h3 {
  font-size: 1.17em;
  font-weight: bold;
  margin: 1em 0;
}

h4 {
  @apply bg-dark text-primary rounded-t-lg px-6 pt-6 text-xs;
}

ol {
  list-style-type: decimal;
  margin: 1em 0;
  padding: 0 0 0 40px;
}
ul {
  list-style-type: circle;
  margin-left: 20px;
}
</style>
