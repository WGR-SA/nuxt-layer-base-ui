export const useAlert = () => {

  interface AppAlert {
    message: string
    type: 'info' | 'warning' | 'error' | 'success' | 'default'
    visible: boolean
  } 

  const alert = useState<AppAlert>('app_alert', () => ({
    message: '',
    type: 'info',
    visible: false
  }))

  const showAlert = (message: string, type?: AppAlert["type"]) => {
    alert.value = { message, type: type ?? 'info', visible: true }
  }
  const getAlert = () => alert.value
  const hideAlert = () => alert.value.visible = false
  const isAlertVisible = () => alert.value.visible

  return {
    showAlert,
    getAlert,
    hideAlert,
    isAlertVisible
  }
}
