<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item title="Lista de Tarefas" subtitle="Vue.js e Vuetify"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item v-for="item in items" 
          :to="item.to" 
          :key="item.title" 
          :prepend-icon="item.icon" 
          :title="item.title"
          :value="item.value">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="teal-darken-4"
      :image="require('./assets/calendar.jpg')"
      density="prominent"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        ></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon location="left" @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title></v-app-bar-title>
    </v-app-bar>    

    <v-main>
      <router-view/>
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
        to: '/'
      },
      {
        title: 'Sobre',
        value: 'about',
        icon: 'mdi-information',
        to: '/about'
      },
    ],
  }),
}
</script>