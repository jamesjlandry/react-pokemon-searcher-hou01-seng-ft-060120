import React from 'react'
import PokemonPage from './components/PokemonPage'
import './App.css'



class App extends React.Component {

  getPokemon = () => {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemon => {
      this.setState({
        pokemon
      })
    })
  }

  findMons = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  createPokemon =(e) => {
    e.preventDefault();
    let pokemon = {
      name: e.target.name.value,
      hp: e.target.hp.value,
      sprites: {
        front: e.target.frontUrl.value,
        back: e.target.backUrl.value
      }
    }
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        accept: "application/json",
        'content-type': 'application/json'
      },
      body: JSON.stringify(pokemon)
    })
    .then(res=> res.json())
    .then(() => {
      this.getPokemon()
    })
  }
  
  componentDidMount() {
    this.getPokemon()
  }

  state = {
    pokemon: [],
    searchTerm: ''
  }

  render() {
    return (
  <div className="App">
    <PokemonPage pokemon={this.state.pokemon.filter(pokemon => pokemon.name.match(this.state.searchTerm))} createPokemon= {this.createPokemon} findMons= {this.findMons}/>
  </div>
    )
  }

}

export default App
