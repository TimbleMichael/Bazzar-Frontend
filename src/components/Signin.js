import React, { useContext } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { signInContext } from '../Context';


function Signin() {

  const { signInInfo, setSignInInfo } = useContext(signInContext);

  const handleChange = (event) => {
    setSignInInfo({...signInInfo, [event.target.name]: event.target.value})
  };

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post("http://localhost:3001/sessions", {
      user: {
        email: signInInfo.email,
        password: signInInfo.password
      }
    }, 
    { withCredentials: true }
    ).then(response => {
      if(response.data.logged_in === true) {
        navigate("/RecipePage")
      }
    }).catch(error => {
      console.log("error", error)
    })
  };

  return(
    <div className='Signin-back'>

      <h1 className='Signin-heading'>Login</h1>

      <div className="square-signin"></div>

      <form onSubmit={handleSubmit} className="submit-signin">
        <TextField
          className="submit-properties"
          variant="outlined"
          type="email"
          name="email"
          label="Email"
          value={signInInfo.email}
          onChange={handleChange}
          required
        />

        <TextField
          className="submit-properties"
          variant="outlined"
          type="password"
          name="password"
          label="Password"
          value={signInInfo.password}
          onChange={handleChange}
          required
        />

        <Button 
          className="signin-button"
          type="submit"
          variant="contained"
          sx={{
            background: '#1D9637'
          }}>
          Sign in
        </Button>
      </form>

      <div className="signuppage-heading">
          Don't have an account?
          <Link className="link" to="/Signup"> Sign up</Link> 
      </div>

    </div>
  )

};

export default Signin;