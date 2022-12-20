import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { recipeContext } from "../Context";
import { loggedInContext, getUserInfoContext } from "../Context";

export default function OutlinedCard() {

    // Getting the id from the user currently logged in
    const { loggedIn, setLoggedIn } = useContext(loggedInContext);

    const handleUserId = () => {
        axios.get("http://localhost:3001/logged_in", { withCredentials: true })
            .then(response => {
                if(response.data.logged_in) {
                    setLoggedIn({...loggedIn, loggedInStatus: true, user: response.data.user})
                }
            })
    };

    useEffect(() => {
        handleUserId()
    }, []);
    
    // Getting the recipe 
    const { showRecipe, setShowRecipe } = useContext(recipeContext);

    const recipeShow = () => {
        axios.get("http://localhost:3001/recipes/index")
            .then(response => {
                setShowRecipe(response.data)
            })
    };

    useEffect(() => {
        recipeShow()
    }, []);

    // Getting the info for the user
    const { userInfo, setUserInfo } = useContext(getUserInfoContext)

    useEffect(() => {
        axios.get('http://localhost:3001/users')
        .then(response => {
            setUserInfo(response.data)
        })

    }, []);
    
    return (
      <>
        <Card>
            {showRecipe ? showRecipe.map(showRecipe => {
                return (
                    <div key={showRecipe.id}>
                        <CardContent className="card-style" sx={{border: '3px solid #1D9637'}}>
                            <Link 
                                to={`/RecipeInfo/${showRecipe.title}`} 
                                state={{showRecipe: showRecipe}}
                            >
                                <div  className="card-info">{showRecipe.title}</div>
                            </Link>

                            {userInfo ? userInfo.map(userInfo => {
                                return(
                                    <div key={userInfo.id}>
                                       {showRecipe.user_id === userInfo.id ? 
                                        <div className="recipe-user">by {userInfo.email.split('@')[0]} </div> : ""}
                                    </div>
                                )
                            }) : "no"}
                            
                        </CardContent>

                    </div>
                )
            }): "ERROR"}
        </Card>

      </>
        
    );
};
