import { defineStore } from "pinia";
import router from "@/routes";
import { AuthApiService, AuthPayloadDto, User } from "@/libs";

interface State {
  user: User | undefined,
  token: AuthPayloadDto | undefined,
  returnUrl: string | undefined
}

export const useAuthStore = defineStore("auth", {
  state: (): State => ({
    user: undefined,
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : undefined,
    returnUrl: undefined
  }),

  actions: {
    async fetchUser() {
      try {
        this.user = await new AuthApiService().User();
      } catch (error) {
        if (error instanceof Response) {
          if (error.status === 401) {
            this.user = undefined;
            localStorage.removeItem('token');
          }
        }
      }
    },
    async signIn(email: string, password: string) {
      const res = await new AuthApiService().Login({ email, password });
      localStorage.setItem('token', JSON.stringify(res));
      
      router.push(this.returnUrl || '/');
    },
    signOut() {
      this.user = undefined;
      localStorage.removeItem('token');
      router.push('/login');
    }
  },
});
