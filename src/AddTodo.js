import React from "react";
import './App.css'
class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todotext: ""
        }
    }
    submit = event => {
        event.preventDefault()
        this.props.addTodo(this.state.todotext)

        this.setState({
            todotext: ""
        })
    }
    changeTodo = event => {
        this.setState({
            todotext: event.target.value
        })
    }
    render() {
        return (
            // <>
                <div>
                    <h1 className='main1'>TODO APP</h1>
                    <form onSubmit={this.submit} className='main2'>
                        <input type="text" onChange={this.changeTodo} value={this.state.todotext} placeholder='Add your new todo' />
                        <button className="btn" type="submit">+</button>


                    </form>
                </div>
                // <button>ClearAll</button>
            // </>
        )
    }
};
export default AddTodo;