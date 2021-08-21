import LancamentoService from "../../services/lancamentoServices"

//vamos declarar os atributos que serão utilizados no componentes de lancamentos
const state = {
    lancamentos: [],
    lancamento: {}, //criamos o lacamento do lancamentoForm
    mensagemErro: {}
 }

// os getters vao retornar os valores que estão em state
const getters = {
    //é uma função q vai receber state
    todosLancamentos: (state) => state.lancamentos, //todosLancamentos -> vamos usar essa função no componentes lancamentos.vue
    //apos criar o getters abaixo,vamos criar no lancamentoForm para mapear o gtters abaixo
    lancamento: (state) => state.lancamento, //esse lancamento retorna o lancamento{} esta no state
    mensagemErro: (state) => state.mensagemErro
}

//as ações vao fazer a comunicaão com back-end
const actions = { 
    //metodos estao lancamentosServices.js ficaram aki
    //funão busca lancamentos
    async buscarLancamentos({ commit }){
        const res = await LancamentoService.getTodos() //asunc e await define a functions como assicrona. o res recebe a função getTodos()
        commit('setLancamentos', res.data.content) //referencia para mutations, data eu uso quando back estiver usando lista, content eu uso quando o back estver usando paginação
    },
    async criarLancamento({ commit }, lancamento){
        
        try{
            const res = await LancamentoService.criarLancamento(lancamento)
            commit('addLancamento', res.data) //addLancamento temos criar em mutations
        }catch(e){
            commit('setMensagemErro', e)
            console.log(e)
        }
    },
    //alterar lancamento
    async alterarLancamento({ commit }, lancamento) {
        const res = await LancamentoService.alterarLancamento(lancamento)
        commit('atualizaLancamento', res.data)
    },
    //exluir lancamento
    async excluirLancamento({ commit }, id) {
        if (confirm('Deseja realmente excluir o Lançamento?')) {
            await LancamentoService.excluirLancamento(id)
            commit('removeLancamento', id)
        }
    },
    //novo lancamento
    novoLancamento({ commit}){
        commit('setLancamento', {})
    },
    //seleciona lancamento
    selecionaLancamento({ commit }, id){
        commit('setLancamentoPorId', id)
    }

}

//faz as ateraações dos states
const mutations = { //para invocar uma mutations temos invocar um commit
    setLancamentos: (state,lancamentos) => {
        state.lancamentos = lancamentos ? lancamentos : []
    },

    addLancamento: (state,lancamento) => {
        state.lancamentos.push(lancamento)
    },

    setLancamento: (state, lancamento) => state.lancamento = lancamento,

    setLancamentoPorId: (state, id) => {
        console.log(id);
        state.lancamento = state.lancamentos.filter(l => l.id === id)[0]

    },   

    atualizaLancamento: (state, lancamento) => {
        const index = state.lancamentos.findIndex(l => l.id === lancamento.id)
        if (index !== -1) {
            state.lancamentos.splice(index, 1, lancamento)
        }
    },
    removeLancamento: (state, id) => {
        state.lancamentos = state.lancamentos.filter(l => l.id !== id) 
    },
    setMensagemErro: (state, mensagem) => state.mensagemErro = mensagem
    
} 

export default {

    state,

    getters,

    actions, 

    mutations
}

/*
depois que criamos o lancamento.js com sua estrututura basica, precisamos importar dentro do 
store/sindex.js e coloque ele dentro de modules
*/