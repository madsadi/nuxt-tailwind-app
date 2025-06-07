import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuth } from "~/layers/admin/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth();

  console.log("Auth Middleware", { to, from, isAuthenticated });
  if (to.path === "/auth") {
    if (process.client && isAuthenticated.value) {
      return navigateTo("/admin/dashboard");
    }
  }

  if (to.path.startsWith("/admin")) {
    if (process.client) {
      if (!isAuthenticated.value) {
        return navigateTo("/auth");
      }
    } else {
      return;
    }
  }
});
