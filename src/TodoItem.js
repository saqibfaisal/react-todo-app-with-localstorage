import React from "react";
import { IoMdTrash } from 'react-icons/io'
import { MdEdit } from "react-icons/md"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
class TodoItem extends React.Component {
    state = {
        isEditing: false
    }
    delete = () => {
        this.props.deleteTodo(this.props.index)
    }
    edit = () => {
        // this.props.edittodo(this.props.index)
        this.setState({
            isEditing: !this.state.isEditing
        })
        console.log("sdaafds")
    }
    editTodoSubmit = event => {
        event.preventDefault()
        this.props.edittodo(this.props.index, this.newText.value)
        this.edit()
    }
    leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={this.edit}>
                <button className="btn2" >
                    <MdEdit />
                </button>
            </SwipeAction>
        </LeadingActions>
    );

    trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                // destructive={false}
                onClick={this.delete}
            >
                <button className='btn1' >
                    <IoMdTrash />
                </button>
            </SwipeAction>
        </TrailingActions>
    );
    render() {
        const { todo } = this.props
        // console.log(todo,"jk");
        if (this.state.isEditing) {
            return (

                <div className="main4">
                    {/* <li> */}
                    <form onSubmit={this.editTodoSubmit}>
                        <input type="text" placeholder="update task" defaultValue={todo} ref={(a => { this.newText = a })} />
                        <button className="btn3" type="submit" onClick={this.edittodo}>Update</button>
                        <button className="btn3" onClick={this.edit}>Cancle</button>
                    </form>
                    {/* </li> */}
                </div>
            )
        }
        return (
            // <div className="main6">
            <div className="main3">
                {/* <li>
                {this.props.todo}
            </li>
                <button className='btn1' onClick={this.delete}>
                    <IoMdTrash />
                </button>
                    {/* <button className='btn1' onClick={this.delete}>
                        <IoMdTrash />
                </button> */}
                {/* <button className="btn2" onClick={this.edit}>Edit</button> */}


                <SwipeableList>
                    <SwipeableListItem type={"IOS"}
                        leadingActions={this.leadingActions()}
                        trailingActions={this.trailingActions()}
                    >
                        <li>
                            {this.props.todo}
                        </li>
                    </SwipeableListItem>
                </SwipeableList>

            </div>

            // </div>
        )
        // return(
        //     <button>Clear All</button>
        // )
    }
}
export default TodoItem