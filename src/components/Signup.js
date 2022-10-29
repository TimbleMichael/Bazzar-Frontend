import axios from "axios";
import React from "react"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// Using 'Functional Component'
// Ensure function name is the same name as file name, and start with a capital.
function Signup() {

    // Using 'useState' hook
    // By default, email, password, and password_confirmation will be empty -> signUpInfo, which is the initial state
    // Then the info will be updated via setSignUpInfo
    // i.e FIRST item in array is ALWAYS the CURRENT STATE, and the SECOND item in array is the function that allows CURRENT STATE to be UPDATED.
    const[signUpInfo, setSignUpInfo] = useState({
        email: "",
        password: "",
        password_confirmation: ""

    });

    // Defining when the initial state gets updated.
    // Taking the previous state with spread operator (...), and CHANGING "event.target.name" (username, password, passowrd_conrimation),
    // and CHANGING the value from the initial state (signUpInfo.email...)
    const handleChange = (event) => {
        setSignUpInfo({...signUpInfo, [event.target.name]: event.target.value})
    };

    let navigate = useNavigate();

    // Defining what to do when submit is pressed
    const handleSubmit = (event) => {
        event.preventDefault()

        // Axios post request, takes in three arguments.
        // The URL, the data that needs to be posted in JSON format, and withCredentials
        axios.post("http://localhost:3001/users", {
            user: {
                email: signUpInfo.email,
                password: signUpInfo.password,
                password_confirmation: signUpInfo.password_confirmation
            }
        }, { withCredentials: true })
        .then(response => {
            if (response.data.status === 'created') {
                navigate("/RecipePage")
                
            }
        })
        .catch(error => {
            console.log('Error', error.data)
        })
    };

    return (
        <div className="Signup-back">
            {/* Signup form */}
            {/* name and value for the form that will be used to set and change as user interacts */}

            <div className="Signup-heading">
                BAZZAR
                <div className="Signup-subtext">
                    Share your food creations
                </div> 
            </div>

            <div className="square"></div>

            <form onSubmit={handleSubmit} className="submit">
                <TextField
                    className="submit-properties"
                    variant="outlined"
                    type="email" 
                    name="email" 
                    label="Email"
                    value={signUpInfo.email} 
                    onChange={handleChange} 
                    required
                />

                <TextField
                    className="submit-properties"
                    variant="outlined"
                    type="password" 
                    name="password" 
                    label="Password"
                    value={signUpInfo.password}
                    onChange={handleChange}  
                    required
                />

                <TextField
                    className="submit-properties"
                    variant="outlined"
                    type="password" 
                    name="password_confirmation" 
                    label="Password confirmation" 
                    value={signUpInfo.password_confirmation} 
                    onChange={handleChange} 
                    required
                />

                <Button 
                    className="signup-button"
                    type="submit" 
                    variant="contained" 
                    sx={{
                        background: '#1D9637'
                    }}>
                    Sign Up
                </Button>
            </form>

            <div className="signinpage-heading">
                Already on Bazzar?
                <Link className="link" to="/Signin"> Sign in</Link> 
            </div>

        </div>
    )

};

export default Signup