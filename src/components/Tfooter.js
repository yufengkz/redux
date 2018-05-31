import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../store/actions'

class Tfooter extends Component {
	render() {
		return (
			<div onClick={(e) => {
				let result = e.target.dataset.type
				this.props.changeType(result)
			}}>
				<button className={this.props.type === 'all' ? 'red' : ''} data-type="all">全部</button>
				<button className={this.props.type === 'finash' ? 'red' : ''} data-type="finash">已完成</button>
				<button className={this.props.type === 'unfinash' ? 'red' : ''} data-type="unfinash">未完成</button>
			</div>
		)
	}
}

export default connect((state => ({...state})), actions)(Tfooter)