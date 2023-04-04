<template>
  <form @submit.prevent="login">
    <label>Email</label>
    <input v-model="email"
           type="text"
    >
    <label>Password</label>
    <input v-model="password"
           type="password"
    >
    <button type="submit">
      Login
    </button>
  </form>
</template>

<script setup lang="ts">
  import { Ref, ref } from 'vue'
  import { useAuthStore } from "@/stores/auth";

  const email: Ref<string> = ref('john@mail.ru')
  const password: Ref<string> = ref('changeme')
  const authStore = useAuthStore();

  const login = async () => {
    if (email.value && password.value) {
      try {
        await authStore.signIn(email.value, password.value);
      } catch (error) {
        alert(error)
      }
    }
  };
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  form > label {
    font-weight: bold;
  }

  form > input {
    margin: 0 0 1em;
    padding:10px;
    border:0;
    box-shadow:0 0 15px 4px rgba(0 0 0 6%);
  }

  button {
    width: 100%;
  }
</style>
