<template>
  <div>
    <div style="height: 50px">
      <h4 style="text-align: center; margin-top: 10px">Signup</h4>
    </div>
    <v-row no-gutters>
      <v-col-18>
        <SidebarMenu />
      </v-col-18>
      <v-col>
        <v-img src="@/assets/login.jpg" style="object-fit: unset" />

        <v-container>
          <h2>Signup</h2>
          <v-form @submit.prevent="signup">
            <v-text-field
              v-model="caseNumber"
              label="Case Number"
            ></v-text-field>

            <v-text-field v-model="email" label="Email"></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              type="password"
            ></v-text-field>
            <v-text-field
              v-model="repassword"
              label="Re - Password"
              type="password"
            ></v-text-field>

            <v-date-picker
              v-model="birthday"
              @input="toggleDatePicker"
              label="Birthday"
            ></v-date-picker>

            <v-checkbox
              v-model="terms1"
              label="Ich habe die Datenschutzerklärung gelesen und stimme dieser zu."
            ></v-checkbox>
            <v-checkbox
              v-model="terms2"
              label="Ich stimme den Nutzungsbedingungen zu."
            ></v-checkbox>
            <v-checkbox
              v-model="terms3"
              label="Ich stimme der Speicherung meiner personenbezogenen Daten zu."
            ></v-checkbox>

            <v-btn block type="submit" color="primary">Signup</v-btn>
          </v-form>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import SidebarMenu from "@/components/sidebars/SidebarMenu.vue";
import { log } from "console";

export default defineComponent({
  name: "LoginPage",
  components: {
    SidebarMenu,
  },
  data() {
    return {
      email: "",
      caseNumber: "",
      password: "",
      repassword: "",
      birthday: new Date("1990-01-01"), // Initialize birthday as null
      datePickerVisible: false, // flag to toggle visibility of date picker
      terms1: false,
      terms2: false,
      terms3: false,
    };
  },
  methods: {
    async signup() {
      try {
        const response = await axios.post("http://localhost:8000/signup", {
          username: this.email,
          caseNumber: this.caseNumber,
          birthday: "1990-01-01",
          email: this.email,
          password: this.password,
        });
        console.log(response.data);

        const token = response.data.token;
        // Store the token in local storage or Vuex
        localStorage.setItem("token", token);
        // Redirect or do something else after successful login
        this.$router.push("/dashboard");
      } catch (error) {
        console.error("Login failed:", error);
        // Handle login error
      }
    },

    toggleDatePicker() {
      this.datePickerVisible = !this.datePickerVisible;
    },
  },
});
</script>
