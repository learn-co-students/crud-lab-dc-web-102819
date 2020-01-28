import React, { Component } from 'react';
import Review from './Review';
import {connect} from 'react-redux'

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(review => <Review key={review.id} review={review}/>)}
      </ul>
    );
  }
};

const mapStateToProps = ({reviews}, ownProps) => ({
  reviews: reviews.filter(review => review.restaurantId === ownProps.restaurant.id) 
})

export default connect(mapStateToProps)(Reviews)