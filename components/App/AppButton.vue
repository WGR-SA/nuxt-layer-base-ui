<script lang="ts" setup>
const props = defineProps<{
  type?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info',
  url?: URL
}>()
const type = props.type ?? 'default'
</script>

<template>
  <button 
    :class="`button--${type }`" @click="url ? useRouter().push(url) : false" 
    :style="`--background: var(--color-${type});`"
  >
    <slot />
  </button>
</template>