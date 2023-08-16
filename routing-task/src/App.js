
import './App.css';
import { Route, Router, Routes } from 'react-router';
import { Home } from './Components/Home';
import { User } from './Components/User';
import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { DisplayUsers } from './Components/DisplayUsers';
import { DeleteUser } from './Components/DeleteUser.js';
import { EditUser } from './Components/EditUser';

const initialValue = [ 
  {
  id:1,
  name: "fwqsa",
  email: "ds@fed"
  },
  {
    id:2,
    name: "efvd",
    email: "dsaxz@bf"
  }
]
function App() {

  const [userList, setUserList]  = useState(initialValue)
  const [editUserData, setEditUserData] = useState()
  const addList = (obj) => {
    setUserList((prev) => {
      return [obj, ...prev]
    })

  }
  // console.log(userList)
  const deleteItem = (id) => {
    const updatedUsers = userList.filter(user => user.id !== id)
    setUserList(updatedUsers)
  }

  const editData = (user) => {
    // console.log(user)
    setEditUserData(user)
  }

  const handleEdit = (id,data) => {
    const updatedData = userList.map(val =>+val.id=== +id ? data : val)
    setUserList(updatedData);
  }

  // console.log(editUserData)
  return (
    <div className="App">
    
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/user' element={<DisplayUsers  userList={userList} editData={editData}  deleteItem={deleteItem} />} />
      <Route path='/user/add' element={<User addList={addList}/>} />
      <Route  path='/user/delete/:id' element={<DeleteUser />}/>
      <Route  path='/user/edit/:id' element={<EditUser editUserData={editUserData} handleEdit={handleEdit} />}/>
    </Routes>
    </div>
  );
}

export default App;
