import React from 'react'

export const InputAdd = (props) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input  {...props.input}/>
    </div>
  )
}
