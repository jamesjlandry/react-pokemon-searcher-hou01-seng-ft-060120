import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
state = {
  cardFront: true
}

flipCard = () => {
  let cardFlipped = !this.state.cardFront
  this.setState({
    cardFront: cardFlipped
  })

}

  render() {
    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image">
            <img alt="oh no!" src= {this.state.cardFront ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} style={{width: 92, height: 92}}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                  {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
