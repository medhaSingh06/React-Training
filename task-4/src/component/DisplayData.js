import React from 'react'

export const DisplayData = (props) => {
  return (
    <div>
        {props.nameArr.map( (item) => (
            <div key={item.id}>
            <p>
               {item.name}
               <button onClick={() => props.deleteName(item.id)}>Delete</button>
            </p>
            </div>
        ))}
    </div>
  )
}
