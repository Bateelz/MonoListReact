// import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import  Navbarr  from "./navbar";
// import axios from "axios";






// import { Link } from "react-router-dom";



// const List = () => {
  
 

//   return (
//     <>
//   <Navbarr />
//   <br></br>
//   <main class="content">
//     <div class="container p-0">

// 		<h1 class="h3 mb-3">Lists</h1>

// 		<div class="card">
// 			<div class="row g-0">
// 				<div class="col-12 col-lg-5 col-xl-3 border-right">

// 					<div class="px-4 d-none d-md-block">
// 						<div class="d-flex align-items-center">
// 							<div class="flex-grow-1">
// 								<input type="text" class="form-control my-3" placeholder="Search..."/>
// 							</div>
// 						</div>
// 					</div>

// 					<a href="#" class="list-group-item list-group-item-action border-0">
// 						<div class="d-flex align-items-start">
// 							<div class="flex-grow-1 ml-3">
// 								Vanessa Tucker
// 							</div>
// 						</div>
// 					</a>
// 					<a href="#" class="list-group-item list-group-item-action border-0">
// 						<div class="d-flex align-items-start">
// 							<div class="flex-grow-1 ml-3">
// 								William Harris
// 							</div>
// 						</div>
// 					</a>
// 					<a href="#" class="list-group-item list-group-item-action border-0">
// 						<div class="d-flex align-items-start">
// 							<div class="flex-grow-1 ml-3">
// 								Sharon Lessman
// 							</div>
// 						</div>
// 					</a>
// 					<a href="#" class="list-group-item list-group-item-action border-0">
// 						<div class="d-flex align-items-start">
// 							<div class="flex-grow-1 ml-3">
// 								Christina Mason
// 							</div>
// 						</div>
// 					</a>
// 					<a href="#" class="list-group-item list-group-item-action border-0">
// 						<div class="d-flex align-items-start">
// 							<div class="flex-grow-1 ml-3">
// 								Fiona Green
// 							</div>
// 						</div>
// 					</a>
// 					<a href="#" class="list-group-item list-group-item-action border-0">
// 						<div class="d-flex align-items-start">
// 							<div class="flex-grow-1 ml-3">
// 								Doris Wilder
// 							</div>
// 						</div>
// 					</a>
// 					<a href="#" class="list-group-item list-group-item-action border-0">
// 						<div class="d-flex align-items-start">
// 							<div class="flex-grow-1 ml-3">
// 								Haley Kennedy
// 							</div>
// 						</div>
// 					</a>
// 					<a href="#" class="list-group-item list-group-item-action border-0">
// 						<div class="d-flex align-items-start">
// 							<div class="flex-grow-1 ml-3">
// 								Jennifer Chang
// 							</div>
// 						</div>
// 					</a>

// 					<hr class="d-block d-lg-none mt-1 mb-0"/>
// 				</div>
// 				<div class="col-12 col-lg-7 col-xl-9">
// 					<div class="py-2 px-4 border-bottom d-none d-lg-block">
// 						<div class="d-flex align-items-center py-1">
// 							<div class="position-relative">
// 							</div>
// 							<div class="flex-grow-1 pl-3">
// 								<strong>List FullName</strong>
// 							</div>
// 							<div>
// 							</div>
// 						</div>
// 					</div>

// 					<div class="position-relative">
// 						<div class="chat-messages p-4">

// 							<div class="chat-message-right pb-4">
						
// 								<div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
// 									<div class="font-weight-bold mb-1">You</div>
// 									Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
// 								</div>
// 							</div>

// 							<div class="chat-message-left pb-4">
							
// 								<div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
// 									<div class="font-weight-bold mb-1">Sharon Lessman</div>
// 									Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
// 								</div>
// 							</div>

					
						

					

// 						</div>
// 					</div>

// 					<div class="flex-grow-0 py-3 px-4 border-top">
// 						<div class="input-group">
// 							<input type="text" class="form-control" placeholder="Add new item"/>
// 							<button class="btn btn-primary">Send</button>
// 						</div>
// 					</div>

// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </main>
  


// </>
//   );
// };
// export default List;

import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import  Navbarr  from "./navbar";
import './list.css';
class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  todos: [],
		  inputValue: ''
		}
		}

  getTodos() {
    axios.get('https://monolist.io/monolist/public/api/list/list')
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
      <>
     <div class=" fixed-top ">
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e30000' }}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item nav-item-font py-2">
                        <a class="nav-link text-white ml-1" href="#"><i class="fas fa-stream"></i></a>
                    </li>
                    <li class="nav-item nav-item-font py-2">
                        <a class="nav-link text-white ml-1" href="#"><i class="fas fa-home"></i></a>
                    </li>
                    <li class="nav-item nav-item-font py-2">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Find" aria-label="Search"/>
                          </form>
                    </li>
                </ul>
                <ul class="navbar-nav mt-2 mt-lg-0 ">
                    <li class="nav-item nav-item-font py-2 ">
                        <a class="nav-link top-right-part text-white mr-2" href="#"><i class="fas top-right-part fa-plus"></i> </a>
                    </li>
                    <li class="nav-item nav-item-font py-2 ">
                        <a class="nav-link top-right-part text-white mr-2" href="#"><i class="fas top-right-part fa-chart-line" id="status"></i></a>
                    </li>
                    <li class="nav-item nav-item-font py-2 ">
                        <a class="nav-link top-right-part text-white mr-2" href="#"><i class="fas top-right-part fa-bell"></i> </a>
                    </li>
                    <li class="nav-item nav-item-font py-2 ">
                        <a class="nav-link top-right-part text-white mr-2" href="../login.html"><i class="fas top-right-part fa-cog"></i> </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="container-fluid mt-5 pt-4 border">
        <div class="row">
            <div class="left-nav-container bg-light col-3">
                <div class="left-nav position-fixed">
        
                    <div class="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link text-dark  active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><p class="mt-2"><i class="fas text-primary mr-2 fa-inbox"></i> Inbox</p></a>
                        <a class="nav-link text-dark " id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><p><i class="far mr-2 text-success fa-calendar-minus"></i>Today</p></a>
                        <a class="nav-link text-dark " id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><p><i class="far text-info mr-2 fa-calendar-alt"></i>Upcoming</p></a>
                    </div>
                    
                    
                </div>
            </div>
            <div class="border col-9 display">
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                        <div id="Active_Tasks"></div>
                        <div><input class="py-1" type="text" placeholder="eg. Buy gift tommorow" id="Add_Task"/>
                            <button class="btn btn-danger" id="Add">Add Task</button>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Working on this part</div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Working on this part</div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Working on this part</div>
                  </div>

            </div>
        </div>

        

    </div>
 
  
</>
    )
  }
}

export default List


