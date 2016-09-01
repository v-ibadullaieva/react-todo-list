import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
import TODOS from '../todos';

export default class App extends React.Component {
  render() {
    var filtered = this.filterItems(this.state.todos, this.state.filter);

    return (
      <div className="app">
        <h1>Todo List</h1>

        <div>
          <TodoForm onSubmit={ this.createNewTodo.bind(this) }></TodoForm>
          <TodoList items={ filtered } toggleTodo={ this.toggleTodo.bind(this) }></TodoList>
          <TodoFilter
            filterDone={ this.filterDone.bind(this) }
            filterNotDone={ this.filterNotDone.bind(this) }
            filterAll={ this.filterAll.bind(this) }
          ></TodoFilter>
        </div>
      </div>
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      todos: TODOS,
      filter: 'all'
    };
  }

  createNewTodo(text) {
    const { todos } = this.state;
    const id = Math.max(...todos.map(a => a.id)) + 1;
    const todo = {
      id,
      text,
      isDone: false
    };

    this.setState({
      todos: [...todos, todo]
    });
  }

  toggleTodo(item) {
    item.isDone = !item.isDone;
    this.setState({});
  }

  filterDone() {
    this.setState({
      filter: 'done'
    })
  }

  filterNotDone() {
    this.setState({
      filter: 'notDone'
    })
  }

  filterAll() {
    this.setState({
      filter: 'all'
    })
  }

  filterItems(items, type) {
    if(type === 'all') return items;

    if(type === 'done') {
      return items.filter(function(item) {
        return item.isDone === true;
      })
    };

    if(type === 'notDone') {
      return items.filter(function(item) {
        return item.isDone === false;
      })
    }
  }
}
