import * as Types from '../action-types'

let actions = {
	addTodo(todo){
		return {type: Types.ADD_TODO, todo}
	},
	changeSeletced(id){
		return {type: Types.CHANGE_SELETCED, id}
	},
	delTodo(id){
		return {type: Types.DEL_TODO, id}
	},
	changeType(val){
		return{type: Types.CHANGE_CURRENT_TYPE, val}
	}
}

export default actions
