/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
 ;

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
 


// async function checkTokenAndRedirect(): Promise<void> {
//   const TOKEN_KEY = "token";
//   const token = localStorage.getItem(TOKEN_KEY);

//   if (!token) {
//     // Token not found, redirect to login
//     window.location.href = "/login";
//     return;
//   }

//   try {
//     const response = await axios.get(`${API_URL}/getInfo`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     // User authorized, redirect to dashboard
//     window.location.href = "/dashboard";
//   } catch (error) {
//     // If unauthorized, remove token and redirect to login
//     localStorage.removeItem(TOKEN_KEY);
//     window.location.href = "/login";
//   }
// }

// checkTokenAndRedirect();
