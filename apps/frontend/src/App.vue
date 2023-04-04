<template>
  <component :is="layout_component">
    <router-view />
  </component>
</template>

<script lang="ts" setup>
  import { computed } from "vue"
  import { useRoute } from "vue-router"

  const route = useRoute()
  const layout_component = computed(() => route?.meta?.layout ?? 'Empty')
</script>
