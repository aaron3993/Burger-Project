import React from 'react'

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'}
]

const buildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
      key={ctrl.label}
      label={ctrl.label}
      more={() => props.added(ctrl.type)}
      less={() => props.removed(ctrl.type)}
      />
    ))}
  </div>
)

export default buildControls