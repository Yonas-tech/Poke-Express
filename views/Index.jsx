import React, { Component } from 'react'
// import pokemon from '../models/pokemon';
import styled from 'styled-components';

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
    
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
           {this.props.pokemon.map((poke, idx)=>{
            return(
              <li key={idx}>
                <a href={`/pokemon/${poke.id}`}>{poke.name.charAt(0).toLocaleUpperCase() + poke.name.slice(1)}</a>
              </li>
            )
            })}
        </ul>
       <nav>
          <a href="/pokemon/new"><button>Add A New Pokemon</button></a>
       </nav>
          
      </div>
    )
  }
}

export default Index


// const aLink = styled.a
// `

// `