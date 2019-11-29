import React, {Component} from 'react';
import Tareas from './tareas';
import PropTypes from 'prop-types';

class Tasks extends Component{
    render(){
        return this.props.task.map(task => 
        <Tareas
         task={task}
         key={task.id}
         deleteTask={this.props.deleteTask}
         checkDone={this.props.checkDone}
        />);
        }
}

Tasks.propTypes = {
    task: PropTypes.array.isRequired
}
export default Tasks;