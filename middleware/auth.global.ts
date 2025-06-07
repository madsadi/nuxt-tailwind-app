import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth();

  if (to.path === "/auth") {
    if (process.client && isAuthenticated()) {
      return navigateTo("/admin/dashboard");
    }
  }

  if (to.path.startsWith("/admin")) {
    if (process.client) {
      if (!isAuthenticated()) {
        return navigateTo("/auth");
      }
    } else {
      return;
    }
  }
});
