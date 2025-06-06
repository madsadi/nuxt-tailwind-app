import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth();

  if (to.path === "/" || to.path === "/login") {
    if (process.client && isAuthenticated()) {
      return navigateTo("/admin/dashboard");
    } else if (process.server && to.path === "/") {
      return navigateTo("/login");
    }
  }

  if (to.path.startsWith("/admin")) {
    if (process.client) {
      if (!isAuthenticated()) {
        return navigateTo("/login");
      }
    } else {
      return;
    }
  }
});
