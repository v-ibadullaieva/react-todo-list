import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
    const toggleTodo = this.props.toggleTodo;

    const items = this.props.items.map(function(item) {
      return (
        <TodoItem toggleTodo={ toggleTodo } key={ item.id } item={ item }></TodoItem>
      )
    });

    return (
      <ul className='list'>
        { items }
      </ul>
    )
  }
}
