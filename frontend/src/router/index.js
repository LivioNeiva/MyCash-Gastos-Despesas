import { createRouter, createWebHistory } from 'vue-router' //createWebHashHistory cria # na url do navegador quando a pg esta na home, createWebHistor tira o # da url 
import Lancamentos from '@/views/lancamento/Lancamentos.vue' /* @ é src no caminho, o @ nao dar o auto complete */
import Usuarios from '../views/usuarios/Usuarios.vue'

const routes = [
  {
    path: '/', //url raiz
    name: 'Lancamentos',
    component: Lancamentos
  },
  {
    path: '/usuarios', //url
    name: 'Usuarios',
    component: Usuarios //nome do import Usuarios
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
