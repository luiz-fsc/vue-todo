<template>
  <div>
    <v-list-item
    :class="{'bg-blue-lighten-4':tarefa.concluido}"
    @click="alterarStatusTarefa()"
    >
      <template v-slot:prepend="{}">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="tarefa.concluido"></v-checkbox-btn>
        </v-list-item-action>
        
        <v-list-item-content>
          <v-list-item-title
          :class="{'text-decoration-line-through':tarefa.concluido}"
          >{{tarefa.titulo}}</v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props:['tarefa'],
  methods: {
    alterarStatusTarefa(){
      this.$emit("alterar-status-tarefa", {titulo:this.tarefa.titulo, concluido:!this.tarefa.concluido})
    },
  },
}


</script>
