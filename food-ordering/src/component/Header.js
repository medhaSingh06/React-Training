import React, { useState } from 'react'
import { Cart } from './Cart'
import style from './Styles/Header.module.css'
// header section will contain name and cart btn

export const Header = () => {


  return (
    <div className={style.container}>
        <h2>Foodie</h2>
        <Cart />

        {/* cart btn */}
    </div>
  )
}
