<template>
  <nav>
    <router-link :to="{ name: 'Home' }">
      Home
    </router-link> |
    <router-link :to="{ name: 'Profile' }">
      Profile
    </router-link> |
    <a href="javascript:void(0)"
       @click="logout"
    >
      Logout
    </a>
  </nav>
  <div>
    <a href="https://vitejs.dev"
       target="_blank"
    >
      <img src="/vite.svg"
           class="logo"
           alt="Vite logo"
      >
    </a>
    <a href="https://vuejs.org/"
       target="_blank"
    >
      <img src="/vue.svg"
           class="logo vue"
           alt="Vue logo"
      >
    </a>
  </div>
  <main>
    <slot />
  </main>
</template>

<script lang="ts">
  export default {
    name: 'Default',
    inheritAttrs: false,
    customOptions: {},
  }
</script>

<script setup lang="ts">
  import { useAuthStore } from "@/stores/auth";

  const authStore = useAuthStore();

  const logout = async () => {
    await authStore.signOut();
  };
</script>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
