<!-- crie as tres sessões de um componente(<template>,<script>,<style> e vamos add as funções 
gerais para um app. esse arquivo é a raiz da aplicação todos os nossos componentes estaram
inserido nesse arquivo na tag <template>  -->
<template>
<Topo />
  <div class="container"><!-- esse containner estar especificada no framework bulma diminuir tamanho area estar descrião data e valores -->
    <router-view/> <!--onde será renderizado todos componentes, todos componente estaram nessa tags-->
  </div>
</template>

<!--para utilizar um compponente, primeiro eu preciso importa-lo-->
<script>
import Topo from './components/Topo.vue' /* importamos o topo.vue */
export default{
  components: {
    Topo
  }
}
</script>


<style>
/* todo estilo estiver nesse arquivo, será enviado para os componentes q estiver sendo importado */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
