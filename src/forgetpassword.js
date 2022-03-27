import React, { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import { Link } from 'react-router-dom';



const Reset = () => {
  const [state, setState] = useState({
    email: "",

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
 

    };
    axios.post("https://monolist.io/monolist/public/api/auth/forget_password", userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
      window.open("./verification","_self");
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
        <p style={{ paddingLeft: '40px', fontSize: '1.5em' }}>Forgot your password?</p>
        <p style={{ paddingLeft: '40px' }}>To reset your password, please enter the email address<br></br> of your Monolist account.</p>

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



            <button type="submit" className="form-control" class="btn login">Reset Password</button>


            <hr></hr>
        
            <p> Go to <Link to="/login">login</Link></p>

          </div>

        </form>
      </div>


    </div>


  );
};

export default Reset;