defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const { token } = authStore;
  if (!token) {
    return navigateTo("/login");
  }
});
