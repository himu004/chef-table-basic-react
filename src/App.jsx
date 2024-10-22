
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipe from './components/OurRecipes/OurRecipe'
import Recipes from './components/Recipes/Recipes'
import SideBar from './components/SideBar/SideBar'

function App() {

  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparingRecipe, setPreparingRecipe] = useState([]);

  const addRecipeToQueue = (recipe) => {
    const isExits = recipeQueue.find((item) => item.id === recipe.id);
     if(!isExits) {
      setRecipeQueue([...recipeQueue, recipe]);
     }else {
      alert("Recipe already exits in queue...");
     };
     
  };

  const handleRemove = (id) => {
    //  find which recipe to remove
    const deletedRecipe = recipeQueue.find((item) => item.id === id);

    const updatedQueue = recipeQueue.filter((item) => item.id !== id);
    setRecipeQueue(updatedQueue);
    setPreparingRecipe([...preparingRecipe, deletedRecipe]);
  };

  return (
    <>
      <Header/>
      <Banner/>
      <OurRecipe/>
      <main className='md:flex gap-5'>
        <Recipes addRecipeToQueue={addRecipeToQueue}/>
        <SideBar recipeQueue={recipeQueue} handleRemove={handleRemove} preparingRecipe={preparingRecipe}/>
      </main>
    </>
  )
}

export default App
