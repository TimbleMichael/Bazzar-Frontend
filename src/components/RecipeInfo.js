import React from "react";
import { useLocation } from "react-router-dom";
import CommentsPage from "./CommentsPage";

 const RecipeInfo = () => {

  const location = useLocation();
  console.log(location)

  return (
      <>
        <div>

          <div className="info-title">{location.state.showRecipe.title}</div>
          <hr></hr>
          <div className="info-general">Serves: {location.state.showRecipe.serving_size}</div>
          <div className="info-general">Cooking Time: {location.state.showRecipe.cook_time} minutes</div>
          <div className="info-general">Prep Time: {location.state.showRecipe.prep_time} minutes</div>
          <div className="info-ingredients">Ingredients: {location.state.showRecipe.ingredients}</div>
          <div className="info-method">Method: {location.state.showRecipe.method}</div>

          <hr></hr>
          
        
       
          <h3>Comments</h3>

          <CommentsPage recipeId={location.state.showRecipe.id} />

          

          


          
        </div>
      </>
    );
};

export default RecipeInfo;