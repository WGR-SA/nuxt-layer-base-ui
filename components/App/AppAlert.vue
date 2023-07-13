<script lang="ts" setup>
const appConfig = useAppConfig()
const { getAlert, hideAlert, isAlertVisible } = useAlert()
const alert = getAlert()  
// @ts-ignore
const icon = appConfig.baseUi.icons[alert.type];
</script>

<template>
  <article v-if="isAlertVisible()" :class="`alert alert--${alert.type}`">
    <p>
      <AppIcon :icon="icon" :color="`var(--color-${alert.type})`" />
      {{ alert.message }} 
    </p>
    <AppIcon icon="❌" @click="hideAlert()"/>
  </article>
</template>
