import React, {Component} from 'react';
//utilizar proptypes
import PropTypes from 'prop-types';


class Tareas extends Component{

    StyleCompleted(){
        return{
            fontSize:'20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through': 'none'
        }
    }

    render(){
        //para evitar escribir en todos los elementos this.props
        const {task} = this.props;
        return <div style={this.StyleCompleted()}>
            {task.title}-
            {task.description}-
            {task.done}-
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
            <button onClick={this.props.deleteTask.bind(this, task.id)}>
                x
            </button>
        </div>
    }
}

Tareas.propTypes = {
    task: PropTypes.object.isRequired
}

export default Tareas;