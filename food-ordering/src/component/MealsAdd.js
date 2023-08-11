import React from 'react'
import { InputAdd } from './InputAdd'

// input and btn and call n display meals

export const MealsAdd = (props) => {
  return (
    <form>
      <InputAdd 
        label="Amount"
        input = { {
          id: 'amount',
          type: 'number',
          min: '1',
          max : '5',
          step: '1',
          defaultValue : '1'
        }}
      />
      <button >+Add</button>
    </form>
  )
}
