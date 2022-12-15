import React from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Navbar() {
    return(
        <nav className="nav">
            <a href="/" className="Navbar-logo">BAZZAR</a>
            <ul className="nav-menu">
                <li>
                    <HashLink className="link" smooth to='#About'>About</HashLink>
                </li>
                <li>
                    <HashLink className="link" smooth to='#Share'>Share</HashLink>
                </li>
                <li>
                    <Link className="link" to="/Signup">
                        <Button className="button-nav"
                            variant="contained" 
                            sx={{
                                background: '#1D9637'
                            }}>
                            Sign Up
                        </Button>
                    </Link>
                </li>
            </ul>

            

       


        </nav>
    )
}

export default Navbar