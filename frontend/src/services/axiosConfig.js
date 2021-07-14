import axios from 'axios'

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
    http.interceptors.request.use(config => {
        const token = localStorage.getItem('mycash_token')
        if(token){
            config.headers.common['Authorization'] = 'Bearer ${token}'
        }
        return config
    });

    return http

}