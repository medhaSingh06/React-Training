import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CartContext from './Cart-context'

// show--- no of items
// price
// confirm and cancel

export const Cart = (props) => {

    const cartCtx = useContext(CartContext)
    // const numberOfCartItems = cartctx.items.length;
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {return curNumber + item.amount} , 0);


    const [show, setShow] = useState(false);
    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false)

    const cartItems =[
        {id: 'c1', name: 'Sushi', amount: 2, price: 12.99},
    ].map((item) => <li>{item.name}</li>)
    // for first modal
    const handleShowCart = () => setShow(true);
    
    const handleCloseCart = () => setShow(false);
    
    const handleCartSubmit = () => {
        setSecondModalIsOpen(true)
        setShow(false);
    }



    // for second modal
    const handleConfirm = () => {
        setSecondModalIsOpen(false);
    }
  return  (
    <>
        <Button 
            variant="primary"  
            onClick={handleShowCart}
        >Cart
        <span> {numberOfCartItems}</span>
        </Button>


    {/* FIRST MODAL */}
        <Modal
            show={show}
            onHide={handleCloseCart}
        >
            <Modal.Header closeButton>
                <Modal.Title>Cart Items</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>{cartItems}</div>
                <div>Total price</div>
                <div>40</div>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={handleCloseCart}
                >
                Close
                </Button>

                <Button
                    variant="secondary"
                    onClick={handleCartSubmit}
                >
                confirm Order
                </Button>
            </Modal.Footer>
        </Modal>


        {/* SECOND MODAL */}
        <Modal
            show={secondModalIsOpen}
            onHide={handleConfirm}
        >

        <Modal.Body>
            <p>Order is confirm Successfully </p>
            <Button
                variant='secondary'
                onClick={handleConfirm}>Close</Button>
        </Modal.Body>

        </Modal>
    </>
  )
}
