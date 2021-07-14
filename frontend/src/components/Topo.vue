<!-- a baixo está as 3 sessoes de um componente , vamos add umas funções gerais para app -->


<template>
    <!-- navbar da tela principal -->
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
 
      <span class="navbar-item">
        <strong>MY CASH</strong>
      </span>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item"><!-- a função to indica para onde ele tem q ir -->
        Lançamentos
      </router-link>

      <router-link to="/usuarios" class="navbar-item"> <!-- router-link to="" direciona para onde ai o link -->
        Usuários
      </router-link>
      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <router-link to="/login" class="button"> <!-- a função to indica para onde ele tem q ir, será redirecionado para componente login -->
              Log in
            </router-link>
          </a>
          <button class="button is-danger" @click="onLogout"> <!-- onLogout é uma função está export default  -->
            Log out
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<!-- logica componente fica dentro do script -->
<script>
export default {
 //o que ela vai fazeer é,criar uma funçao que apaga o token e redirecina para tela de login
 methods: {
   onLogout(){ //Login.vue foi add ao localStorage o mycash_token, com o token de acesso ao app back-end
     localStorage.removeItem('mycash_token') //estamos apagando o mycash_token do localStorage
     this.$router.push('/login') //direciona o router do @click para tela de login
   }
 }
}
</script>

<style>

</style>