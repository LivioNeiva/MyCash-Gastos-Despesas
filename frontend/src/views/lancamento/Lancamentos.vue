<template>
  
  <LancamentoForm />
  
  <!-- esse Lancamento vai repetir cada lanc dos ids,descricao,data,valor,tipo.. q esta na função data, o v-for(mesmo q for(){}) faz uma interação em cada lista -->
  <!-- diretiva v-for, a diretiva key vai identificar cada elemento será feita aidentificaçao de cada obj e jogar para dentro componente Lancamento, ex. precisar remover um obj o key vai identificar qual obj sera removido -->
  <Lancamento
  v-for="lanc in todosLancamentos"
  :key="lanc.id" 
  :lancamento="lanc"/> <!-- esse lanc é mesmo lanc do v-for -->
  <!-- resumindo: o propriedade :lancamento é referente ao props-lancamento-object está componente Lancamento. e o "lanc" é a variavel do v-for lanc -->

</template>

<script>

  import Lancamento from "./Lancamento.vue" //importei o componente Lancamento esta mesma pasta lancamento
  import LancamentoForm from "./LancamentoForm.vue"
  import { mapGetters, mapActions } from "vuex"
export default {
  components: { //temos fazer export do componente

    Lancamento, LancamentoForm
  },

  computed: { 
    ...mapGetters(['todosLancamentos']) //pega a funçao esta em todosLancamentos no arquivo store/modules/lancamentos.js e disponibiliza aki, o v-for chama essa função
  },
  //agora nos conseguimos invocar essa função de qualquer lugar para dentro o componente
  methods: {//estamos fazendo o mapeamento da função para dentro do componente
    //esta função esta seendo mapeada
    ...mapActions(['buscarLancamentos']) //buscarLancamento estar em store/modules/lancamentos.js
  },
  mounted() {//como queremos que essa função seja lançada, ou seja invocada toda vezque um componente for montado. toda vez esse componente aparecer
    //invoca(chamar) a função que esta no store
    this.buscarLancamentos() //toda vez esse componente é montado esse metodo é invocado
  }
}
</script>

<style>

</style>
