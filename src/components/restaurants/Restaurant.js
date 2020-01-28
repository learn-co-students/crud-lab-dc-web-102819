import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import { connect } from 'react-redux'

class Restaurant extends Component {

  clickHandler = () => {
    this.props.delete(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.clickHandler}> X </button>
          <ReviewsContainer restaurant={restaurant} />
        </li>
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => {
  return {
    delete: (id) => dispatch({type: 'DELETE_RESTAURANT', id })
  }
}

export default connect(null, mapDispatchToProps)(Restaurant);
