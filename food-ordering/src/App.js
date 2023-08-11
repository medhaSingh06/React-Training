
import { useState } from 'react';
import './App.css';
import { Header } from './component/Header';
import { DisplayMeals } from './component/DisplayMeals';
import CartProvider from './component/CartProvider';

const DUMMY_MEALS = [
  {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
]

function App() {  
  
  const [meals, setMeals] = useState(DUMMY_MEALS)
  const [cart, setCart] = useState([]);

  // add to cart btn
  const addToCart = (itemId) => {
    const existingCartItem = cart.find( (cartItem) => cartItem.id === itemId.id)

    if(existingCartItem){
      setCart ( (prevCart) => prevCart.map( (cartItem) =>
        cartItem.id === itemId.id ? 
        {
          ...cartItem, quantity:cartItem.quantity+1
        } : cartItem));
    }
    else
    {
      setCart ( (prevCart) => [...prevCart, {...itemId, quantity:1}])
    }
    console.log(existingCartItem)
    console.log(itemId)
  }

  const removeFromCart = (itemId) => {
    setCart( (prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId))
  }

  return (
    <CartProvider className="App">
      <Header />
      <DisplayMeals  meals={meals} addToCart={addToCart} />
    </CartProvider>
  );
}

export default App;
