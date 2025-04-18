import { useState, useEffect } from "react"
import RecipeList from "./RecipeList"
import { Link } from "react-router-dom"

function Favorite(){
    const [favorite, setFavorite] = useState("")

    async function auth(){
        try{
        const response = await fetch("https://fsa-recipe.up.railway.app/api/favorites",
            {
                method: "GET",
                headers: { 
                    Authorization: `Bearer ${token}`
                },
            })
            const result = await response.json()
            auth(result)

        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{

        const getFavorite = async () =>{
            const res = await fetch("https://fsa-recipe.up.railway.app/api/recipes")
            const data = await res.json()
            setFavorite(data)
        }
        getFavorite();

        const storedName = localStorage.getItem("favorite")

        if(storedName){
            setFavorite({favorite: storedName})
        }
    },[])

    useEffect (()=>{
        if(favorite){
            localStorage.setItem("favorite", favorite.name)
        }else{
            localStorage.removeItem("favorite")
        }
    }, [favorite])

    return(
        <div>
        <img src={favorite.strMealThumb} style={{height:"400px"}}/>
        <p>{favorite.strMeal}</p>
        <p>{favorite.ingredients}</p>
        <p>{favorite.strInstructions}</p>
        <Link to="/">Back to Home</Link>
        {/* <button onClick={()=>{setFavorite()}}>Remove Favorite</button> */}
        </div>
    )
}

export default Favorite