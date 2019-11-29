import React,{Component} from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import './App.css';

//importar arreglo json
import task from './example/task.json';

import Tasks from './components/tasks.js';
import TaskForm from './components/TaskForm.js';
import Posts from './components/posts.js';

class App extends Component{

  state={
    task:task
  }

  addTask = (title, description) =>{
   const newTask = {
     title:title,
     description:description,
     id: this.state.task.length
   }
     this.setState({
     task:[...this.state.task, newTask]
   })
  }

  deleteTask = (id) =>{
    const netTasks=this.state.task.filter(task => task.id !==id);
    this.setState({task:netTasks})
  } 
  
  checkDone = id =>{
    const netTasks = this.state.task.map(task =>{
      if (task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({task:netTasks})
  }

  render(){
   return <div>
   <Router>
     <Link to="/">Home</Link>
      <br></br>
     <Link to="/posts">Posts</Link>
   <Route exact path="/" render={()=>{   
   return<div>
   <TaskForm addTask={this.addTask}/>  
   <Tasks
    task={this.state.task}
    deleteTask={this.deleteTask}
    checkDone={this.checkDone}
    />
      </div>
    }}/>  
    <Route path="/posts" component={Posts}/>
  </Router> 
  
    </div>
  }
}
export default App;
