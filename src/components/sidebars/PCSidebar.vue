<template>
  <v-card style="width: 350px">
  <v-layout>
  <v-navigation-drawer floating permanent style="width: 100%;">
    <v-list density="compact" nav>
      <v-list-item
        append-icon="mdi-home-variant"
        title="Intro"
        value="intro"
      ></v-list-item>
      <v-list-item
        append-icon="mdi-account-key"
        title="Login"
        value="login"
      ></v-list-item>
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
