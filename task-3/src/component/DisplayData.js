import React from 'react'

export const DisplayData = (props) => {
  return (
    <div>
        {props.nameArray.map( (item) => (
            <div key={item.id}>{item.name}</div>
        ))}
    </div>
  )
}
