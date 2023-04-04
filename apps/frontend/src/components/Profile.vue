<template>
  <div class="card">
    <h2>Привет, {{ authUser?.email ?? 'Гость' }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from "@/stores/auth";

  const authStore = useAuthStore();
  const { user: authUser } = storeToRefs(authStore);

  const text = ref()

  onMounted(async () => {
    text.value = await fetch("/api").then(res => res.text())
  })
  
</script>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
