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
      <router-link to="/" class="navbar-item">
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
            <strong>Login</strong>
          </a>
          <a class="button is-light">
            Log out
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<!-- logica componente fica dentro do script -->
<script>
export default {

}
</script>

<style>

</style>