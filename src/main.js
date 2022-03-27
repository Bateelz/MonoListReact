import React from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom"
import LoginForm from './login'
import Signup from './register'
import Reset from './forgetpassword'
import List from './list'
import Otpcode from './email-ver'
import Profile from './profile'




export default function Main() {
return(
<>
<BrowserRouter>
{/* <Link to="/signup">signup</Link>
<Link to="/login">login</Link> */}
<Routes>
<Route index path="/" element={<LoginForm/>}/>
<Route index path="/signup" element={<Signup/>}/>
<Route exact path="/login" element={<LoginForm/>}/>
<Route exact path="/resetpassword" element={<Reset/>}/>
<Route exact path="/verification" element={<Otpcode/>}/>
<Route exact path="/list" element={<List/>}/>
<Route exact path="/profile" element={<Profile/>}/>
</Routes>
</BrowserRouter>
</>
)

}