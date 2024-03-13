<template>
  <div>
    <v-col
      cols="12"
    >
      <v-text-field
        v-model="campoInput"
        label="Qual a sua tarefa?"
        variant="outlined"
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>

    <v-list lines="two" select-strategy="classic">
      <div
      v-for="tarefa, index in $store.state.tarefas"
      :key="index"
      >
        <Tarefa
        @alterar-status-tarefa="alterarValorTarefa"
        :tarefa="tarefa"
        />
      </div>
      
    </v-list>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Tarefa from '..\\src\\components\\tarefas\\TarefaComponent.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    Tarefa
  },
  data() {
    return {
      campoInput: null,
    }
  },
  methods: {
    handleAddTarefa() {
      this.$store.commit('adicionarTarefa', this.campoInput)
      this.campoInput = null;
    },
    alterarValorTarefa(tituloModificado){
      // console.log(this.$store, tituloModificado);
      this.$store.commit('alterarValor', tituloModificado)
    }
  },
  
});
</script>
