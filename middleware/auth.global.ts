export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.server) return;
  const token = import.meta.client ? localStorage.getItem("token") : null;
  if (!token && to.path !== "/login") {
    return navigateTo("/login");
  } else if (token && to.path === "/login") {
    return navigateTo("/");
  }
});
