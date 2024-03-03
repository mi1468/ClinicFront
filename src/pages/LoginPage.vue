<!-- LoginPage.vue -->
<template>
  <div>
    <div style="height: 50px">
      <h4 style="text-align: center; margin-top: 10px">Login</h4>
    </div>
    <v-row no-gutters>
      <v-col-18>
        <SidebarMenu />
      </v-col-18>
      <v-col>
        <v-img src="@/assets/login.jpg" style="object-fit: unset" />

        <v-container>
          <h2>Login</h2>
          <v-form @submit.prevent="login">
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
            ></v-text-field>
            <v-btn block type="submit" color="primary">Login</v-btn>
          </v-form>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import SidebarMenu from "../components/sidebars/SidebarMenu.vue";
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
});
</script>
