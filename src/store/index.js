import { createStore } from 'vuex'

export default createStore({
  state: {
    tarefas:[
      {titulo:"ir ao mercado", concluido: false },
      {titulo:"Trabalho web fullstack", concluido: false },
      {titulo:"correção de bug", concluido: true },
    ]
  },
  getters: {
  },
  mutations: {
    alterarValor(state, tituloModificado){
      this.state.tarefas.forEach(tarefa=>{
        if(tarefa.titulo == tituloModificado.titulo)
          tarefa.concluido = tituloModificado.concluido;
      })
      console.log(this.state.tarefas)
    },

    adicionarTarefa(state, titulo){
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        });
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
