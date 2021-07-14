import moment from 'moment'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 

const app = createApp(App)

app.config.globalProperties.$filters = { //obj app vai ficar global e vamos filtar as propriedades
    currency(value){ //currency recebe um parametro
        var formatter = new Intl.NumberFormat('pt-BR', {//vamos formatar o parametro(value) portugues brasil
            style: 'currency', //transformar valor numerico(Intl) em monetario
            currency: 'BRL', //moeda corrente brasil formato brl
            minimumFractionDigits: 2 // duas casas decimais
        });
        return formatter.format(value); //retornando o valor formatado
    },

    //htttps://momentjs.com e uma dependecia foi instalado no inicio da aula 1, es uma biblioeca
    Date(value){ //parametro sera formato data
        //essa biblioteca moments tem capacidade de formatar uma data, fazer o parse de uma data
        return moment(value).format('D/MM/yyyy') //tranformando para formato dia/mes/ano
    }
    
}

app.use(store).use(router).mount('#app')
