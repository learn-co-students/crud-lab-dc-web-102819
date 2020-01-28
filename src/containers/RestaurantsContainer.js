import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput add={this.props.add}/>
        <Restaurants restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => {
  return {restaurants}
}

const mapDispatchToProps = dispatch => {
  return {
    add: (text) => dispatch({type: 'ADD_RESTAURANT', payload: text})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
