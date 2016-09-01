import React from 'react';

export default class TodoItem extends React.Component {
	render() {
		const { text, isDone } = this.props.item;
		const className = 'list__item' + (isDone ? ' list__item--done' : '');

		return (
		  <li className={ className }>
		    <input className='list__input' type='checkbox' onChange={ this.toggleTodo.bind(this) } checked={ isDone } />
		    { text }
		  </li>
		)
	}

	toggleTodo() {
		this.props.toggleTodo(this.props.item);
	}
}
