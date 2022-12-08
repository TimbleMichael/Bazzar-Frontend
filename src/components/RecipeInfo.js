import axios from "axios";
import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import CommentsPage from "./CommentsPage";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { getCommentContext, getUserInfoContext } from "../Context";

 const RecipeInfo = () => {

  const location = useLocation();
  
  const { getComment, setGetComment } = useContext(getCommentContext);

  const showComment = () => {
    axios.get("http://localhost:3001/comments/index")
      .then(response => {
        if(response.status === 200) {
          setGetComment(response.data)
        }
      })
  };

  useEffect(() => {
    showComment()
  }, []);

  const { userInfo, setUserInfo } = useContext(getUserInfoContext)

  useEffect(() => {
      axios.get('http://localhost:3001/users')
      .then(response => {
          setUserInfo(response.data)
      })

  }, []);

  return (
      <>
        <div>

          <Card>
            <CardContent className="recipe-info-card">
              <div className="info-title">{location.state.showRecipe.title}</div>
              <div className="info-general">Serves: {location.state.showRecipe.serving_size}</div>
              <div className="info-general">Cooking Time: {location.state.showRecipe.cook_time} minutes</div>
              <div className="info-general">Prep Time: {location.state.showRecipe.prep_time} minutes</div>
              <div className="info-ingredients">Ingredients: {location.state.showRecipe.ingredients}</div>
              <div className="info-method">Method: {location.state.showRecipe.method}</div>
            </CardContent>
          </Card>

          <hr className="recipe-break"/>
          
        
       
          <h3 className="comment-heading">Conversation</h3>

          <CommentsPage recipeId={location.state.showRecipe.id} />

          <Card>
            {getComment ? getComment.map(getComment => {
              if(getComment.recipe_id === location.state.showRecipe.id) {
                return(
                  <div key={getComment.id}>
                    <CardContent className="card-style-comment" sx={{border: '2px solid #1D9637'}}>
                      <div className="comment-body">{getComment.body}</div>

                      {userInfo ? userInfo.map(userInfo => {
                        return(
                            <div key={userInfo.id}>
                                {getComment.user_id === userInfo.id ? 
                                <div className="comment-user">{userInfo.email.split('@')[0]} </div> : ""}
                            </div>
                        )
                      }) : "no"}

                      
                    </CardContent>
                  </div>
                )
              }

            }): "no comment"}
          </Card>
          
        </div>
      </>
    );
};

export default RecipeInfo;