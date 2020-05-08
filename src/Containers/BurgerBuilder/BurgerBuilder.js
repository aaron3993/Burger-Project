import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 1.2,
  cheese: 0.5,
  meat: 2
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = type => {
    const updatedIngredients = this.state.ingredients
    const updatedCount = updatedIngredients[type] + 1
    this.state.ingredients[type] = updatedCount
    const newPrice = INGREDIENT_PRICES[type] + this.state.totalPrice
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
  }

  removeIngredientHandler = type => {
    const updatedIngredients = this.state.ingredients
    const updatedCount = this.state.ingredients[type] - 1
    updatedIngredients[type] = updatedCount
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
        added={this.addIngredientHandler}
        removed={this.removeIngredientHandler}/>
      </Aux>
    )
  }
}

export default BurgerBuilder