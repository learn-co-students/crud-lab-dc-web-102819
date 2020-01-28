import React, { Component } from 'react';
// import Reviews from './Reviews';
import {connect} from 'react-redux'

class ReviewInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  changeHandler = (e) => {
    this.setState({text: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.add(this.state.text, this.props.restaurant.id)
    this.setState({text: ''})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" value={this.state.text} onChange={this.changeHandler} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    add: (text, restId) => dispatch({type: 'ADD_REVIEW', review: {
      text: text,
      restaurantId: restId
    }})
  }
}

export default connect(null, mapDispatchToProps)(ReviewInput);
