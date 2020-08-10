import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  render() {
    return (
      <Card.Group itemsPerRow={6} >
        <h1>{this.props.pokemon.map(pokemon => <PokemonCard key= {pokemon.id} pokemon={pokemon}/>)}</h1>
      </Card.Group>
    )
  }
}

export default PokemonCollection
