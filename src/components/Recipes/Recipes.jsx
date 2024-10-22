/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Recipes = ({ addRecipeToQueue }) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, []);

    return (
        <div className="md:w-2/3 grid md:grid-cols-2 grid-cols-1 gap-5">
           {
            recipes.map(
            recipe => <Card 
            addRecipeToQueue={addRecipeToQueue} 
            key={recipe.id} 
            recipe={recipe}/>
        )
           }
        </div>
    );
};

export default Recipes;