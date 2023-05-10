import React, { Component } from 'react'

export class Show extends Component {
    render() {
        const imgStyle ={
            maxHeight: '400px',
        }

        const showImage = () => {
            if (pokemon.img.split(".").pop().length ===3) {
                return <img style={imgStyle} src={pokemon.img} alt={pokemon.name} />
            }
            else {
                return <img style={imgStyle} src={pokemon.img + '.jpg'} alt={pokemon.name} />
            }
        }

        const pokemon = this.props.pokemon;
        return (
            <div>
                <h1>Gotta Catch 'Em All</h1>
                <h2>{pokemon.name}</h2>
                {showImage()}
                <a href="/pokemon">back</a>
            </div>
        )
    }
}

export default Show

