import { useEffect, useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import RecipeList from './components/RecipeList'
import Register from './components/Register'
import Login from './components/Login'
import Favorite from './components/Favorite'

function App() {


  return (
    <>
    <h1>Recipes 4 U!</h1>

    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>

    <Routes>
      <Route path="/" element={<RecipeList/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
