import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
  const TOKEN_KEY = "auth_token";

  const auth = {
    isAuthenticated: () => {
      if (process.client) {
        console.log("Checking authentication status...");
        return !!localStorage.getItem(TOKEN_KEY);
      }
      return false;
    },

    loginWith: (
      strategy: string,
      { data }: { data: { username: string; password: string } }
    ) => {
      // Simulate login success
      console.log(
        "Attempting to log in with strategy:",
        strategy,
        data,
        data.username,
        data.password
      );
      if (
        strategy === "local" &&
        data.username === "admin" &&
        data.password === "admin"
      ) {
        // In real use, get token from API
        const fakeToken = "123456789";
        localStorage.setItem(TOKEN_KEY, fakeToken);
        return Promise.resolve();
      } else {
        return Promise.reject(new Error("Invalid credentials"));
      }
    },

    logout: async () => {
      localStorage.removeItem(TOKEN_KEY);
    },

    getToken: () => {
      return localStorage.getItem(TOKEN_KEY);
    },
  };

  return {
    provide: {
      auth,
    },
  };
});
