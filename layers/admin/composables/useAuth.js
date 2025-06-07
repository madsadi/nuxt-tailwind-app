export function useAuth() {
  const { $auth } = useNuxtApp();

  const authenticated = ref(false);

  if ($auth) {
    authenticated.value = $auth.isAuthenticated?.();

    // Optional: update automatically on auth events
    // You could add logic to update this ref based on login/logout events
  }

  const login = async (credentials) => {
    try {
      await $auth.loginWith("local", { data: credentials });
      authenticated.value = true;
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await $auth.logout();
      authenticated.value = false;
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return {
    isAuthenticated: authenticated,
    login,
    logout,
  };
}
