import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth();

  console.log(to, from);
  // Only apply auth logic to routes that start with /dashboard
  if (to.path === "/" || to.path === "/login") {
    if (process.client && isAuthenticated()) {
      return navigateTo("/dashboard");
    } else if (process.server && to.path === "/") {
      // Prevent SSR error by returning nothing on server
      return navigateTo("/login");
    }
  }

  if (to.path.startsWith("/dashboard")) {
    if (process.client) {
      if (!isAuthenticated()) {
        return navigateTo("/login");
      }
    } else {
      // Prevent SSR error by returning nothing on server
      return;
    }
  }
});
