import React, { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { commentContext, loggedInContext } from "../Context";
import { Button } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';


function CommenetsPage({recipeId}) {

    const { loggedIn, setLoggedIn } = useContext(loggedInContext);

    const handleUserIdForComment = () => {
        axios.get("http://localhost:3001/logged_in", { withCredentials: true })
            .then(response => {
                if(response.data.logged_in) {
                    setLoggedIn({...loggedIn, loggedInStatus: true, user: response.data.user})
                }
            })
    };

    useEffect(() => {
        handleUserIdForComment()

    }, [])

    const { comment, setComment } = useContext(commentContext);

    const handleChange = (event) => {
        setComment({...comment, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post("http://localhost:3001/comments", {
            body: comment.body,
            recipe_id: recipeId,
            user_id: loggedIn.user.id
        })
        .then(response => {
            if(response.data.status === 'created') {
                window.location.reload();
            }
        })
        .catch(error => {
            console.log(error)
        })
    };

    return(
        <div className="comment-section">
            <form className="comment" onSubmit={handleSubmit}>
                <TextareaAutosize
                    className="comment-box"
                    style={{height: 50, borderRadius: 5}}
                    type="textarea"
                    name="body"
                    placeholder="Start the conversation"
                    value={comment.body}
                    onChange={handleChange}
                    required
                />
                
                <Button
                    className="comment-button"
                    type="submit" 
                    variant="contained" 
                    sx={{
                        background: '#1D9637',
                        boxShadow: 3
                    }}
                >
                    Post
                </Button>

                

            </form>
           
        </div>

    );

};

export default CommenetsPage;