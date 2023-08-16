import React, {useState} from 'react'
import { useNavigate } from 'react-router'


export const DisplayUsers = (props) => {

    const navigate = useNavigate();

    const editBtn = (user) => {
      navigate(`/user/edit/${user.id}`)
      props.editData(user);
    }

    const deleteBtn = (id) => {
      props.deleteItem(id);
      navigate(`/user/delete/${id}`)
    }
     
  return (
    <>
        {props.userList.map( (item) => (
            <div key={item.id}>
            <li >{item.name}</li>
          
            <button onClick={()=> deleteBtn(item.id)}>Delete</button>
            <button onClick={()=>editBtn(item) }>Edit</button>
            {/* <button onClick={()=> openModal()}>Delete</button> */}
            </div>
        )
        )}

        

        <button onClick={() => navigate('/user/add')}>+Add</button>

        
    </>
  )
}
