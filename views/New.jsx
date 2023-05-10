import React, { Component } from 'react'

export class New extends Component {
  render() {
    return (
      <div>
        <h1>Add A New Pokemon To The Database</h1>
        <form action="/pokemon" method='POST'>
            Pokemon Name: <input type="text" name='name' id='name'/><br/>
            Image URL: <input type="text" name="img" id="imgURL" /><br/>
            <input type="submit" value='Add Pokemon'/><br/>
        </form>
      </div>
    )
  }
}

export default New