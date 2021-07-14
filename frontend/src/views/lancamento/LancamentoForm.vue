<!-- criando a estrutura basica com vue -->
<template>
  <form class="m-4"> <!-- atalho bulma = m é toda margem, mb-5 e margem baixo, distancia 5px margem abaixo radio, mt margem superior, ml margem esquerda, mr margem direita -->
    <div class="field">
        <label class="label">Descrição</label>
        <div class="control">
            <input class="input" type="text" placeholder="descição...">
        </div>
    </div>
    <div class="field">
        <label class="label">Valor</label>
        <div class="control">
            <input class="input" type="number" placeholder="0.00" step="0.01">
        </div>
    </div>
        <div class="field">
        <label class="label">Data</label>
        <div class="control">
            <input class="input" type="date" placeholder="data">
        </div>
    </div>
    <!-- atalho bulma = mb5 e margem baixo, distancia 5px margem abaixo radio, mt margem superior, ml margem esquerda, mr margem direita -->
    <div class="control mb-5 mt-5"> 
        <label class="radio">
            <input type="radio" name="tipo" checked>
            Despesa
        </label>
        <label class="radio">
            <input type="radio" name="tipo">
            Receita
        </label>
    </div>

    <!-- vamos adicionar butão -->
    <input type="submit" value="+ Adicionar" class="button is-info"> <!--  class="button is-info is-fullwidth mt-4 mb-4" alonga o botao-->
  

  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>