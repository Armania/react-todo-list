import React from 'react';
import styles from "../styles/ToDoItem.module.scss"

class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    console.log("edit mode activated")
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = event => {
    console.log(event.key)
    if (event.key === "Enter") {
      this.setState({ 
        editing: false, 
      })
    }
  }

  render(){

    let viewMode = {}
    let editMode = {}
    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
      <li className={styles.item}>
        <div style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          />
          <span 
            className={this.props.todo.completed ? styles.completedItem : null}
            onDoubleClick={this.handleEditing}
            >
            {this.props.todo.title}
          </span>
          <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
            Delete
          </button>
        </div>
        <input 
            type="text" 
            className={styles.textInput}
            style={editMode}
            value={this.props.todo.title}
            setUpdate={this.setUpdate}
            onChange={e => {
              this.props.setUpdate(e.target.value, this.props.todo.id)
            }}
            onKeyDown={this.handleUpdatedDone} 
            />
      </li>
    );
  }
}

export default TodoItem;
