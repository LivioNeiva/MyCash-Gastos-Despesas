import { createStore } from 'vuex'
import lancamentos from './modules/lancamentos.js'

export default createStore({
  //sao os dados q sao gerenciados na aplicação e sao compartilhados entre os componentes
  state: { //e onde vamos delacar todas as variaveis ou ateibutos que vao est sendo utilizado pelo componente
  },
  //toda mudança que for feita no atributo do state deve ocorrer dentro de mutations atraves dos metodos/funçõrd
  mutations: {
  },
  //As ações (actions), que são as possíveis maneiras pelas quais o estado pode mudar em reação às interações dos usuários da view
  actions: {// as funções que vão está se comunicando com back-end
  },
  //nos vamos está separando cada store para cada atributo
  modules: {

    lancamentos

  }
})
