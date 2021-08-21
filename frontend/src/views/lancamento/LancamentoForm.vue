<!-- criando a estrutura basica com vue -->
<template> <!-- submit.prevent -> impede q a pagina faça um refresh depois faz um submit no formulario -->
    <div class="notification is-danger" v-show="temErro">
        <button class="delete"></button>
            {{ mensagemErro.mensagem }}
        <ul>
            <li v-for="e in mensagemErro.subErros" :key="e">{{e}}</li>
        </ul>
  </div>
  <form @submit.prevent="onClickAdicionar" class="m-4"> <!-- atalho bulma = m é toda margem, mb-5 e margem baixo, distancia 5px margem abaixo radio, mt margem superior, ml margem esquerda, mr margem direita -->
    <div class="field">
        <label class="label">Descrição</label>
        <div class="control"> <!-- v-model="lancamento.descricao" o lancamento vem do lancamento esta em computer, e descricao é um atribuo de lancamento -->
            <input v-model="lancamento.descricao" class="input" type="text" placeholder="descição...">
        </div>
    </div>
    <div class="field">
        <label class="label">Valor</label>
        <div class="control"> <!-- v-model="lancamento.descricao" o lancamento vem do lancamento esta em computer, e valor é um atribuo de lancamento -->
            <input v-model="lancamento.valor" class="input" type="number" placeholder="0.00" step="0.01">
        </div>
    </div>
        <div class="field">
        <label class="label">Data</label>
        <div class="control"> <!-- v-model="lancamento.descricao" o lancamento vem do lancamento esta em computer, e data é um atribuo de lancamento -->
            <input v-model="lancamento.data" class="input" type="date" placeholder="data">
        </div>
    </div>
    <!-- atalho bulma = mb5 e margem baixo, distancia 5px margem abaixo radio, mt margem superior, ml margem esquerda, mr margem direita -->
    <div class="control mb-5 mt-5"> 
        <label class="radio"><!-- v-model="lancamento.descricao" o lancamento vem do lancamento esta em computer, e tipo é um atribuo de lancamento -->
            <input v-model="lancamento.tipo" value="RECEITA" type="radio" name="tipo">
            Despesa
        </label>
        <label class="radio">
            <input v-model="lancamento.tipo" value="DESPESA" type="radio" name="tipo">
            Receita
        </label>
    </div>

    <!-- vamos adicionar butão -->
    <input type="submit" value="+ Adicionar" class="button is-info"> <!--  class="button is-info is-fullwidth mt-4 mb-4" alonga o botao-->
  

  </form>
</template>

<script>

import { mapGetters, mapActions } from 'vuex' // importamos vuex para usar maps

export default {
    computed: {
        ...mapGetters(['lancamento', 'mensagemErro']),
        temErro() {
            return this.mensagemErro.mensagem ? true : false
        }
    },
    // agora vamos mapear a ação criarLancamento que está em lancamento.js. para a gente conseguir salvar ou chamar na hora de clicar no botão
    methods: {
        ...mapActions(['criarLancamento', 'novoLancamento', 'alterarLancamento']),
        //uma função para submit, quando clicarno submit
        onClickAdicionar(){
            if(this.lancamento.id){
                this.alterarLancamento(this.lancamento)
            }else{
               this.criarLancamento(this.lancamento)     
            }
            
            this.novoLancamento()
        }
    }
}
</script>


<style>

</style>