<template>
  <v-card style="width: 350px">
    <v-layout>
      <v-navigation-drawer floating permanent style="width: 100%">
        <v-list dense nav>
          <!-- Intro Item -->
          <v-list-item value="intro">
            <v-list-item-content> Intro </v-list-item-content>
            <v-list-item-icon>
              <v-icon color="primary">mdi-home-variant</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <!-- Login Item -->
          <v-list-item value="login">
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon color="primary">mdi-account-key</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
