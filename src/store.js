import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const URL_USUARIOS = 'https://60afffb81f26610017ffdae0.mockapi.io/Users'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuarios : []
    },
    actions : {
        getUsuariosAxiosThen({commit}) {
            axios(URL_USUARIOS)
            .then( respuesta => {
                commit('getUsuarios', respuesta.data)
            })
            .catch(() => commit('getUsuarios',[]))
        },
        async getUsuariosAxiosAsync({commit}) {
            try {
                let {data:usuarios} = await axios(URL_USUARIOS)
                commit('getUsuarios',usuarios)
            }
            catch  {
                commit('getUsuarios',[])
             }
            
        },
        async enviarUsuarios ({commit},usuario) {
            try {
                await axios.post(URL_USUARIOS, usuario)
                commit('emptyStore')
            }
            catch {
                commit('emptyStore')
            }
        }
    },
    mutations : {
        getUsuarios(state,usuarios) {
            state.usuarios = usuarios
        },
        emptyStore(state) {
            state.usuarios = [];
        }
    } 
})
