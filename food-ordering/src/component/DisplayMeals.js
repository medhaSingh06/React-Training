import React, { useState } from 'react'
// import  ListGroup  from 'react-bootstrap/ListGroup'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { MealsAdd } from './MealsAdd';

export const DisplayMeals = ({meals, addToCart}) => {
  const [inputQuatity, setInputQuatity]  =useState(5);
  return (
    <Card> 

        <ListGroup variant = "flush">
            {meals.map( (item) => (
                <ListGroupItem key ={item.id}>
                    <h5>{item.name}</h5>
                    <p>Description: {item.description}</p>
                    <p>Price : ${item.price.toFixed(2)}</p>
                    {/* <input 
                      type='number'
                      // defaultValue="0"
                      value={inputQuatity}
                      min="1"
                      max="5"
                      step="1"
                    />
                    <button onClick={() => {addToCart(item.id)}}>Add</button> */}
                    <MealsAdd/>
                </ListGroupItem>
            ))}



        </ListGroup>
        
    </Card>
  )
}
