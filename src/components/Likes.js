import axios from "axios";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Likes({recipeId, showId}) {

    const [like, setLike] = useState(0);
    const [isClicked, setIsClicked] = useState(false);    
    const [likeId, setLikeId] = useState('');
    const [isActive, setIsActive] = useState(false);

    const clickLike = () => {
        axios.post('http://localhost:3001/likes', {recipe_id: recipeId, user_id: showId})
            .then(response => {
                setLike(like + 1)
                setLikeId(response.data.id)
                console.log(response)
            })
    };

    const clickNotLike = () => {
        axios.delete(`http://localhost:3001/likes/${likeId}`)
            .then((response) => {
                setLike(like - 1)
                console.log(response)
            })
    };

    const likeFt = () => {
        if(!isClicked) {
            clickLike()
        }
        else {
            clickNotLike()
        }
        setIsClicked(!isClicked)
    };

    return (
        <>
            <div onClick={() => {setIsActive(!isActive); likeFt();}}>
                {isActive ? <FavoriteIcon sx={{color: 'green'}}/> : <FavoriteBorderIcon sx={{color: 'green'}}/>} 
            </div>

        </>
    )
};

export default Likes;