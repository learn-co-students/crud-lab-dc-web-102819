import React, { Component } from 'react';
import { connect } from 'react-redux'

class Review extends Component {

  render() {
    const { review, remove } = this.props

    
    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => remove(review.id)}> X </button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  remove: (id) => dispatch({type: 'DELETE_REVIEW', id})
})

export default connect(null, mapDispatchToProps)(Review);
