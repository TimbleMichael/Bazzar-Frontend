import React, { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { commentContext, recipeContext, loggedInContext } from "../Context";
import { Button } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';


function CommenetsPage({recipeId}) {

    const { comment, setComment } = useContext(commentContext);

    const handleChange = (event) => {
        setComment({...comment, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDeafault()

        axios.post("http://localhost:3001/comments", {
            body: comment.body
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    style={{width: 450, height: 150}}
                    className="textarea-prop"
                    type="textarea"
                    name="body"
                    placeholder="Comment"
                    value={comment.body}
                    onChange={handleChange}
                />

                <Button
                    type="text"
                >
                    Post
                </Button>

                

            </form>

            {console.log(recipeId)}

         
           
        </div>

    );

};

export default CommenetsPage;