import React, { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import { Link } from 'react-router-dom';


const Signup = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    fullname: ""
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
      password: state.password,
      fullname: state.fullname

    };
    axios.post("https://api.monolist.io/monolist/public/api/auth/register", userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thank You',
        showConfirmButton: false,
        timer: 1500
      })
    }).catch(error => Swal.fire({
      position: 'center',
      icon: 'fail',
      title: "invalid Email ",
      showConfirmButton: false,
      timer: 1500
    }));
  };

  return (


    <div class="form-modal">


      <div class="form-toggle">
        <br></br>
        <img style={{ paddingLeft: '40px' }} src="https://raw.githubusercontent.com/Bateelz/monolist/main/public/assets/images/monolist_red_full_02.png" alt="" width="160px"></img>



      </div>


      <div id="login-form" >
        <br></br>
        <p style={{ paddingLeft: '40px', fontSize: '1.5em' }}>Register</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={state.email}
              onChange={handleChange}
              className="form-control"
              required='true'

            />

            <label>FullName</label>
            <input
              type="text"
              name="fullname"
              value={state.fullname}
              onChange={handleChange}
              className="form-control"
              required='true'

            />



            <label>Password</label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required='true'
              className="form-control" />



            <button type="submit" className="form-control" class="btn login">Sign Up</button>


            <p> Already signed up? Go to <Link to="/login">login</Link></p>
          
          </div>

          <hr />
          <button type="button" class="btn -box-sd-effect">  <i class="fa fa-linkedin fa-lg" aria-hidden="true"><img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" width="30px" alt=""></img></i>
            Continue with Google </button>
          <button type="button" class="btn -box-sd-effect"> <i class="fa fa-facebook fa-lg" aria-hidden="true"><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" width="30px" alt=""></img></i>  Continue with Facebook</button>
          <button type="button" class="btn -box-sd-effect">  <i class="fa fa-aoole fa-lg" aria-hidden="true"><img alt="" src="http://simpleicon.com/wp-content/uploads/apple.png" width="30px"></img></i>   Continue with Apple</button>
        </form>
      </div>


    </div>


  );
};

export default Signup;