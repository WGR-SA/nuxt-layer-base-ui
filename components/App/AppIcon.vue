<script lang="ts" setup>
defineProps<{
  icon: string
  color?: string
}>()
</script>

<template>
  <span 
    class="icon"
    :style="`--color: ${color}`"
  >
    {{ icon }}
  </span>
</template>