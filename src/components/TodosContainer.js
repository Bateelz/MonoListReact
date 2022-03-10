// import React from 'react';
// import axios from 'axios';


// export default class PersonAdd extends React.Component {
//   state = {
//     persons: []
//   }
//   componentDidMount() {
//     axios.get(`https://www.monolist.io/api/get_list`)
//       .then(res => {
//         const persons = res.data.data;
//           this.setState({ persons });
//       })
//     }

 

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = async e => {
// 	e.preventDefault();
// 	const list = {
// 		name: this.state.name,
// 		type: 1,
// 		color: 1,
// 	}
// 	axios.post('https://www.monolist.io/api/store_list', list)
	
// 	.then(res => console.log(res.data));
// }

      
  

//   render() {
 
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>

//         <ul>
//         {
//           this.state.persons
//             .map(person =>
//               <li key={person.id}>{person.name}</li>
//             )
//         }
//       </ul>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'

class TodosContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  todos: [],
		  inputValue: ''
		}
		}

  getTodos() {
    axios.get('https://www.monolist.io/api/get_list')
    .then(response => {
      this.setState({todos: response.data.data})
    })
    .catch(error => console.log(error))
  }

  
  createTodo = (e) => {
	
	if (e.key === 'Enter' && !(e.target.value === '')) {
		const todo = {
		name:  e.target.value,
		type: 1,
		color: 1,
	}
	axios.post('https://www.monolist.io/api/store_list', todo)
	  .then(response => {
	
		const todos = update(this.state.todos, {$splice: [[0, 0, response.data.data]]})
		console.log(response.data.data);

		this.setState({
			todos: todos,
			inputValue: ''
		  }) 
		  this.getTodos()
           console.log(response.data.data);
		  
	  })
	  .catch(error => console.log(error))      
	}    
  }

  
  handleChange = (e) => {
	this.setState({inputValue: e.target.value});
  }

  componentDidMount() {
    this.getTodos()
  }


  render() {
    return (
      <div>
        <div className="inputContainer">
		<input className="taskInput" type="text" 
  placeholder="Add a task" maxLength="50"
  onKeyPress={this.createTodo}
  value={this.state.inputValue} onChange={this.handleChange} />
        </div>  	    
	<div className="listWrapper">
	   <ul className="taskList">
		  {this.state.todos
		  .map((todo,i) => {
		    return(
		      <li className="task" todo={todo.id} key={i}>
			<input className="taskCheckbox" type="checkbox" />              
			<label className="taskLabel">{todo.name}</label>
			<span className="deleteTaskBtn">x</span>
		      </li>
		    )       
		  })} 	    
	   </ul>
	</div>
     </div>
    )
  }
}

export default TodosContainer


