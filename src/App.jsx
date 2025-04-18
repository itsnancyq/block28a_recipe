import { useEffect, useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import RecipeList from './components/RecipeList'
import Register from './components/Register'
import Login from './components/Login'
import Favorite from './components/Favorite'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
    <h1>Cooking Mama IRL</h1>

    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/favorite">Favorites</Link>
    </nav>

    <Routes>
      <Route path="/" element={<RecipeList/>}/>
      <Route path="/register" element={<Register token={token} setToken={setToken}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/favorite" element={<Favorite/>}/>
    </Routes>
    </>
  )
}

export default App
