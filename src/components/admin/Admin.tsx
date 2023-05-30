import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from '../customer/products/ProductList'
import AdminRoute from './AdminRoute'
import AdminHome from './pages/home/AdminHome'
import NewUser from './pages/newUser/NewUser'
import Product from './pages/product/Product'
import User from './pages/user/User'
import UserList from './pages/userList/UserList'

const Admin = () => {
    return (
        <div>
            <React.Fragment >
                <Routes>
                    <Route path="/" element={<AdminRoute />} >
                        <Route index path='/' element={<AdminHome />} />
                        <Route path='/users' element={<UserList />} />
                        <Route path='/users/:userId' element={<User />} />
                        <Route path='/users/new' element={<NewUser />} />
                        <Route path='/products' element={< ProductList />} />
                        <Route path='/products/:productId' element={<Product />} />
                    </Route>
                </Routes>
            </React.Fragment>

        </div>
    )
}

export default Admin