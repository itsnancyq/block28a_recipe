import { useState, useEffect } from "react"

function RecipeList(){
    const [recipe, setRecipe] = useState([])
    
    useEffect(()=>{

    const getRecipes = async () =>{
      const res = await fetch("https://fsa-recipe.up.railway.app/api/recipes")
      const data = await res.json()
      setRecipe(data)
      console.log(data)
    }

    getRecipes();
  }, [])


    return(
        <>
            {
                recipe.map((recipes)=>
                    <div key={recipes.idMeal}>
                        <h2>{recipes.strMeal}</h2>
                        <button onClick={()=>{recipes.strInstructions}}>Details</button>
                    </div>
                )
            }
        </>
    )
}

export default RecipeList