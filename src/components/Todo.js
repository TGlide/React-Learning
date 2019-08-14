// React
import React from "react";
// Ant Design
import { Input, List, Icon, DatePicker } from "antd";
import "antd/dist/antd.css";
// CSS
import "./Todo.scss"

export default class Todo extends React.Component {
  constructor() {
    super();

    // Initialize the state
    this.state = {
      todos: [],
      todo_input: "",
      date: null,
      dateString: ""
    };
  }

  handlePressEnter = () => {
    // Check if input valid
    if (this.state.todo_input.length <= 0) return;

    // Create a todo object containing its index and content
    const todo = {
      index: this.state.todos.length,
      content: this.state.todo_input
    };

    // Add the todo to our array
    const newTodos = this.state.todos.concat(todo);

    this.setState(() => ({
      todos: newTodos,
      // Clear input
      todo_input: ""
    }));

  };

  setDate = (index, date, dateString) => {
    // Set the date of the given todo
    let newTodos = [...this.state.todos];
    newTodos[index].date = date;
    newTodos[index].dateString = dateString;

    // Initialize the state
    this.setState({
      todos: newTodos
    });
  };

  removeTodo = index => {
    let newTodos = [...this.state.todos];

    // Remove element
    newTodos.splice(index, 1);

    // Decrement greater indexes
    for (let i = index; i < newTodos.length; i++) {
      newTodos[i].index--;
    }

    // Update State
    this.setState(() => ({
      todos: newTodos
    }))

  }

  render() {
    return (
      <div className="todoContainer" style={{ minWidth: '100%', padding: 12, background: '#fff', minHeight: 360 }}>
        <h1>TODO App</h1>

        <Input
          placeholder="What needs to be done?"
          onPressEnter={this.handlePressEnter}
          onChange={e => this.setState({ todo_input: e.target.value })}
          value={this.state.todo_input}
        />

        <List
          /* emptyText sets the text to display in an empty list */
          locale={{ emptyText: "No todo items" }}
          dataSource={this.state.todos}
          renderItem={item => (
            <TodoItem
              todo={item}
              removeTodo={this.removeTodo}
              setDate={this.setDate}
            />
          )}
        />
      </div>
    );
  }
}

class TodoItem extends React.Component {
  remove = () => {
    // Remove this TodoItem
    this.props.removeTodo(this.props.todo.index);
  };

  handleDateChange = (date, dateString) => {
    // Update the date when changed
    this.props.setDate(this.props.todo.index, date, dateString);
  }

  render() {
    return (
      <List.Item
        actions={[
          <DatePicker
            format="DD/MM/YYYY"
            onChange={this.handleDateChange}
            value={this.props.todo.date}
          />,
          <Icon
            type="close-circle"
            theme="filled"
            onClick={this.remove}
          />
        ]}
      >
        {this.props.todo.content}
      </List.Item>
    );
  }
}