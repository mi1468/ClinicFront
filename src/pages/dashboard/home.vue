 <template>
  <div>
    <div style="height: 50px">
      <h4 style="text-align: center; margin-top: 10px">Dashboard</h4>
    </div>
    <v-row no-gutters>
      <v-col-2>
        <SidebarMenu />
      </v-col-2>
      <v-col>
        <v-img
          src="@/assets/dashboard.jpg"
          height="450"
          aspect-ratio="16/9"
          cover
        />

        <div>
          <router-link to="dashboard/reception">
            <v-card
              :variant="variant"
              class=""
              max-width="344"
              style="margin: 1em; padding: 1em"
              elevation="10"
            >
              <v-card-item>
                <div>
                  <div class="text-overline mb-1">
                    {{ variant }}
                  </div>
                  <v-img
                    src="@/assets/menu/buttons/templateform.svg"
                    style="height: 8em"
                  />
                  <div class="text-h5" style="text-align: center; margin: 1em">
                    Patientenaufnahme
                  </div>
                </div>
              </v-card-item>
            </v-card>
          </router-link>
        </div>
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
