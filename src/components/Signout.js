import React, { useState } from "react";
import axios from "axios";

function Signout() {

    const[signOut, setSignOut] = useState(false)

    
    const handleSignOutClick = () => {

        axios.delete("http://localhost:3001/logout", { withCredentials: true })
            .then(response => {
                setSignOut(true)
            }).catch(error => {
                console.log('no', error)
            })
            




    }

    return(
        <button type="submit" onClick={() => handleSignOutClick()}>Logout</button>
    )
}

export default Signout