import React, { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import { Link } from 'react-router-dom';


const Confirmpassword = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    password_confirmation: ""
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
      password_confirmation: state.password_confirmation

    };
    axios.post("https://monolist.io/monolist/public/api/auth/forget_password/updatepassword", userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Password Changed',
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


    <div class="form-modal" style={{ height:'80%' }}
    > 

      <div class="form-toggle">
        <br></br>
        <img style={{ paddingLeft: '40px' }} src="https://raw.githubusercontent.com/Bateelz/monolist/main/public/assets/images/monolist_red_full_02.png" alt="" width="160px"></img>



      </div>


      <div id="login-form" >
        <br></br>
        <p style={{ paddingLeft: '40px', fontSize: '1.5em' }}>Confirm your password?</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
          <label>Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={state.email}
              onChange={handleChange}
              className="form-control"
              required='true'

            />
            <label>New Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={state.password}
              onChange={handleChange}
              className="form-control"
              required='true'

            />
             <label>Confirm Password</label>
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              value={state.password_confirmation}
              onChange={handleChange}
              className="form-control"
              required='true'

            />



            <button type="submit" className="form-control" class="btn login">Confirm Password</button>


            <hr></hr>
            <p> Go to <Link to="/login">login</Link></p>


          </div>

        </form>
      </div>


    </div>


  );
};

export default Confirmpassword;