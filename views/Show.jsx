import React, { Component } from 'react'

export class Show extends Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img+'.jpg'} alt= {pokemon.name} />
        <a href="/pokemon">back</a>
      </div>
    )
  }
}

export default Show