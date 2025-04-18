import { useState } from "react";

function Register ({setToken}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event){
       event.preventDefault();
       try{
            const response = await fetch("https://fsa-recipe.up.railway.app/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const result = await response.json()
            setToken(result)

       }catch(error){
            console.error(error)
       }
    }

    return(
        <>
        <h2>Sign Up! or else...</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Username:
                <input name="username" onChange={(event)=> setUsername(event.target.value)}
                value={username}
                />
            </label>
            <label>
            Password:
                <input name="password" onChange={(event)=> setPassword(event.target.value)}
                value={password}
                />
            </label>
            <button>Register NOW!!!!!</button>
        </form>
        </>
    )
}

export default Register