import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { loggedInContext, reciepCreateContext } from "../Context";

function RecipeCreate() {

    let navigate = useNavigate();

    const { loggedIn, setLoggedIn } = useContext(loggedInContext);

    const handleLogin = () => {
        axios.get("http://localhost:3001/logged_in", { withCredentials: true })
            .then(response => {
                if(response.data.logged_in) {
                    setLoggedIn({...loggedIn, loggedInStatus: true, user: response.data.user})
                }
                else {
                    setLoggedIn({...loggedIn, loggedInStatus: false, user: {}})
                    navigate("/")
                }
            })
    };

    useEffect(() => {
        handleLogin()
        
    }, []);

    const { recipe, setRecipe } = useContext(reciepCreateContext)

    const handleChange = (event) => {
        setRecipe({...recipe, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post("http://localhost:3001/recipes", {
            user_id: loggedIn.user.id,
            title: recipe.title,
            serving_size: recipe.serving_size,
            cook_time: recipe.cook_time,
            prep_time: recipe.prep_time,
            method: recipe.method,
            ingredients: recipe.ingredients,
        })
        .then(response => {
            if(response.status === 200) {
                navigate("/RecipePage")
            }
        })
        .catch(error => {
            console.log(error)
        })
    };

    return (
        <div className="recipe-back">

            <div className="recipe-square"></div>

            <div className="recipe-title-head">Start your world of creation</div>

            <form className="recipe-submit" onSubmit={handleSubmit}>
                <TextField
                    className="recipe-properties"
                    variant="outlined"
                    type="text"
                    name="title"
                    label="Recipe title"
                    value={recipe.title}
                    onChange={handleChange}
                    required
                />

                <TextField
                    className="recipe-properties"
                    type="number"
                    name="serving_size"
                    label="Serving size"
                    value={recipe.serving_size}
                    onChange={handleChange}
                    required
                />

                <TextField
                    className="recipe-properties"
                    type="number"
                    name="cook_time"
                    label="Cooking time"
                    value={recipe.cook_time}
                    onChange={handleChange}
                    required
                />

                <TextField
                    className="recipe-properties"
                    type="number"
                    name="prep_time"
                    label="Prep time"
                    value={recipe.prep_time}
                    onChange={handleChange}
                    required
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Ingredients"
                    multiline
                    rows={5}
                    className="textarea-prop"
                    type="textarea"
                    name="ingredients"
                    value={recipe.ingredients}
                    onChange={handleChange}
                    required
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Method"
                    multiline
                    rows={5}
                    className="textarea-prop"
                    type="textarea"
                    name="method"
                    value={recipe.method}
                    onChange={handleChange}
                    required
                />

                <Button 
                    className="recipe-post-button" 
                    variant="contained"
                    type="submit"
                    sx={{
                        background: '#1D9637'
                    }}
                >
                    Post Recipe
                </Button>
            </form>
        </div>
    )

};

export default RecipeCreate;