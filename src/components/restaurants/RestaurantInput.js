import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.add(this.state.text)
    this.setState({text: ''})
  } 
  
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' value={this.state.text}onChange={(e) => this.setState({text: e.target.value})} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
