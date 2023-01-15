export default defineNuxtRouteMiddleware((to, from) => {
  const username = useState('username');

  if (!username.value) {
    process.client && alert('Sorry, you need to fill your username');
    return navigateTo('/middleware');
  }
});
