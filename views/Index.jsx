import React, { Component } from 'react'

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
      </div>
    )
  }
}

export default Index
