import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import RecipePage from './components/RecipePage';
import Signup from './components/Signup';
import RecipeCreate from './components/RecipeCreate';
import CommentsPage from './components/CommentsPage';
import RecipeInfo from './components/RecipeInfo';
import { signUpContext, loggedInContext, signInContext, recipeContext, reciepCreateContext, commentContext } from './Context';
import { useState, useMemo } from 'react';



function App() {

  // Context for Signup
  const[signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    password_confirmation: ""

  });

  const signUp = useMemo(() => ({signUpInfo, setSignUpInfo}), [signUpInfo, setSignUpInfo]);

  // Context for checking LoggedIn status
  const[loggedIn, setLoggedIn] = useState({
    loggedInStatus: false,
    user: {}
  });

  const logInStatus = useMemo(() => ({loggedIn, setLoggedIn}), [loggedIn, setLoggedIn]);

  // Context for Signin
  const[signInInfo, setSignInInfo] = useState({
    email: "",
    password: ""
  });

  const signIn = useMemo(() => ({signInInfo, setSignInInfo}), [signInInfo, setSignInInfo]);

  // Context for Displaying Recipes 
  const[showRecipe, setShowRecipe] = useState('');

  const recipeGetDetails = useMemo(() => ({showRecipe, setShowRecipe}), [showRecipe, setShowRecipe]);

  // Context for Recipe Creation
  const[recipe, setRecipe] = useState({
    title: "",
    serving_size: "",
    cook_time: "",
    prep_time: "",
    method: "",
    ingredients: ""
  });

  const recipeCreate = useMemo(() => ({recipe, setRecipe}), [recipe, setRecipe]);

  // Context for Comments
  const[comment, setComment] = useState('');

  const commentPost = useMemo(() => ({comment, setComment}), [comment, setComment]);

  return (
    <BrowserRouter>
      <signUpContext.Provider value={signUp}>
      <loggedInContext.Provider value={logInStatus}>
      <signInContext.Provider value={signIn}>
      <recipeContext.Provider value={recipeGetDetails}>
      <reciepCreateContext.Provider value={recipeCreate}>
      <commentContext.Provider value={commentPost}>
        <Routes>
            <Route path="/" element={<Homepage/>} exact />
            <Route path="/Signin" element={<Signin/>} exact />
            <Route path="/Signup" element={<Signup/>} exact />
            <Route path="/RecipePage" element={<RecipePage/>} exact />
            <Route path="/RecipeCreate" element={<RecipeCreate/>} exact />
            <Route path="/CommentsPage" element={<CommentsPage/>} exact />
            <Route path="/RecipeInfo/:id" element={<RecipeInfo />} exact/>
        </Routes>
      </commentContext.Provider>
      </reciepCreateContext.Provider>
      </recipeContext.Provider>
      </signInContext.Provider>
      </loggedInContext.Provider>
      </signUpContext.Provider>
    </BrowserRouter>
  )
  
}


export default App;
