export default defineAppConfig({
  baseUi: {
    name: 'WGR SA - Base UI Layer',
    icons: {
      success: '✅',
      error: '⛔',
      warning: '⚠',
      info: '🆗'
    }
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    baseUi?: {
      name?: string,
      icons?: {
        success?: string,
        error?: string,
        warning?: string,
        info?: string,
      }
    }
  }
}
