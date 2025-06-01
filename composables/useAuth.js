export function useAuth() {
  const { $auth } = useNuxtApp();

  const isAuthenticated = () => {
    return $auth.isAuthenticated();
  };

  const login = async (credentials) => {
    try {
      await $auth.loginWith("local", { data: credentials });
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await $auth.logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
}
