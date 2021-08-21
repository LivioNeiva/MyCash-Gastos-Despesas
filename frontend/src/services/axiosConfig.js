import axios from 'axios'
//import { useRouter } from 'vue-router'

/* vamos exportar uma função que vai criar o nosso cliente axeios ja com uma configuraçao base */
export default function createHttp(){

    //crimos obj http usaremos axeios.create, será criado o cliente
    const http = axios.create ({ //dentro dessa função passaremos um obj de configuração

        //properties para configurar o cliente, criamos a url base da api back-end
        baseURL: 'http://localhost:9090/mycash'

    })

    /*
    usuario precisa está logado no sistema, para q ele tenha um token e consiga enviar esse token
    em cada requisição, da nossa api
    */
   /*
   Coloque um interception(interceptors) na constante http
    o interception(interceptors) vai interceptar outra requisição que iremos fazer, vai recuperar
     o token e adicionar a um cabeçalho
    */
    http.interceptors.request.use(config => {
        const token = localStorage.getItem('mycash_token') //recuperando token para constante token
        if(token){  //confirme token esta presente true
            config.headers.common['Authorization'] = `Bearer ${token}`  //adicionamos no cabeção do request
        }   //Authorization -> é a chave q vamos colocar no headers,Bearer é padrão no token vai vim, a 'crase' vai fazer a concatenação da string no caso bearer é literal e a cosntante token
        return config  //retornamos toda a configuração

        /* obs. toda requsição(request) for feito iremos add o token no headers da requisição
        precisando do token para fazer a validação do usuario na api 
        */
    });

    return http

}