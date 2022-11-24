import React, { useContext } from "react";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { recipeContext } from "../Context";

export default function OutlinedCard() {
    
    const { showRecipe, setShowRecipe } = useContext(recipeContext)

    const recipeShow = () => {
        axios.get("http://localhost:3001/recipes/index")
            .then(response => {
                setShowRecipe(response.data)
            })
    };

    useEffect(() => {
        recipeShow()
    }, []);

    return (
      <Card>
        {showRecipe ? showRecipe.map(showRecipe => {
            return (
                <div key={showRecipe.id}>
                    <CardContent className="card-style" sx={{border: '1px solid #1D9637'}}>
                        <Link 
                            to={`/RecipeInfo/${showRecipe.title}`} 
                            state={{showRecipe: showRecipe}}
                        >
                            <h1  className="card-info">{showRecipe.title}</h1>
                        </Link>
                    </CardContent>
                </div>
            )
        }): "ERROR"}
      </Card>
        
    );
};
