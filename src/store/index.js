import Vuex from 'vuex'
import vue from 'vue'
import todos from "../store/modules/todos"

vue.use(Vuex)
export default new Vuex.Store({
    module:{
     todos
    }
})
