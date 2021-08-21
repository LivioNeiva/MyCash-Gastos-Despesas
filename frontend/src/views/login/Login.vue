<!-- tela de login ex da internet, link: https://codepen.io/stevehalford/pen/YeYEOR -->
<!-- A view, que é apenas um mapeamento declarativo do estado -->
<template> <!-- as class desse css pertence todas al bulma -->
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-4-widescreen"> <!-- informação de responsividade 5 quant de columns do grid-->
          <form @submit="onSubmit" class="box">
            
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left"> <!-- class indica tem um icone a esquerda -->
               <!-- v-nodel="email" vincula com campo email da função data -->
                <input type="email" v-model="email" placeholder="e.g. bobsmith@gmail.com" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i> <!-- icon vai ser inserido dentro do input -->
                </span>
              </div>
            </div>
            
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <!-- v-model="senha" vincula com campo senha -->
                <input type="password" v-model="senha" placeholder="*******" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
          
            <div class="field">
              <button class="button is-success">
                Login
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
//importamos a fuction createAttp
import createHttp from '@/services/axiosConfig.js'

export default {
  //capturar os dados estao sendo inserido pelo usuario, funçao data
  //states - O estado (state), que é a fonte da verdade que direciona nossa aplicação
  data(){
    return {
      email: '',
      senha: '',
      //loginError: false
      
    }

  },
  //As ações (actions), que são as possíveis maneiras pelas quais o estado pode mudar em reação às interações dos usuários da view.
  methods: {
    async onSubmit(e){
      e.preventDefault() //retira o reloud
      
      //todos os campos a baixo estao no postman
      //abaixo vamos receber o token fornecido pela api back-end, para isso temos criar o moesmo form-data do postman
      const bodyData = new FormData(); //a informação vai ser enviada para formulario atraves do corpo da requisiaço
      //o form-data do postmen tem grant_type, username, password
      bodyData.append('grant_type', 'password')//é tipo de autenticação vai ser feita. tipo password
      bodyData.append('username', this.email)//estamos montando o corpo da requisição
      bodyData.append('password', this.senha)

      //precisamos passar a auteticação basica co client id, ou seja login e senha da api backend
      //try{
        //vamos passar na requisição, vamo criar o cliente vai fazer a comunicaçao com a nossa api
        const http = createHttp() //async await(palavra reservada) faz requisição sincrona, faz a requisião e atribui resposta no res
        const res = await http.post('/oauth/token', bodyData, {  /* '/oauth/token' é a continuação do 'http:localhost:9090/mycash' q esta na propiedade baseURL */
          auth: {// auth é o obj de autenticação do tipo basic
            username: 'mycash-web', //vai autenticar a aplicaão cliente (back-end)
            password: 'SENHAFORTE'
          }
        })
        console.log(res)
        
      //}

      /*
      precisamos armazenar o token para fazer as proximas requisições, entao vamos armazenar
      token no local Starage da nossa aplicação
      */
     //mycash_token é nome da chave, res é response, data.access_token é o caminho do token
     //o token sera gravado no localStorage com nomede chave mycash_token
     if(res.status === 200) { //if para verificar se ouve sucesso
        this.$router.push('/') // o metodo push adiciona, vai fazer o router navegar para a tela inicial da aplicação. Lancamentos.vue
        localStorage.setItem('mycash_token', res.data.access_token)
     }

     /*
     vamos fazer uma logica para ele apagar o token do localStorage e navegar para a tela de login
     */
     
      
    }
  }
}

</script>

<style>

</style>

<!-- https://vuex.vuejs.org/ptbr/  estude -->