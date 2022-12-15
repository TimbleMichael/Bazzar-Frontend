import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function RecipePageNav({handleLogout, userInfo}) {

    return(
        <nav className="recipe-nav">
            <div className="Recipe-heading">
                BAZZAR
            </div>
            
            <div className="recipe-nav-items">
                <ul className="recipe-nav-menu">
                    <li>
                        <div className="userName">
                            Welcome, {typeof userInfo === 'string' ? userInfo.split('@')[0] : "ERROR"}
                        </div>
                    </li>
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
