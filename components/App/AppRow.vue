<!-- Only for wawa -->
<script lang="ts" setup>
const props = defineProps<{
  columns: string
}>()
</script>

<template>
  <section 
    class="grid"
    :style="`grid-template-columns: ${props.columns};`"
  >
    <slot />
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: auto;
  grid-gap: 1rem;
}
</style>