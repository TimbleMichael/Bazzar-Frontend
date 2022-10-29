import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Signout from "./Signout";

function RecipePage() {

    const[loggedIn, setLoggedIn] = useState({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
    })

    // const handleLogin = () => {

    //     axios.get("http://localhost:3001/logged_in")
    //         .then(response => {
    //             console.log(response.data)
    //             if(response.data.logged_in) {
    //                 setLoggedIn ({loggedInStatus: "LOGGED_IN", user: response.user}) 
    //             }
    //             else {
    //                 setLoggedIn({loggedInStatus: "NOT_LOGGED_IN", user: {}})
    //             }
    //         })
    // }

    useEffect(() => {
        axios.get("http://localhost:3001/logged_in")
            .then(response => {
                console.log(response)
                if(response.data.logged_in) {
                    setLoggedIn ({loggedInStatus: "LOGGED_IN", user: response.user}) 
                }
                else {
                    setLoggedIn({loggedInStatus: "NOT_LOGGED_IN", user: {}})
                }
            })
    }, [])

    const[recipe, setRecipe] = useState({
        title: "",
        servingSize: "",
        cookTime: "",
        prepTime: "",
        ingredients: "",
        method: ""
    });


    return(
        <div>
            <p>{loggedIn.loggedInStatus}</p>
            <h1>Food lives her</h1>

            <Signout/>
           


        </div>

    )

    
}




export default RecipePage