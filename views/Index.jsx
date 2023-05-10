import React, { Component } from 'react'
import pokemon from '../models/pokemon';

export class Index extends Component {
  render() {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        height: '100vh',
        width: '100wh',
        padding: 0,
        margin: 0,
        };
        
// The name of each pokemon, as a list item, inside an unordered list
// This list should be dynamically rendered by jsx based on your data from your 'database'
// You'll notice the pokemon names aren't properly capitalized! Let's fix that! Manipulate the data programatically to capitalize the first letter of their names


    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
           {pokemon.map((poke, idx)=>{
            return(
              <li>
                <a href={`/pokemon/${idx}`}>{poke.name.charAt(0).toLocaleUpperCase() + poke.name.slice(1)}</a>
              </li>
            )
            })}
        </ul>
       <nav>
        <a href="/pokemon/new">Add A New Pokemon</a>
       </nav>
          
      </div>
    )
  }
}

export default Index
