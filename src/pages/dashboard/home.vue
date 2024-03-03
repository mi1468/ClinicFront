<!-- LoginPage.vue -->
<template>
  <div>
    <div style="height: 50px">
      <h4 style="text-align: center; margin-top: 10px">Dashboard</h4>
    </div>
    <v-row no-gutters>
      <v-col-18>
        <SidebarMenu />
      </v-col-18>
      <v-col>
        <v-img src="@/assets/dashboard.jpg" style="object-fit: unset" />

        <v-container> </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import SidebarMenu from "@/components/sidebars/SidebarMenu.vue";
import { checkTokenAndRedirectDashboard } from "@/auth";
import { log } from "console";

export default defineComponent({
  name: "LoginPage",
  components: {
    SidebarMenu,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:8000/login", {
          email: this.email,
          password: this.password,
        });
        console.log(response.data);

        const token = response.data.token;
        // Store the token in local storage or Vuex
        localStorage.setItem("token", token);
        // Redirect or do something else after successful login
        // Example: this.$router.push('/dashboard');
      } catch (error) {
        console.error("Login failed:", error);
        // Handle login error
      }
    },
  },
  mounted() {
    checkTokenAndRedirectDashboard();
  },
});
</script>
