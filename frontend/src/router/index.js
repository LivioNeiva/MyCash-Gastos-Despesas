import { createRouter, createWebHistory } from 'vue-router' //createWebHashHistory cria # na url do navegador quando a pg esta na home, createWebHistor tira o # da url 
import Lancamentos from '@/views/lancamento/Lancamentos.vue' /* @ é src no caminho, o @ nao dar o auto complete */
import Usuarios from '../views/usuarios/Usuarios.vue'
import Login from '../views/login/Login.vue'

const routes = [ //tudo está nesse router sere renderizado para componente app.vue esta na pasta src
  {
    path: '/', //url raiz
    name: 'Lancamentos',
    component: Lancamentos
  },
  {
    path: '/usuarios', //url
    name: 'Usuarios',
    component: Usuarios //nome do import Usuarios
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
