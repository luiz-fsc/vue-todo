<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer"> -->
    <!--  -->
    <!-- </v-navigation-drawer> -->

    <v-navigation-drawer 
      v-model="drawer"
      temporary=""
    >
      <v-list>
        <v-list-item title="Lista de Tarefas" subtitle="Vue.js e Vuetify"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(null)
</script>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>