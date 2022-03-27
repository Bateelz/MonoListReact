import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './App.css';

import { Link } from "react-router-dom";



const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: ""

  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: state.email,
      password: state.password
    

    };

    
    axios.post("https://api.monolist.io/monolist/public/api/auth/login", userData ).then((response) => {
      console.log(response.status);
      console.log(response.data.data.token);
      localStorage.setItem('token', response.data.data.token);
      window.open("/list")
    });

    
  };  

  return (
    

    <div class="form-modal">


    <div class="form-toggle">
      <br></br>
      <img style={{ paddingLeft: '40px' }} src="https://raw.githubusercontent.com/Bateelz/monolist/main/public/assets/images/monolist_red_full_02.png" alt="" width="160px"></img>



    </div>


    <div id="login-form" >
      <br></br>
      <p style={{ paddingLeft: '40px', fontSize: '1.5em' }}>Login</p>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email</label>
            <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required='true'
            className="form-control"

          />

  

<label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required='true'
            className="form-control"/>
      

             
            <button type="submit" className="form-control" class="btn login">Login</button>
            
       
            <p> Have an account? <Link to="/signup">Register</Link></p>
            <p><Link to="/resetpassword">Forget Password?</Link></p>
            



         
           

            </div>

            <hr/>
            <button type="button" class="btn -box-sd-effect">  <i class="fa fa-linkedin fa-lg" aria-hidden="true"><img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" width="30px" alt=""></img></i> sign up as google</button>
            <button type="button" class="btn -box-sd-effect"> <i class="fa fa-facebook fa-lg" aria-hidden="true"><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" width="30px" alt=""></img></i> sign up as Facebook</button>
            <button type="button" class="btn -box-sd-effect">  <i class="fa fa-aoole fa-lg" aria-hidden="true"><img alt="" src="http://simpleicon.com/wp-content/uploads/apple.png" width="30px"></img></i>  sign up as Apple</button>
        </form>
    </div>
 
</div>




  );
};

export default LoginForm;