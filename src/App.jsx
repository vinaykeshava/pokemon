import { CssBaseline } from '@mui/material'
import AppBar from './components/Appbar'
import Search from './components/Search-Page'
import PokemonList from './components/Listing'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import PokemonsDetails from './components/pokemonDetails'
import Bookmark from './components/Bookmark'

function App() {

  return (
    <Router>
      <AppBar />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/list" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonsDetails />} /> 
        <Route path="/bookmarks" element={<Bookmark />} /> 
      </Routes>
    </Router>
  )
}

export default App
