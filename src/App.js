import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import RecipePage from './components/RecipePage';
import Signup from './components/Signup';
import RecipeCreate from './components/RecipeCreate';
import RecipeInfo from './components/RecipeInfo';
import Error from './components/Error';
import { signUpContext, 
         loggedInContext, 
         signInContext, 
         recipeContext, 
         reciepCreateContext, 
         commentContext, 
         getCommentContext,
         getUserInfoContext,
         likeContext,
         clickContext,
         getLikeContext } from './Context';
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

  // Context for getting Comments
  const [getComment, setGetComment] = useState('');

  const showComment = useMemo(() => ({getComment, setGetComment}), [getComment, setGetComment]);

  // Context for getting User Info
  const [userInfo, setUserInfo] = useState('');

  const showUserInfo = useMemo(() => ({userInfo, setUserInfo}), [userInfo, setUserInfo]);

  return (
    <BrowserRouter>
      <signUpContext.Provider value={signUp}>
      <loggedInContext.Provider value={logInStatus}>
      <signInContext.Provider value={signIn}>
      <recipeContext.Provider value={recipeGetDetails}>
      <reciepCreateContext.Provider value={recipeCreate}>
      <commentContext.Provider value={commentPost}>
      <getCommentContext.Provider value={showComment}>
      <getUserInfoContext.Provider value={showUserInfo}>
        <Routes>
            <Route path="/" element={<Homepage/>} exact />
            <Route path="/Signin" element={<Signin/>} exact />
            <Route path="/Signup" element={<Signup/>} exact />
            <Route path="/RecipePage" element={<RecipePage/>} exact />
            <Route path="/RecipeCreate" element={<RecipeCreate/>} exact />
            <Route path="/RecipeInfo/:id" element={<RecipeInfo />} exact/>
            <Route path="*" element={<Error />} exact/>
        </Routes>    
      </getUserInfoContext.Provider>
      </getCommentContext.Provider>
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
