import React, { useState } from 'react'
import { Billing } from './Billing'

export const Form = () => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        options: ''
    })


    const handleSubmit =(e) => {
            // we will get th data in form of json
            e.preventDefault()
            console.log(data)
    }

    const handleChange = (e) => {

        const type =  e.target.type
        const name = e.target.name

        const value = type === "checkbox"? 
            e.target.checked : e.target.value


        setData(prevData => ({...prevData, [name]: value}))
    }

    const {address2, ...other} = data
    const canSave = [...Object.values(other)].every(Boolean)
  return (
    <>

        <form onSubmit={handleSubmit}>
            <h2>Billing Form</h2>
            <Billing  data={data}  handleChange={handleChange}/>
            <button type='submit' disabled={!canSave}>Submit</button>
        </form>

    </>
  )
}
