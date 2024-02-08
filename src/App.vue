<template>
  <v-app id="inspire">

    <v-navigation-drawer 
      v-model="drawer"
      temporary
    >
      <v-list>
        <v-list-item title="Lista de Tarefas" subtitle="Vue.js e Vuetify"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
        >
        </v-list-item>
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
  data: () => ({
    drawer: null,
    items: [
      {
        title: 'Tarefas',
        value: 'home',
        icon: 'mdi-check-circle',
      },
      {
        title: 'Sobre',
        value: 'about',
        icon: 'mdi-information',
      },
    ],
  }),
}
</script>