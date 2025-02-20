import React from "react";
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import AnhängerListing from '../pages/AnhängerListing'

const routers = () => {
    return (
    <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/anhängerlisting' element={<AnhängerListing/>} />
    </Routes>
    )
}

export default routers
