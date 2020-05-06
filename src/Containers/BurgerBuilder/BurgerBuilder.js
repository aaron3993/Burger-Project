import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../Burger/Burger'
import BuildControls from '../BuildControls/BuildControls'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  addIngredientHandler () {

  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>{BuildControls}</div>
      </Aux>
    )
  }
}

export default BurgerBuilder