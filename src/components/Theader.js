import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../store/actions'
import './base.less'
import axios from 'axios'

class Theader extends Component {
	constructor(){
		super()
		this.unFinash = this.unFinash.bind(this)
	}
	unFinash(){
		return this.props.todos.filter(item => !item.isSelected).length
	}
	componentDidMount(){
		console.log('xxxx');
		axios.post(`/api/user`).then( (data) => {
			console.log(data);
		})
	}
	render() {
		return (
			<div>
				你还有 {this.unFinash()} 件事情没有完成
				<br/>
				<input type="text" onKeyUp={(e) => {
					if(e.keyCode === 13){
						this.props.addTodo({id: Math.random().toFixed(3), title: e.target.value, isSelected: false})
					}
				}}/>
			</div>
		)
	}
}

export default connect((state => ({...state})), actions)(Theader)