import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import{Route, Routes} from 'react-router-dom'
import Addproduct from '../../Components/AddProduct/Addproduct'
import Listproduct from '../../Components/ListProduct/Listproduct'

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/addproduct' element={<Addproduct></Addproduct>}>
        </Route>
        <Route path='/Listproduct' element={<Listproduct></Listproduct>}>
        </Route>
      </Routes>
    </div>
  )
}

export default Admin