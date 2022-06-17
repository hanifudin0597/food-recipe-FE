import React from 'react'
import { Routes, Route, BrowserRouter, Outlet, Navigate } from 'react-router-dom'
import Addrecipe from '../views/Addrecipe'
import Login from '../views/Login'
import Profile from '../views/Profile'
import Register from '../views/Register'
import Index from '../views/Index'
import Detailrecipe from '../views/Detailrecipe'
import Searchrecipe from '../views/Searchrecipe'
import EditRecipe from '../views/Editrecipe'
import Detailvideo from '../views/Detailvideo'

const router = () => {


    const PrivateRoute = () => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')
        if (token && user) {
            return <Outlet />
        }
        else {
            return <Navigate to="/login" />
        }
    }


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recipe" element={<Searchrecipe />} />

                    {/* Private Route */}
                    <Route path="/profile" element={<PrivateRoute />}>
                        <Route index element={<Profile />} />
                    </Route>
                    <Route path="/:id" element={<PrivateRoute />}>
                        <Route index element={<Detailrecipe />} />
                    </Route>
                    <Route path="/addrecipe" element={<PrivateRoute />}>
                        <Route index element={<Addrecipe />} />
                    </Route>
                    <Route path="/editrecipe/:id" element={<PrivateRoute />}>
                        <Route index element={<EditRecipe />} />
                    </Route>
                    <Route path="/video/:id" element={<PrivateRoute />}>
                        <Route index element={<Detailvideo />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter >

    )
}

export default router
