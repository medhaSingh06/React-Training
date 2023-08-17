// simple form with multiple fields
// which can be handled by a single handle change function



import React from 'react'

export const Billing = ({data, handleChange}) => {
  return (
    <>

       
       <div>

        <label>First Name</label>
            <input 
                type='text'
                name='firstName'
                value={data.firstName}
                onChange={handleChange}
            />

        <label>Last Name</label>
            <input 
                type='text'
                name='lastName'
                value={data.lastName}
                onChange={handleChange}
            />
        <label>Address</label>
            <input
                placeholder='address line 1'
                type='text'
                name='address1'
                value={data.address1}
                onChange={handleChange}
            />

            <input
                placeholder='address line 2'
                type='text'
                name='address2'
                value={data.address2}
                onChange={handleChange}
            />

            <label>City</label>
                <input 
                    type='text'
                    name='city'
                    value={data.city}
                    onChange={handleChange}
                />

            <label>Options</label>
            <select
                name='options'
                value={data.options}
                onChange={handleChange}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
       </div>

    </>
  )
}
