/* 
vamos fazer o importe do axios e vamos fazer a interação com a api back-end de forma centralizada, dessa forma
vamos conseguir importar essa classe lancamentoServices em qualquer local da aplicação fcilitano a
a reausabilidade do codigo.
*/

//import { create, getOwnPropertyDescriptors } from 'core-js/core/object';
import createHttp from './axiosConfig' //função que está no arquivo axiosConfig

//aqui vamos por toda as funções que vao fazer interações com a nossa api
class LancamentoService {
    
    //lista todos os intens de lancamento
    getTodos() {
        const http = createHttp()
        const res = http.get('/api/lancamento')
        return res
    }
    //criar um lançamento
    criarLancamento(lancamento) { //tem receber um lançamento no paramentro
        const http = createHttp()
        const res = http.post('/api/lancamento', lancamento) //esse lancamento sera enviado no body
        return res
    }
    
    altearLancamento(lancamento) {
        const http = createHttp()
        const res = http.put(`/api/lancamento/${lancamento.id}`, lancamento)
        return res
    }
    excluirLancamento(lancamento) {

        const http = createHttp()
        const res = http.delete(`/api/lancamento/${lancamento.id}`, lancamento)
        return res
    }
    

}

//expotando o arquivo para outros componentes
export default new LancamentoService();