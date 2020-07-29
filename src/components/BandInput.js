// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  // handleChange = (e) => {
  //   const {name, value} = e.target
  //   this.setState({
  //     [name]: value
  //   })
  // }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    }) 
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="name">Band Name:</label>
          <input 
            type="text" 
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />

          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default BandInput;
