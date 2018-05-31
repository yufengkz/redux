import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../store/actions'

class Tbody extends Component {
	filterType(){
		let todos = []
		if(this.props.type === 'all'){
			todos = this.props.todos
		}else if(this.props.type === 'finash'){
			todos = this.props.todos.filter(item => {
				if(item.isSelected) return item
			})
		}else{
			todos = this.props.todos.filter(item => {
				if(! item.isSelected) return item
			})
		}
		return todos
	}
	render() {
		return (
			<div>
				{
					this.filterType().map((item, index) => (
						<li key={index} style={{overflow: 'hidden'}}>
							<input type="checkbox" checked={item.isSelected} onChange={() => {
								this.props.changeSeletced(item.id)
							}}/>
							<span>{item.title}</span>
							<i style={{float: 'right', marginRight: '20px'}} onClick={() => {
								this.props.delTodo(item.id)
							}}>&times;</i>
						</li>
					))
				}
			</div>
		)
	}
}

export default connect((state => ({...state})), actions)(Tbody)