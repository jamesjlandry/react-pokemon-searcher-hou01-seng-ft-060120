import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon= {this.props.createPokemon}/>
        <br />
        <Search findMons= {this.props.findMons}/>
        <br />
        <PokemonCollection pokemon= {this.props.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
