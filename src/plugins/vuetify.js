// Styles
import '@mdi/font/css/materialdesignicons.css' // Material Design Icons
import 'vuetify/lib/styles/main.sass'

// Vuetify
import { createVuetify } from 'vuetify'

// Theme configuration
const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#1976D2', // Blue
    secondary: '#424242', // Grey
    accent: '#82B1FF', // Light Blue
    error: '#FF5252', // Red
    info: '#2196F3', // Blue
    success: '#4CAF50', // Green
    warning: '#FFC107' // Yellow
  }
}

// Create Vuetify instance
export default createVuetify({
  theme: {
    themes: {
      myCustomLightTheme // Register the custom theme
    },
    defaultTheme: 'myCustomLightTheme' // Use the custom theme
  }
})
