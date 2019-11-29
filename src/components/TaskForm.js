import React , {Component} from 'react';

class TaskForm extends Component{

    state = {
        title:'',
        description:''
    }

    onSubmit = e =>{     
      this.props.addTask(this.state.title, this.state.description)
       e.preventDefault();
    }

    onChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    render(){
          return ( 
           <form onSubmit={this.onSubmit}>
               <input type="text" placeholder="Ecribe una tarea" onChange={this.onChange} value={this.state.title} name="title"/>
               <br/>
               <br/>
               <textarea placeholder="Escribe una Descripcion" onChange={this.onChange} value={this.state.description} name="description"></textarea>
               <input type="submit"/>
           </form>
        )     
    }
}

export default TaskForm;