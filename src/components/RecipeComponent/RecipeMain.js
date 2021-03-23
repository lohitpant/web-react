import { useState } from 'react';
import style from './recipemain.module.css';
import Recipe from './Recipe';
import Search from './Search';

function App() {

  const APP_ID="6b1f303c";
  const APP_KEY="5edcb6d26d60650ad9d86c5266bb7efe";

  const getRecipes= async ()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
    setRecipes(data.hits);
  }
  
  const[recipes, setRecipes]=useState([]);
  const[search, setSearch]=useState("");

  const handleSearch=e=>{
    setSearch(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(search){
    getRecipes();
    setSearch('');
  }
  }

  return (
    <div className={style.App}>
      <Search submit={handleSubmit} value={search} change={handleSearch} /> 
      <div className={style.recipes}>
      {recipes.map(recipe=>(
        <Recipe image={recipe.recipe.image} label={recipe.recipe.label} calories={recipe.recipe.calories}/>
      ))}
      </div>
    </div>
  );
}

export default App;
