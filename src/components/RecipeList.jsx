import { useState, useEffect } from "react"

function RecipeList(){
    const [recipe, setRecipe] = useState([])
    const [details, setDetails] = useState([])
    
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
                        <img src={recipes.strMealThumb} style={{height:"400px", padding:"40px"}}/>
                        <h2>{recipes.strMeal}</h2>
                        <button onClick={()=> setDetails()}>Details</button>
                    </div>
                )
            }
        </>
    )
}

export default RecipeList