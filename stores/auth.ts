import { defineStore } from "pinia";
import {
  loginResponse,
  signupResponse,
} from "~/composables/auth/authorization";
interface AuthState {
  _id: string;
  name: string;
  email: string;
  admin: boolean;
}
interface createUser {
  name: string;
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as null | AuthState,
    token: null as null | string,
    message: null as null | string,
  }),
  actions: {
    async login({ email, password }: { email: string; password: string }) {
      const { user, message, token } = await loginResponse({ email, password });
      this.user = user;
      this.message = message;
      this.token = token;
      localStorage.setItem("token", token);
    },
    async signup({ name, email, password }: createUser) {
      const { user, message, token } = await signupResponse({
        name,
        email,
        password,
      });
      this.user = user;
      this.message = message;
      this.token = token;
      localStorage.setItem("token", token);
    },
    logout() {
      this.user = null;
      this.token = null;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});
