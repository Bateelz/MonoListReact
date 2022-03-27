import React, { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import { Link } from 'react-router-dom';




const Otpcode = () => {
  const [state, setState] = useState({
    code: "",
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
      code: state.code

    };
    axios.post("https://monolist.io/monolist/public/api/auth/forget_password/checkcode", userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
      window.open("/resetpassword","_self");
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
        <p style={{ paddingLeft: '40px', fontSize: '1.5em' }}>Enter your OTP Code?</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>OTP Code</label>
            <input
              type="text"
              name="code"
              id="code"
              value={state.code}
              onChange={handleChange}
              className="form-control"
              required='true'

            />



            <button type="submit" className="form-control" class="btn login">Send</button>


            <hr></hr>
            <p> Go to <Link to="/login">login</Link></p>

          </div>

        </form>
      </div>


    </div>


  );
};

export default Otpcode;