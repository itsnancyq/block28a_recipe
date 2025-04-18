import { useState } from "react"
import Register from "./Register"

function Login ({token}){
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)

    async function handleCheck(){
        try{
        const response = await fetch("https://fsa-recipe.up.railway.app/api/auth/login",
            {
                method: "GET",
                headers: { 
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            })
            const result = await response.json()
            setSuccessMessage(result)

        }catch(error){
            setError(error.message)
        }
    }


    return(
        <>
        <h2>Login! Don't be shy!</h2>
        {successMessage ?
        <div>

            <h2>your username is {}</h2>
        </div>
        :
        <h2>You are not signed in!</h2>
        }
        <button onClick={handleCheck}>Login</button>
        </>
    )
}

export default Login