<template>
  <!-- esse Lancamento vai repetir cada lanc dos ids,descricao,data,valor,tipo.. q esta na função data, o v-for(mesmo q for(){}) faz uma interação em cada lista -->
  <!-- diretiva v-for, a diretiva key vai identificar cada elemento será feita aidentificaçao de cada obj e jogar para dentro componente Lancamento, ex. precisar remover um obj o key vai identificar qual obj sera removido -->
  <Lancamento
  v-for="lanc in lancamentos"
  :key="lanc.id" 
  :lancamento="lanc"/> <!-- esse lanc é mesmo lanc do v-for -->
  <!-- resumindo: o propriedade :lancamento é referente ao props-lancamento-object está componente Lancamento. e o "lanc" é a variavel do v-for lanc -->

</template>

<script>

  import Lancamento from "./Lancamento.vue" //importei o componente Lancamento esta mesma pasta lancamento

export default {
  components: { //temos fazer export do componente

    Lancamento
  },

  data(){ //crianmos a função data para retornar um obj
    return{
      lancamentos: [
        {
          "id": 3,
          "descricao": "Livro",
          "data": "2021-05-12",
          "valor": 29.9,
          "tipo": "DESPESA"
        },
        {
          "id": 4,
          "descricao": "Venda Liquidificador",
          "data": "2021-05-12",
          "valor": 50.00,
          "tipo": "RECEITA"
        },
      ]
    }

  }

}
</script>

<style>

</style>
