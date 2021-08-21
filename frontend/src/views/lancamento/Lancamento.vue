<!-- criando a estrutura basica com vue -->
<template>
    <!-- css de forma condicional quando se coloca numa expressao um valor ou outro -> se a classe lancamento.tipo for igual a DESPESA, add a class css lamcamento.despesa é borda vermelha q está em style, se nao, add classe lancamento.receita é borda verde -->
   <!-- class="m-4 is-dark" - > clsse do bulmar, aumenta o espaço entre obj e outro na pagina -->
    <div class="m-4 is-dark" :class="[lancamento.tipo == 'DESPESA' ? 'despesa' : 'receita', 'lancamento' ]">
        
        <!-- vamos criar um card, lancamento.descricao vem props lancamento-->
        
        <h3> 
            <a class="has-text-dark" 
            @click="onClickDescricao(lancamento.id)">
                {{lancamento.descricao}} 
            </a>
            <a class="icon icon-text" @click="excluirLancamento(lancamento.id)">             
                <i class="fas fa-times"></i> <!--"fas fa-times é uma classe da dependencia do font -->
            </a>
        </h3> <!-- esse valores vao fazer a interpolaçao de cada atributos  de cada um dos lancamentos-->
        
        <p>
            <!-- $filters.date função global criada no arquivo main.js fotrmatar a data formato brasileiro -->
            {{$filters.Date(lancamento.data)}} - {{$filters.currency(lancamento.valor)}}
        </p>

  </div>
 
</template>

<script>
    import { mapActions } from 'vuex'

export default {
    props: {
        lancamento: Object //chama as decrições estão dentro do componente Lancamentos
    },
    methods: {
        ...mapActions(['selecionaLancamento', 'excluirLancamento']),
        onClickDescricao(id){
            this.selecionaLancamento(id)
        }
    }

}
</script>

<style scoped> /* diretiva scoped  esse css vai ficar disponivel apenas no scopo do componente */

    .lancamento {
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer; /* Permite o controle sobre a aparência do cursor em um elemento */
        background: #e7e4e4;
    }

    .lancamento.receita{
        border-left: 5px solid green;
    }
    .lancamento.despesa{
        border-left: 5px solid red;
    }
    .lancamento h3{
        display: flex; /* Em combinação com 'flutuação' e 'posição', determina o tipo de caixa ou caixas que são geradas para um elemento. */
        align-items: center;
        justify-content: space-between; /* Alinha os flex items ao longo do eixo principal da linha atual do flex container */
    }

    p{
        display: flex;
        align-items: left;
    }

</style>