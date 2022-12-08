import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return(
        <>
            <div className="error">404! ERROR</div>
            <div className="error">PAGE NOT FOUND</div>

            <iframe className="error-gif" src="https://giphy.com/embed/ll7K8vFXP7f4cxuykh" width="480" height="270" frameBorder="0"></iframe>

            <div className="error-message">
                <Link to={"/"}>
                    Go Back!
                </Link>
            </div>

            
        </>
    )
}

export default Error;