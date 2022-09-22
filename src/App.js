import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import TodoItem from "./TodoItem";
import { Component } from 'react';
import 'react-swipeable-list/dist/styles.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: [
        // {
        //   text: 'Buy a new gaming laptop', 
        // },
        // {
        //   text: 'Complete a previous task',
        // }
      ]
    }
  }
  addTodo = text => {
    const newTodo = this.state.todo ? this.state.todo.concat({
      text: text
    }) : [
      {
        text: text,
      }
    ]

    localStorage.setItem("todo", JSON.stringify(newTodo))
    this.setState({
      todo: newTodo
    })
  }
  deleteTodo = (i, event) => {
    // console.log(i,"jn");
    // let todo = this.state.todo.slice()
    let todo = this.state.todo
    todo.splice(i, 1)
    localStorage.setItem("todo", JSON.stringify(todo))
    this.setState({
      todo: JSON.parse(localStorage.getItem("todo"))
    })
  }
  edittodo = (index, newText) => {
    const newTodos = this.state.todo.map((todo, i) => {
      if (index === i) {
        return {
          ...todo,
          text: newText

        }
      } return todo

    })
    localStorage.setItem("todo", JSON.stringify(newTodos))
    this.setState({
      todo: JSON.parse(localStorage.getItem("todo"))
    })
  }
  clear = () => {
    // todo = " "
    
    localStorage.removeItem("todo")
    this.setState({
      todo: [ ],
    })
  }
  componentWillMount() {
    this.setState({
      todo: JSON.parse(localStorage.getItem("todo"))
    })
  }

  render() {
    return (
      <div className="App">
        <div className='main'>
          <AddTodo
            addTodo={this.addTodo} />
          <div className='main5'>
            {this.state.todo ? this.state.todo.map((todos, index) => {
              return <div>
                <TodoItem
                  edittodo={this.edittodo}
                  deleteTodo={this.deleteTodo}
                  addTodo={this.addTodo}
                  index={index}
                  key={index}
                  todo={todos.text}
                />
              </div>

            }) : null}
            <div>
            <button className='btn4' onClick={this.clear}>ClearAll</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
