import React, { useEffect, useContext } from "react";
import axios from "axios";
import { loggedInContext } from "../Context";
import RecipeShow from "./RecipeShow";
import { useNavigate } from 'react-router-dom'
import RecipePageNav from "./RecipePageNav";


function RecipePage() {


    let navigate = useNavigate();

    const { loggedIn, setLoggedIn } = useContext(loggedInContext)

    const handleLogin = () => {
        axios.get("http://localhost:3001/logged_in", { withCredentials: true })
            .then(response => {
                if(response.data.logged_in) {
                    setLoggedIn({...loggedIn, loggedInStatus: true, user: response.data.user.email})
                }
                // else {
                //     setLoggedIn({...loggedIn, loggedInStatus: false, user: {}})
                //     navigate("/")
                // }
            })
    };

    const handleLogout = () => {
        axios.delete("http://localhost:3001/logout", { withCredentials: true })
            .then(response => {
                if(response.data.logged_out) {
                    setLoggedIn({...loggedIn, loggedInStatus: false, user: {}})
                    navigate("/")
                }
            })
    };

    useEffect(() => {
        handleLogin()
        
    }, []);

    return(
        <div>

            <RecipePageNav handleLogout={handleLogout}/>

            <h3>Welcome: {JSON.stringify(loggedIn.user)}</h3>
            
            <RecipeShow/>

        </div>

    )

};




export default RecipePage