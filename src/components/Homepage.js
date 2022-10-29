import React, { useState } from "react";
import Navbar from "./Navbar";
import Signin from "./Signin";
import Signup from "./Signup"

function Homepage() {


    return(

        <>
            <Navbar/>

            <section id="Home" className="Home">
                <div className="Homepage-background">
                    <div className="Homepage-back1">
                        <div className="Homepage-text1">
                            BAZZAR
                        </div>
                        <div className="Homepage-text2">
                            Connecting with food
                        </div>
                    </div>
                </div>
            </section>

            <section id="About" className="About">
                <div className="About-background">
                    <div className="About-back2">
                        <div className="About-text1">
                            About
                        </div>
                        <div className="About-text2">
                            <p>A place to share your passion and love for food with the world.</p>
                            <p>Do you have a food creation you need to tell people about?</p>
                            <p>Then, BAZZAR is the place for you.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Share" className="Share">
                <div className="Share-background">
                    <div className="Share-back3">
                        <div className="Share-text1">
                            Share and Create
                        </div>
                        <div className="Share-text2">
                            <p>Wheather its a midnight snack, your grandmas pizza or a Michellin star dish,</p>
                            <p>share your recipe with the world.</p> 
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="footer">
                <footer>
                    <span><a className="logo1">BAZZAR</a> </span>
                    <span className="logo2"> Copyright &copy; 2022 BAZZAR, Inc.</span>
                </footer>
            </div>

            

            

        </>
    )
}



export default Homepage