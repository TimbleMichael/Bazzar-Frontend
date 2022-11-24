import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function RecipePageNav({handleLogout}) {

    return(
        <nav className="recipe-nav">
            <div className="Recipe-heading">
                BAZZAR
            </div>
            
            <div className="recipe-nav">
                <ul>
                    <li>
                        <Link className="create-link" to='/RecipeCreate'>
                            <Button
                                className="create-button"
                                variant="contained"
                                sx={{
                                    color: 'green',
                                    background: 'white',
                                }}
                            >
                                CREATE RECIPE
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Button
                            className="Logout-button"
                            type="click" 
                            onClick={() => handleLogout()}
                            variant="text"
                            sx={{
                                background: 'white'
                            }}
                        >
                            Logout
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default RecipePageNav;
