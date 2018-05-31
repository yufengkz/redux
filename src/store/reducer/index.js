import * as Types from '../action-types'

let initData = {
	type: 'all', //默认全部显示
	todos: [
		{id: 1, title: 'xxxx', isSelected: false},
		{id: 2, title: 'oooo', isSelected: true}
	]
}

function reducer(state = initData, action) {
	switch (action.type) {
		case Types.ADD_TODO:
			return {...state, todos: [action.todo, ...state.todos]}
		case Types.CHANGE_SELETCED:
			let todos = state.todos.map(item => {
				if (item.id === action.id) {
					item.isSelected = !item.isSelected
				}
				return item
			})
			return {...state, todos}
		case Types.DEL_TODO:{
			let todos = state.todos.filter(item => item.id !== action.id)
			return {...state, todos}
		}
		case Types.CHANGE_CURRENT_TYPE:{
			return {...state, type: action.val}
		}
		default:
			return state
	}
}

export default reducer

